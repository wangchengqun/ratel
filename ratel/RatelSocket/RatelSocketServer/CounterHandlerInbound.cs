
using Helios.Buffers;
using Helios.Channels;
using Ratel.Proxy;
using Ratel.RatelDBreeze;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ratel.RatelSocket.RatelSocketServer
{
    internal class CounterHandlerInbound : ChannelHandlerAdapter
    {

        public override void ChannelRead(IChannelHandlerContext context, object message)
        {
            //context.FireChannelRead(message);
            IByteBuf byteBuf = message as IByteBuf;
            var _byte = byteBuf.ReadBytes(byteBuf.ReadableBytes).Array;
            var _pack = ProtobufSerializer.DeserializeProtobuf<RatelMessagePack>(_byte);

            if (!YamlConfig.ServerConfSetting.Conf_Key_Verify(_pack.conf_key))
                return;

            var _obj = new List<object>();
            _obj.Add(context);
            if (_pack.Data != null)
                _obj.Add(_pack.Data);
            RatelProxy.ProxyFactory.CreateMethodProxy<ICommand>(_pack.command, _obj.ToArray());


        }

        public override void ChannelActive(IChannelHandlerContext context)
        {

            base.ChannelActive(context);
        }


        public override void ExceptionCaught(IChannelHandlerContext context, Exception exception)
        {
            base.ExceptionCaught(context, exception);
        }


    }
}