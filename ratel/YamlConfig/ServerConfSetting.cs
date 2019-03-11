
using SharpYaml.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Ratel.YamlConfig
{
    public class ServerConfSetting
    {

        private const string _conf = "\\conf\\conf.yaml";

        private const string _conf_Clusters = "\\conf\\Clusters.yaml";


        public static ServerSettingModel serverSettingModel = new ServerSettingModel();

        public static ServerSettingClustersModel serverSettingClusters_Node_Model = new ServerSettingClustersModel();

        public static string GetPath(string path)
        {
            string _path = string.Empty;
            var is_windows = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows);
            if (is_windows)
            {
                _path = System.Environment.CurrentDirectory + path;
            }
            else
            {
                _path = System.Environment.CurrentDirectory + path.Replace("\\", "/");
            }
            return _path;
        }


        public static void ClustersNodeYaml()
        {
            var serializer = new Serializer();
            var buffer = new StringWriter();
            var Clusters = new ServerSettingClustersModel();
            foreach (var item in Node.ClustersNode.node)
            {
                Clusters.node.Add(new ServerSettingClustersNodeModel()
                {
                    ip = item.Key,
                    master = item.Value.master,
                });
            }
            serializer.Serialize(buffer, Clusters, typeof(ServerSettingClustersModel));
            string _str = buffer.ToString();
            buffer.Dispose();
            File.WriteAllText(GetPath(_conf_Clusters), _str);
        }


        static ServerConfSetting()
        {
            try
            {
                string read_conf = File.ReadAllText(GetPath(_conf));
                using (var input = new StringReader(read_conf))
                {
                    var serializer = new Serializer();
                    serverSettingModel = serializer.Deserialize<ServerSettingModel>(input);
                }

                string read_conf_node = File.ReadAllText(GetPath(_conf_Clusters));
                using (var input = new StringReader(read_conf_node))
                {
                    var serializer = new Serializer();
                    serverSettingClusters_Node_Model = serializer.Deserialize<ServerSettingClustersModel>(input);
                }

            }
            catch (Exception ex)
            {
            }
        }


        public static bool Conf_Key_Verify(string conf_key)
        {
            string _conf_key = serverSettingModel.Key.ToUpper();
            if (conf_key.ToUpper() != _conf_key)
            {
                //Node.ClustersNode.UpdateNodeDic("");
                return false;
            }
            return true;
        }
    }


    public class ServerSettingClustersModel
    {
        //public List<string> IPAddress = new List<string>();

        public List<ServerSettingClustersNodeModel> node = new List<ServerSettingClustersNodeModel>();
    }

    public class ServerSettingClustersNodeModel
    {
        public string ip { get; set; }

        public bool master { get; set; }

    }

    public class ServerSettingModel
    {
        public ServerSettingServerModel Server { get; set; } = new ServerSettingServerModel();

        public ServerSettingWebModel Web { get; set; } = new ServerSettingWebModel();

        public string Key { get; set; }

        public bool Master { get; set; } = true;
    }

    public class ServerSettingServerModel
    {
        public string ip { get; set; }

        public int port { get; set; }

    }
    public class ServerSettingWebModel
    {
        public int port { get; set; }

        public string loginUser { get; set; }

        public string passWord { get; set; }

    }

}
