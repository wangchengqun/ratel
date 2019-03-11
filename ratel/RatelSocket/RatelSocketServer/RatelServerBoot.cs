using DBreeze;
using Helios.Channels;
using Helios.Channels.Bootstrap;
using Helios.Channels.Sockets;
using Helios.Codecs;
using Ratel.Proxy;
using Ratel.RatelDBreeze;
using Ratel.YamlConfig;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;

namespace Ratel.RatelSocket.RatelSocketServer
{
    public class RatelServerBoot
    {
        public IChannel _serverChannel { get; private set; }

        public ClientBootstrap clientBootstrap { get; private set; }

        public DBreezeEngine dbEngine { get; private set; }


        private string _host { get; set; }
        private int _port { get; set; }

        public RatelServerBoot()
        {
            var serverSettingModel = ServerConfSetting.serverSettingModel;
            this._host = serverSettingModel.Server.ip;
            this._port = serverSettingModel.Server.port;
        }

        public void RunServer()
        {
            var ServerGroup = new MultithreadEventLoopGroup(1);
            var WorkerGroup = new MultithreadEventLoopGroup();

            var counterHandler = new CounterHandlerInbound();

            var sb = new ServerBootstrap().Group(ServerGroup, WorkerGroup)
                .Channel<TcpServerSocketChannel>()
                .ChildOption(ChannelOption.TcpNodelay, true)
                .ChildHandler(
                    new ActionChannelInitializer<TcpSocketChannel>(
                        channel =>
                        {
                            channel.Pipeline
                                .AddLast(new LengthFieldPrepender(4, false))
                                .AddLast(new LengthFieldBasedFrameDecoder(int.MaxValue, 0, 4, 0, 4))
                                .AddLast(counterHandler);
                        }));

            _serverChannel = sb.BindAsync(IPAddress.Parse(this._host), this._port).Result;

        }


        public void RunClient()
        {
            var ClientGroup = new MultithreadEventLoopGroup(1);
            var counterHandler = new ClientCounterHandlerInbound();
            clientBootstrap = new ClientBootstrap().Group(ClientGroup)
              .Option(ChannelOption.TcpNodelay, true)
              .Channel<TcpSocketChannel>().Handler(new ActionChannelInitializer<TcpSocketChannel>(
                  channel =>
                  {
                      channel.Pipeline
                      .AddLast(new LengthFieldPrepender(4, false))
                      .AddLast(new LengthFieldBasedFrameDecoder(int.MaxValue, 0, 4, 0, 4))
                      .AddLast(counterHandler);
                  }));

            var _host = _serverChannel.LocalAddress.ToString();
            Node.ClustersNode.AddNodeDic(new Node.ClustersNodeSetting()
            {
                channel = null,
                ConnectionStatus = true,
                master = true,
                host = _host,
                me = true,
            });

            var _node = ServerConfSetting.serverSettingClusters_Node_Model
                .node.Where(x => x.ip.ToString() != _host).ToList();
            foreach (var item in _node)
            {
                Node.ClustersNode.AddNodeDic(new Node.ClustersNodeSetting()
                {
                    channel = null,
                    ConnectionStatus = false,
                    master = item.master,
                    host = item.ip,
                    me = false,
                });
            }
        }


        public void Registry()
        {
            var _command_Type = typeof(ICommand);
            var impl = new CommandImpl();
            foreach (var item in _command_Type.GetMethods())
            {
                RatelProxy.ProxyRegistry.AddRegistry(item.Name, impl);
            }


        }


        public void ClustersNode(string host = "127.0.0.1", int port = 8999)
        {
            IChannel _clientChannel = null;
            try
            {
                _clientChannel = clientBootstrap.ConnectAsync(IPAddress.Parse(host), port).Result;

            }
            catch (Exception ex)
            {
            }

            var _node = new Node.ClustersNodeSetting();
            _node.channel = null;
            _node.ConnectionStatus = true;
            _node.master = true;
            _node.me = false;
            if (_clientChannel != null)
            {
                _node.host = _clientChannel.RemoteAddress.ToString();
                _node.channel = _clientChannel;

            }
            else
            {
                _node.host = host + ":" + port;
                _node.ConnectionStatus = false;
            }

            Node.ClustersNode.AddNodeDic(_node);

        }


        private Thread _thread1;
        private Thread _thread2;
        public void RunThread()
        {

             _thread1 = new Thread(() =>
            {
                while (true)
                {
                    Thread.Sleep(1000 * 3);
                    foreach (var item in Ratel.Node.ClustersNode.node
                    .Where(x => x.Value.me == false
                    && x.Value.ConnectionStatus == false))
                    {
                        string[] _ip = item.Value.host.Split(':');
                        ClustersNode(_ip[0], int.Parse(_ip[1]));
                    }
                }

            });

             _thread2 = new Thread(() =>
            {
                while (true)
                {
                    Thread.Sleep(1000 * 3);
                    foreach (var item in Ratel.Node.ClustersNode.node.Where(x => x.Value.me == false
                            && x.Value.channel != null
                            && x.Value.master == true))
                    {
                        var data = new RatelMessagePack()
                        {
                            command = Command.Thread_DataLog,
                            Data = CommandImpl.Get_Log_Id().SerializeProtobuf(),
                            conf_key = Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Key,
                        };
                        var _byte = data.SerializeProtobuf();
                        var _unpooled = Helios.Buffers.Unpooled.WrappedBuffer(_byte);
                        item.Value.channel.WriteAndFlushAsync(_unpooled);
                    }
                }

            });

            _thread1.IsBackground = true;
            _thread2.IsBackground = true;
            _thread1.Start();
            _thread2.Start();
        }


        public void RUN()
        {
            RunServer();
            RunClient();
            Registry();
            RunThread();

        }

        public void Close()
        {
            _serverChannel.CloseAsync();
            foreach (var item in Node.ClustersNode.node)
            {
                if (item.Value.channel != null)
                {
                    if (item.Value.channel.IsActive)
                    {
                        item.Value.channel.CloseAsync();
                    }
                }
            }

            _thread1.Interrupt();
            _thread2.Interrupt();

        }

    }
}
