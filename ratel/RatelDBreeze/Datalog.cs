using DBreeze;
using Helios.Buffers;
using Helios.Channels;
using Ratel.Node;
using Ratel.Proxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Channels;
using System.Text;

namespace Ratel.RatelDBreeze
{
    public class Datalog
    {

        public const string _Ratel_log = "_Ratel_log";

        /// <summary>
        /// 日志表
        /// </summary>
        public const string _log_Record = "_log_Record";

        /// <summary>
        /// 日志 key
        /// </summary>
        public const string _log_Record_key = "_log_Record_key";

        /// <summary>
        /// 
        /// </summary>
        public const string _Business_Type_Data = "_Business_Type_Data";

        /// <summary>
        /// 
        /// </summary>
        public const string _Business_Type = "_Business_Type";

        /// <summary>
        /// 
        /// </summary>
        public static DBreezeEngine dbEngine = null;

        /// <summary>
        /// 
        /// </summary>
        private IChannelHandlerContext _context = null;

        /// <summary>
        /// 
        /// </summary>
        static Datalog()
        {
            string _path = YamlConfig.ServerConfSetting.GetPath("\\Data");

            DBreezeConfiguration conf = new DBreezeConfiguration()
            {
                DBreezeDataFolderName = _path,
                Storage = DBreezeConfiguration.eStorage.DISK,
            };
            dbEngine = new DBreezeEngine(conf);
            DBreeze.Utils.CustomSerializator.ByteArraySerializator = ProtobufSerializer.SerializeProtobuf;
            DBreeze.Utils.CustomSerializator.ByteArrayDeSerializator = ProtobufSerializer.DeserializeProtobuf;

        }



        /// <summary>
        /// 
        /// </summary>
        public static long GetTimestamp()
        {
            var dateTime = DateTime.UtcNow.Ticks;
            DateTime dt = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            return (dateTime - dt.Ticks) / 10000;
        }

        /// <summary>
        ///
        /// </summary>
        public static DateTime NewDate(long timestamp)
        {
            DateTime dt = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            long tt = dt.Ticks + timestamp * 10000;
            return new DateTime(tt);
        }


    }



    public class RatelHttpResponses
    {
        public RatelHttpResponses() { }

        public RatelHttpResponses(int _code = 200, string _message = "操作成功!")
        {
            this.code = _code;
            this.message = _message;
        }


        public int code { get; set; }

        public string message { get; set; }

    }


    [ProtoBuf.ProtoContract]
    public struct RatelMessagePack
    {
        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(1)]
        public string command { get; set; }


        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(2)]
        public byte[] Data { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(3)]
        public string conf_key
        {
            get;set;
        }
    }


    public class Command
    {
        /// <summary>
        /// 
        /// </summary>
        public const string AddCluster = "AddCluster";

        /// <summary>
        /// 
        /// </summary>
        public const string GetCluster = "GetCluster";

        /// <summary>
        /// 
        /// </summary>
        public const string UpdateCluster = "UpdateCluster";

        /// <summary>
        /// 
        /// </summary>
        public const string GetDataLog = "Add_IP_DataLog";


        #region common command
        /// <summary>
        /// 
        /// </summary>
        public const string RequestCommand_DataLog = "RequestCommand_DataLog";
        /// <summary>
        /// 
        /// </summary>
        public const string GetRequestCommand_DataLog = "GetRequestCommand_DataLog";

        /// <summary>
        /// 
        /// </summary>
        public const string Execute_Command_DataLog = "Execute_Command_DataLog";


        /// <summary>
        /// 
        /// </summary>
        public const string Thread_DataLog = "Thread_DataLog";


        #endregion



        /// <summary>
        /// 
        /// </summary>
        public const string AddBusinessType = "AddBusinessType";

        public const string GetBusinessTypeLog = "GetBusinessTypeLog";

        public const string UpdateBusinessType = "UpdateBusinessType";


        /// <summary>
        /// 
        /// </summary>
        public const string AddBusinessData = "AddBusinessData";

        public const string GetBusinessDataLog = "GetBusinessDataLog";

        public const string UpdateBusinessData = "UpdateBusinessData";

    }

    public class OperationCommandType
    {

        public const string GetCommandDataLog = "GetCommandDataLog";



        /// <summary>
        /// 
        /// </summary>
        public const string IPAddress = "IPAddress";
        /// <summary>
        /// 
        /// </summary>
        public const string DelIPAddress = "DelIPAddress";



        /// <summary>
        /// 
        /// </summary>
        public const string BusinessType = "BusinessType";
        /// <summary>
        /// 
        /// </summary>
        public const string DelBusinessType = "DelBusinessType";



        /// <summary>
        /// 
        /// </summary>
        public const string BusinessData = "BusinessData";
        /// <summary>
        /// 
        /// </summary>
        public const string DelBusinessData = "DelBusinessData";

    }


    [ProtoBuf.ProtoContract]
    public class DataLogModel
    {
        [ProtoBuf.ProtoMember(1)]
        public long Id { get; set; } = Datalog.GetTimestamp();

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(2)]
        public string TableName { get; set; }

        /// <summary>
        ///
        /// </summary>
        [ProtoBuf.ProtoMember(3)]
        public string OperationType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(4)]
        public byte[] Data { get; set; }


    }


    //[ProtoBuf.ProtoContract]
    //public class TableTest
    //{
    //    /// <summary>
    //    /// 
    //    /// </summary>
    //    [ProtoBuf.ProtoMember(1)]
    //    public string key { get; set; }

    //    /// <summary>
    //    /// 
    //    /// </summary>
    //    [ProtoBuf.ProtoMember(2)]
    //    public string TableName { get; set; }

    //    /// <summary>
    //    /// 
    //    /// </summary>
    //    [ProtoBuf.ProtoMember(3)]
    //    public string Content { get; set; }


    //}



    [ProtoBuf.ProtoContract]
    public class IPClustersModel
    {
        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(1)]
        public string key { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(2)]
        public string TableName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(3)]
        public string Content { get; set; }

        [ProtoBuf.ProtoMember(4)]
        public bool Master { get; set; }

    }

    /// <summary>
    /// 
    /// </summary>
    [ProtoBuf.ProtoContract]
    public class NodeModel
    {
        [ProtoBuf.ProtoMember(1)]
        public string host { get; set; }

        [ProtoBuf.ProtoMember(2)]
        public bool master { get; set; }

        [ProtoBuf.ProtoMember(3)]
        public bool me { get; set; } = false;

    }

    /// <summary>
    /// Business Type Model
    /// </summary>
    [ProtoBuf.ProtoContract]
    public class BusinessTypeModel
    {
        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(1)]
        public string key { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(2)]
        public string remark { get; set; }

    }

    /// <summary>
    /// Business Data Model
    /// </summary>
    [ProtoBuf.ProtoContract]
    public class BusinessDataModel
    {
        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(1)]
        public string tableName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(2)]
        public string key { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoBuf.ProtoMember(3)]
        public string content { get; set; }


    }



    public class Output
    {
        public Output() { }

        public Output(object data, string msg = "ok")
        {
            this.data = data;
            this.msg = msg;
        }

        public object data { get; set; }

        public string msg { get; set; }

    }

    public class App
    {
        public Project project { get; set; }

        public User user { get; set; }

        public List<Menu> menu { get; set; }

        public site app { get; set; } = new site();

    }

    public class Project
    {
        public string name { get; set; } = "";
    }

    public class site
    {
        public string name { get; set; } = "分布式配置中心";

        public string description { get; set; } = "";

    }


    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
    }
    public class Menu
    {
        public string text { get; set; }
        public bool group { get; set; }
        public bool shortcut_root { get; set; }
        public string link { get; set; }
        public string icon { get; set; }
        public bool linkExact { get; set; } = true;
        public List<Menu> children { get; set; }
    }


    public class InputLoginModel
    {
        public string password { get; set; }

        public string userName { get; set; }

        public int type { get; set; }

    }


    public class OutResponse<T> where T : class, new()
    {
        public int total
        {
            get; set;
        }

        public T list { get; set; } = new T();
    }

    public class Page
    {
        public int pageIndex { get; set; }

    }


    public class BusinessListModel
    {
        public string key { get; set; }

        public string value { get; set; }


        public List<BusinessDataModel> childList = new List<BusinessDataModel>();

    }


}
