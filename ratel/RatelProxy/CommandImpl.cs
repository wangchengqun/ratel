using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Helios.Buffers;
using Helios.Channels;
using Ratel.Node;
using Ratel.RatelDBreeze;

namespace Ratel.Proxy
{
    public class CommandImpl : ICommand
    {

        private static object _lock = new object();

        #region Web IPAddress

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        public RatelHttpResponses Add_IP_DataLog(DataLogModel dataLogModel, IPClustersModel iPClustersModel)
        {
            var response = new RatelHttpResponses();
            Node.ClustersNode.AddNodeDic(new ClustersNodeSetting()
            {
                channel = null,
                ConnectionStatus = false,
                host = iPClustersModel.Content,
                master = iPClustersModel.Master,
                me = false
            });

            List<NodeModel> nodeModels = new List<NodeModel>();
            foreach (var item in Node.ClustersNode.node)
            {
                bool _me = item.Value.me;
                nodeModels.Add(new NodeModel()
                {
                    host = item.Key,
                    master = item.Value.master,
                    me = _me
                });
            }

            AddIPAddress(nodeModels);


            //dataLogModel.Data = nodeModels.SerializeProtobuf();
            //using (var t = Datalog.dbEngine.GetTransaction())
            //{
            //    t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);
            //    t.Commit();
            //}
            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);
            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);
            //    }
            //    catch (Exception ex) { }
            //}

            return response;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        public RatelHttpResponses Del_IP_DataLog(DataLogModel dataLogModel, IPClustersModel iPClustersModel)
        {
            var response = new RatelHttpResponses();
            DeleteIPAddress(iPClustersModel.Content);

            //Node.ClustersNode.RemoveNodeDic(iPClustersModel.Content);
            //dataLogModel.Data = iPClustersModel.Content.SerializeProtobuf();
            //using (var t = Datalog.dbEngine.GetTransaction())
            //{
            //    t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);
            //    t.Commit();
            //}
            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);
            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);

            //    }
            //    catch (Exception ex) { }
            //}


            return response;
        }


        private void AddIPAddress(List<NodeModel> ip_node)
        {

            foreach (var item in ip_node)
            {
                var _node = new ClustersNodeSetting()
                {
                    ConnectionStatus = false,
                    host = item.host,
                    master = item.master,
                    me = false,
                    channel = null
                };
                ClustersNode.AddNodeDic(_node);
            }

            YamlConfig.ServerConfSetting.ClustersNodeYaml();
        }

        private void DeleteIPAddress(string ip)
        {
            Node.ClustersNode.RemoveNodeDic(ip);
            YamlConfig.ServerConfSetting.ClustersNodeYaml();
        }


        #endregion



        #region Web Business Type
        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        /// <param name="businessTypeModel"></param>
        public RatelHttpResponses Add_BusinessType_DataLog(DataLogModel dataLogModel, BusinessTypeModel businessTypeModel)
        {
            var response = new RatelHttpResponses();
            dataLogModel.Data = businessTypeModel.SerializeProtobuf();
            using (var t = Datalog.dbEngine.GetTransaction())
            {
                //var _get = t.Select<string, string>(Datalog._Business_Type, businessTypeModel.key);
                //if (_get.Exists)
                //{
                //   
                //}
                t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);
                t.Insert<string, string>(Datalog._Business_Type, businessTypeModel.key, businessTypeModel.remark);
                t.Commit();
            }

            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);
            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,//.AddBusinessType,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);
            //    }
            //    catch (Exception ex) { }
            //}


            return response;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        /// <param name="businessTypeModel"></param>
        /// <returns></returns>
        public RatelHttpResponses Del_BusinessType_DataLog(DataLogModel dataLogModel, BusinessTypeModel businessTypeModel)
        {
            var response = new RatelHttpResponses();
            dataLogModel.Data = businessTypeModel.SerializeProtobuf();
            using (var t = Datalog.dbEngine.GetTransaction())
            {

                t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);
                t.RemoveKey(Datalog._Business_Type, businessTypeModel.key);
                t.RemoveAllKeys(businessTypeModel.key, true);
                t.Commit();
            }

            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);
            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);
            //    }
            //    catch (Exception ex) { }
            //}


            return response;
        }
        #endregion


        #region Web Business Data

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        /// <param name="businessDataModel"></param>
        /// <returns></returns>
        public RatelHttpResponses Add_BusinessData_DataLog(DataLogModel dataLogModel, BusinessDataModel businessDataModel)
        {
            var response = new RatelHttpResponses();
            dataLogModel.Data = businessDataModel.SerializeProtobuf();
            using (var t = Datalog.dbEngine.GetTransaction())
            {
                t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);
                t.Insert<string, string>(businessDataModel.tableName, businessDataModel.key, businessDataModel.content);
                t.Commit();
            }

            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);
            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,//AddBusinessData,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);
            //    }
            //    catch (Exception ex) { }
            //}

            return response;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataLogModel"></param>
        /// <param name="businessDataModel"></param>
        /// <returns></returns>
        public RatelHttpResponses Del_BusinessData_DataLog(DataLogModel dataLogModel, BusinessDataModel businessDataModel)
        {
            var response = new RatelHttpResponses();
            dataLogModel.Data = businessDataModel.SerializeProtobuf();
            using (var t = Datalog.dbEngine.GetTransaction())
            {
                t.Insert(Datalog._Ratel_log, dataLogModel.Id, dataLogModel);

                t.RemoveKey<string>(businessDataModel.tableName, businessDataModel.key, out bool removed);
                t.Commit();
            }

            //var _Node = ClustersNode.node.Where(x => x.Value.ConnectionStatus == true
            //                              && x.Value.me == false
            //                              && x.Value.master == true
            //                              && x.Value.channel != null);

            //foreach (var item in _Node)
            //{
            //    var node_item = item.Value;
            //    try
            //    {
            //        var data = new RatelMessagePack()
            //        {
            //            command = Command.RequestCommand_DataLog,
            //            Data = null,
            //        };
            //        var _byte = data.SerializeProtobuf();
            //        var _unpooled = Unpooled.WrappedBuffer(_byte);
            //        node_item.channel.WriteAndFlushAsync(_unpooled);
            //    }
            //    catch (Exception ex) { }
            //}

            return response;
        }

        #endregion


        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="command"></param>
        private void GetLogSend(IChannelHandlerContext context, string command)
        {
            long id = Get_Log_Record();
            var _pack = new RatelMessagePack()
            {
                command = command,
                Data = id.SerializeProtobuf(),
                conf_key = Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Key,
            };
            var upooled = Unpooled.WrappedBuffer(_pack.SerializeProtobuf());
            context.WriteAndFlushAsync(upooled);

        }


        #region Business Type

        private void AddBusinessType(DBreeze.Transactions.Transaction t, BusinessTypeModel _model)
        {
            t.Insert<string, string>(Datalog._Business_Type, _model.key, _model.remark);
        }

        private void DeleteBusinessType(DBreeze.Transactions.Transaction t, BusinessTypeModel _model)
        {
            t.RemoveKey(Datalog._Business_Type, _model.key, out bool wasremoved);
            t.RemoveAllKeys(_model.key, true);
        }

        #endregion



        #region Business Data

        private void AddBusinessData(DBreeze.Transactions.Transaction t, BusinessDataModel _model)
        {
            t.Insert<string, string>(_model.tableName, _model.key, _model.content);
        }
        private void DeleteBusinessData(DBreeze.Transactions.Transaction t, BusinessDataModel businessDataModel)
        {
            t.RemoveKey<string>(businessDataModel.tableName, businessDataModel.key, out bool wasremoved);
        }

        #endregion


        #region common command
        public void RequestCommand_DataLog(IChannelHandlerContext context)
        {
            try
            {
                GetLogSend(context, Command.GetRequestCommand_DataLog);
            }
            catch (Exception ex)
            {
            }

        }


        public void GetRequestCommand_DataLog(IChannelHandlerContext context, byte[] Data)
        {
            try
            {
                long _id = Data.DeserializeProtobuf<long>();
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _row = t.SelectForwardStartFrom<long, byte[]>(Datalog._Ratel_log, _id, false).Take(1);
                    foreach (var item in _row)
                    {
                        var data = new RatelMessagePack()
                        {
                            command = Command.Execute_Command_DataLog,
                            Data = item.Value,
                            conf_key = Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Key,
                        };
                        var _byte = data.SerializeProtobuf();
                        var _unpooled = Unpooled.WrappedBuffer(_byte);
                        context.WriteAndFlushAsync(_unpooled);
                    }
                }

            }
            catch (Exception ex)
            {
            }

        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="Data"></param>
        public void Execute_Command_DataLog(IChannelHandlerContext context, byte[] Data)
        {
            try
            {
                var _logModel = Data.DeserializeProtobuf<DataLogModel>();
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    string OperationType = _logModel.OperationType;
                    switch (_logModel.OperationType)
                    {
                        case OperationCommandType.DelBusinessData:
                            var del_bus_data = _logModel.Data.DeserializeProtobuf<BusinessDataModel>();
                            DeleteBusinessData(t, del_bus_data);
                            break;
                        case OperationCommandType.BusinessData:
                            var add_bus_data = _logModel.Data.DeserializeProtobuf<BusinessDataModel>();
                            AddBusinessData(t, add_bus_data);
                            break;
                        case OperationCommandType.BusinessType:
                            var add_bus = _logModel.Data.DeserializeProtobuf<BusinessTypeModel>();
                            AddBusinessType(t, add_bus);
                            break;
                        case OperationCommandType.DelBusinessType:
                            var del_bus = _logModel.Data.DeserializeProtobuf<BusinessTypeModel>();
                            DeleteBusinessType(t, del_bus);
                            break;
                        case OperationCommandType.IPAddress:
                            var add_ip = _logModel.Data.DeserializeProtobuf<List<NodeModel>>();
                            AddIPAddress(add_ip);
                            break;
                        case OperationCommandType.DelIPAddress:
                            var del_ip = _logModel.Data.DeserializeProtobuf<string>();
                            DeleteIPAddress(del_ip);
                            break;
                        default:
                            break;
                    }

                    t.Insert(Datalog._Ratel_log, _logModel.Id, _logModel);
                    Add_log_Record(t, _logModel.Id);
                    t.Commit();
                }

            }
            catch (Exception ex)
            {
            }
        }



        public void Thread_DataLog(IChannelHandlerContext context, byte[] Data)
        {
            try
            {
                long _id = Data.DeserializeProtobuf<long>();
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _row = t.SelectForwardStartFrom<long, byte[]>(Datalog._Ratel_log, _id, false).Take(2);
                    foreach (var item in _row)
                    {
                        var data = new RatelMessagePack()
                        {
                            command = Command.Execute_Command_DataLog,
                            Data = item.Value,
                            conf_key = Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Key,
                        };
                        var _byte = data.SerializeProtobuf();
                        var _unpooled = Unpooled.WrappedBuffer(_byte);
                        context.WriteAndFlushAsync(_unpooled);
                    }
                }

            }
            catch (Exception ex)
            {
            }
        }


        public static void Thread_DataLog1111(long _id)
        {
            while (true)
            {
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _row = t.SelectForwardStartFrom<long, DataLogModel>(Datalog._Ratel_log, _id, false).Take(2);
                    foreach (var item in _row)
                    {
                        Console.WriteLine($"{item.Value.OperationType}, {item.Key}");
                        _id = item.Value.Id;
                    }
                }

            }

        }


        #endregion



        #region Record 

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private long Get_Log_Record()
        {
            long id = 0;
            lock (_lock)
            {
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _logModel = t.Select<string, long>(Datalog._Ratel_log, Datalog._log_Record_key);
                    if (_logModel.Exists)
                    {
                        id = _logModel.Value;
                    }
                }
            }
            return id;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static long Get_Log_Id()
        {
            long id = 0;
            lock (_lock)
            {
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _logModel = t.Select<string, long>(Datalog._Ratel_log, Datalog._log_Record_key);
                    if (_logModel.Exists)
                    {
                        id = _logModel.Value;
                    }
                }
            }
            return id;
        }


        /// <summary>
        /// 
        /// </summary>
        private void Add_log_Record(DBreeze.Transactions.Transaction t, long Id)
        {
            lock (_lock)
            {
                t.Insert<string, long>(Datalog._Ratel_log, Datalog._log_Record_key, Id);
            }
        }




        #endregion



        #region MyRegion

        public OutResponse<List<BusinessListModel>> GetList(int pageindex = 1)
        {
            int _pageSize = 10;
            OutResponse<List<BusinessListModel>> businessListModel = new OutResponse<List<BusinessListModel>>();
            using (var t = Datalog.dbEngine.GetTransaction())
            {
                int _skip = (pageindex - 1) * _pageSize;
                var _rows = t.SelectBackwardSkip<string, string>(Datalog._Business_Type, (ulong)_skip).Take(_pageSize);
                foreach (var item in _rows)
                {
                    businessListModel.list.Add(new BusinessListModel()
                    {
                        key = item.Key,
                        value = item.Value,
                    });
                }

                businessListModel.total = (int)t.Count(Datalog._Business_Type);
            }
            return businessListModel;
        }


        public OutResponse<List<BusinessDataModel>> GetListData(string key = "", int pageindex = 1)
        {
            int _pageSize = 10;
            var outResponse = new OutResponse<List<BusinessDataModel>>();
            using (var t = Datalog.dbEngine.GetTransaction())
            {
                int _skip = (pageindex - 1) * _pageSize;
                var _rows = t.SelectBackwardSkip<string, string>(key, (ulong)_skip).Take(_pageSize);

                foreach (var item in _rows)
                {
                    outResponse.list.Add(new BusinessDataModel()
                    {
                        content = item.Value,
                        key = item.Key,
                    });
                }
                outResponse.total = (int)t.Count(key);
            }
            return outResponse;
        }


        public Task<string> GetConf(string tableName, string key)
        {
            try
            {
                using (var t = Datalog.dbEngine.GetTransaction())
                {
                    var _row = t.Select<string, string>(tableName, key);
                    if (_row.Exists)
                    {
                        return Task.FromResult(_row.Value);
                    }
                }
            }
            catch (Exception ex)
            {
            }
            return Task.FromResult("");
        }

        #endregion

    }
}
