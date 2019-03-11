using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;

namespace Demo
{

    public class RatelHttpHelpServer
    {

        static RatelHttpHelpServer()
        {
            var ratelHttpHelp = RatelHttpHelp.Sington();
            ratelHttpHelp.Confkey_Headers();
            ratelHttpHelp.AddUrl("http://127.0.0.1:7891");
            ratelHttpHelp.AddUrl("http://127.0.0.1:7892");
            ratelHttpHelp.AddUrl("http://127.0.0.1:7893");
        }

        public static string GetValue(string _businesstype, string _key)
        {
            return RatelHttpHelp.Sington().GetValue(_businesstype, _key).GetAwaiter().GetResult();
        }

        public static async Task<string> GetValueAsync(string _businesstype, string _key)
        {
            return await RatelHttpHelp.Sington().GetValue(_businesstype, _key);
        }

    }

    internal class RatelHttpHelp
    {
        private static RatelHttpHelp _RatelHttpHelp = null;

        private static readonly object _lock = new object();

        private static HttpClient httpClient = null;

        private static ConcurrentDictionary<int, (bool, string)> KeyValues = new ConcurrentDictionary<int, (bool, string)>();

        private readonly string _CONFKEY = "confkey";

        private readonly string _ERROR = "{\"data\": \"\",\"msg\": \"error\"}";

        private Random random = new Random();

        private RatelHttpHelp()
        {
            httpClient = new HttpClient();
            new Thread(async () =>
            {
                while (true)
                {
                    await GetHeartBeat();
                    Thread.Sleep(1000 * 10);
                }

            }).Start();
        }

        public static RatelHttpHelp Sington()
        {
            if (_RatelHttpHelp == null)
            {
                lock (_lock)
                {
                    if (_RatelHttpHelp == null)
                    {
                        _RatelHttpHelp = new RatelHttpHelp();
                    }

                }

            }
            return _RatelHttpHelp;
        }

        public void AddUrl(string _url)
        {
            KeyValues.TryAdd(KeyValues.Count, (true, _url));
        }

        public void Confkey_Headers(string confkey = "QERTYUIOPLKJHGFDA")
        {
            httpClient.DefaultRequestHeaders.Add(_CONFKEY, confkey);
        }


        private async Task GetHeartBeat()
        {
            var _dic_List = KeyValues;
            foreach (var item in _dic_List.AsParallel())
            {
                using (CancellationTokenSource cancellationToken = new CancellationTokenSource(TimeSpan.FromSeconds(4)))
                {
                    string _url = $"{item.Value.Item2}/heartbeat";
                    try
                    {
                        using (var _httpResponse = await httpClient.GetAsync(_url, cancellationToken.Token))
                        {
                            if (!_httpResponse.IsSuccessStatusCode)
                                KeyValues[item.Key] = (false, item.Value.Item2);
                            else
                                KeyValues[item.Key] = (true, item.Value.Item2);
                        }
                    }
                    catch (Exception ex)
                    {
                        cancellationToken.Cancel();
                        KeyValues[item.Key] = (false, item.Value.Item2);
                    }

                }
            }
        }

        private async Task<HttpResponseMessage> httpResponseMessage(string businesstype, string key)
        {
            using (CancellationTokenSource cancellationToken = new CancellationTokenSource(TimeSpan.FromSeconds(4)))
            {
                try
                {
                    if (KeyValues.Count == 0)
                        throw new Exception("url null");

                    var _url_List = KeyValues.Where(x => x.Value.Item1 == true).ToList();
                    if (_url_List.Count == 0)
                        throw new Exception("url null");

                    int _index_num = random.Next(0, _url_List.Count);
                    string _base_url = _url_List[_index_num].Value.Item2;
                    string _url = $"{_base_url}/getConf?businesstype={businesstype}&key={key}";
                    return await httpClient.GetAsync(_url, cancellationToken.Token);
                }
                catch (Exception ex)
                {
                    cancellationToken.Cancel();
                    throw ex;
                }
            }
        }

        public async Task<string> GetValue(string businesstype, string key)
        {
            try
            {
                using (var _httpResponseMessage = await httpResponseMessage(businesstype, key))
                {
                    if (!_httpResponseMessage.IsSuccessStatusCode)
                        return _ERROR;
                    return await _httpResponseMessage.Content.ReadAsStringAsync();
                }
            }
            catch (Exception ex)
            {
            }
            return _ERROR;
        }

    }
}
