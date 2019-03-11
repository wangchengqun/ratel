using System;
using System.Collections.Generic;
using System.Text;

using System.Collections.Concurrent;
using Helios.Channels;
using System.Linq;

namespace Ratel.Node
{
    public class ClustersNodeSetting
    {

        public IChannel channel { get; set; }

        public string host { get; set; }

        public bool master { get; set; }

        public bool ConnectionStatus { get; set; }

        public bool me { get; set; } = false;

        public string error { get; set; }

    }


    public class ClustersNode
    {
        private static ConcurrentDictionary<string, ClustersNodeSetting> _dic =
            new ConcurrentDictionary<string, ClustersNodeSetting>();

        public static ConcurrentDictionary<string, ClustersNodeSetting> node { get { return _dic; } }


        public static void AddNodeDic(ClustersNodeSetting clustersNodeSetting)
        {
            if (_dic.TryGetValue(clustersNodeSetting.host, out ClustersNodeSetting _value))
            {
                if (!_value.me)
                {
                    _dic.AddOrUpdate(clustersNodeSetting.host, clustersNodeSetting, (key, node1) =>
                    {
                        return clustersNodeSetting;
                    });
                }
            }
            else
            {
                _dic.AddOrUpdate(clustersNodeSetting.host, clustersNodeSetting, (key, node1) =>
                {
                    return clustersNodeSetting;
                });
            }
        }

        public static void UpdateNodeDic(string host, string error = "")
        {
            _dic.TryGetValue(host, out ClustersNodeSetting clustersNodeSetting);

            if (clustersNodeSetting == null)
                return;

            if (clustersNodeSetting.channel.IsActive)
            {
                clustersNodeSetting.channel.CloseAsync();
            }

            _dic.AddOrUpdate(host, clustersNodeSetting, (key, node1) =>
             {
                 clustersNodeSetting.ConnectionStatus = false;
                 clustersNodeSetting.channel = null;
                 clustersNodeSetting.error = error;
                 return clustersNodeSetting;
             });

        }

        public static void RemoveNodeDic(string host)
        {
            _dic.TryGetValue(host, out ClustersNodeSetting clustersNodeSetting_me);
            if (clustersNodeSetting_me == null)
                return;

            if (clustersNodeSetting_me.me)
            {
                var _removeNode = _dic.Select(x => x.Value).Where(x => x.me == false).ToList();
                foreach (var item in _removeNode)
                {
                    _dic.TryRemove(item.host, out ClustersNodeSetting clustersNodeSetting_remove);
                    if (clustersNodeSetting_remove != null)
                    {
                        if (clustersNodeSetting_remove.channel != null)
                        {
                            if (clustersNodeSetting_remove.channel.IsActive)
                            {
                                clustersNodeSetting_remove.channel.CloseAsync();
                            }
                        }
                    }
                }
                return;
            }

            _dic.TryRemove(host, out ClustersNodeSetting clustersNodeSetting);
            if (clustersNodeSetting != null)
            {
                if (clustersNodeSetting.channel != null)
                {
                    if (clustersNodeSetting.channel.IsActive)
                    {
                        clustersNodeSetting.channel.CloseAsync();
                    }
                }
            }

        }

    }

}
