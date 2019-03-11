using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

using System.Linq;
using Ratel.RatelDBreeze;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Ratel.RatelProxy;
using Ratel.Proxy;
using System.Net;

namespace Ratel
{
    public class UseMiddlewarePath
    {
        private readonly RequestDelegate _next;

        private const string _namespace = "Ratel";

        private static Assembly _assembly = Assembly.Load(_namespace);

        private static readonly JsonSerializerSettings SerializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        public UseMiddlewarePath(RequestDelegate next)
        {
            this._next = next;
        }


        public string[] _File_JS = new string[] {
            "data-v-data-v-module.js",
            "delon-delon-module.js",
            "exception-exception-module.js",
            "extras-extras-module.js",
            "index.html",
            "main.js",
            "polyfills.js",
            "pro-pro-module.js",
            "runtime.js",
            "scripts.js",
            "styles.js",
            "style-style-module.js",
            "vendor.js",
            "widgets-widgets-module.js",

            "app-data.json",
            "zh-CN.json",

            //"logo.svg",
            //"logo-color.svg",
            //"logo-full.svg",
            //"zorro.svg",
            //"favicon.ico",
        };


        public async Task Invoke(HttpContext context)
        {
            var _httpRequest = context.Request;
            var _js = _httpRequest.Path.Value;
            if (_httpRequest.Path.HasValue)
            {
                var _js1 = _js.Replace("/", "");
                var _find_js = _File_JS.Where(x => x.ToString() == _js1).FirstOrDefault();
                if (_find_js != null)
                {
                    var stream = OpenFile(_find_js);
                    var content = "";
                    if (stream == null)
                    {
                        await context.Response.WriteAsync(content);
                        return;
                    }
                    using (stream)
                    {
                        content = new StreamReader(stream).ReadToEnd();
                    }
                    //context.Response.ContentType = "text/html";
                    await context.Response.WriteAsync(content);
                    return;
                }

            }

            if (_httpRequest.Path == "/")
            {
                var stream = OpenFile("index.html");
                var content = "";
                using (stream)
                {
                    content = new StreamReader(stream).ReadToEnd();
                }

                context.Response.ContentType = "text/html";
                await context.Response.WriteAsync(content);
                return;
            }


            var _web = Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Web;
            string _token = MD5Hash(_web.loginUser + "," + _web.passWord + Ratel.YamlConfig.ServerConfSetting.serverSettingModel.Key);
            if (_httpRequest.Path == "/login" && _httpRequest.Method.ToUpper() == "POST")
            {
                try
                {
                    var _login = Json_Convert<InputLoginModel>(_httpRequest.Body);
                    if (_login.userName == _web.loginUser
                        && _login.password == _web.passWord)
                    {

                        var _long_res = new
                        {
                            token = _token,
                            username = _web.loginUser,
                            email = "",
                            avatar = ""
                        };
                        await WriteJson(context, new Output(_long_res));
                    }

                }
                catch (Exception ex)
                {
                }

                return;
            }

            //get
            if (_httpRequest.Path == "/getConf" && _httpRequest.Method.ToUpper() == "GET")
            {
                try
                {
                    var _web_key = _httpRequest.Headers["confkey"].ToString();
                    if (_web_key.ToUpper() != YamlConfig.ServerConfSetting.serverSettingModel.Key.ToUpper())
                    {
                        await WriteJson(context, new Output("webkey error", "error"));
                        return;
                    }
                    string _table = _httpRequest.Query["businesstype"].ToString();
                    string _key = _httpRequest.Query["key"].ToString();

                    if (string.IsNullOrEmpty(_table))
                    {
                        await WriteJson(context, new Output("businesstype null", "error"));
                        return;
                    }

                    if (string.IsNullOrEmpty(_key))
                    {
                        await WriteJson(context, new Output("key null", "error"));
                        return;
                    }

                    var _proxy = ProxyFactory.CreateProxy<ICommand>();
                    var _value = await _proxy.GetConf(_table, _key);

                    if (string.IsNullOrEmpty(_value))
                    {
                        await WriteJson(context, new Output("value null", "error"));
                        return;
                    }
                    await WriteJson(context, new Output(_value));
                    return;
                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("", "error"));
                    return;
                }
            }

            //get heartbeat
            if (_httpRequest.Path == "/heartbeat" && _httpRequest.Method.ToUpper() == "GET")
            {
                var _web_key = _httpRequest.Headers["confkey"].ToString();
                if (_web_key.ToUpper() != YamlConfig.ServerConfSetting.serverSettingModel.Key.ToUpper())
                {
                    await WriteJson(context, new Output("webkey error", "error"));
                    return;
                }

                await WriteJson(context, "ok");
                return;
            }


            //Headers token
            var _headers_token = _httpRequest.Headers["token"].ToString().ToUpper();
            if (string.IsNullOrEmpty(_headers_token))
            {
                await WriteJson(context, new Output("token null!", "error"));
                return;
            }

            if (_headers_token != _token)
            {
                await WriteJson(context, new Output("token error!", "error"));
                return;
            }

            if (_httpRequest.Path == "/iplist")
            {
                int pi = 0;
                int ps = 3;
                if (_httpRequest.QueryString.HasValue)
                {
                    int.TryParse(_httpRequest.Query["pi"].ToString(), out pi);
                    int.TryParse(_httpRequest.Query["ps"].ToString(), out ps);
                }

                var _node = Ratel.Node.ClustersNode.node.Select(x => x.Value)
                    .OrderByDescending(x => x.host).Skip((pi - 1) * ps).Take(ps).ToList();

                var _outResponse = new OutResponse<List<Ratel.Node.ClustersNodeSetting>>();
                _outResponse.total = Ratel.Node.ClustersNode.node.Count;


                foreach (var item in _node)
                {
                    _outResponse.list.Add(new Ratel.Node.ClustersNodeSetting()
                    {
                        channel = null,
                        ConnectionStatus = item.ConnectionStatus,
                        host = item.host,
                        master = item.master,
                        me = item.me
                    });
                }


                await WriteJson(context, _outResponse);
                return;
            }

            if (_httpRequest.Path == "/addip")
            {
                IPClustersModel _IPClustersModel = new IPClustersModel(); ;
                try
                {
                    _IPClustersModel = Json_Convert<IPClustersModel>(_httpRequest.Body);
                    var ipaddress = _IPClustersModel.key.Split(':');
                    var ip = new IPEndPoint(IPAddress.Parse(ipaddress[0]), int.Parse(ipaddress[1]));
                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("错误信息:" + ex.Message, "error"));
                    return;
                }


                var model = new Ratel.RatelDBreeze.IPClustersModel()
                {
                    Content = _IPClustersModel.key,
                    key = "",
                    TableName = "",
                    Master = _IPClustersModel.Master
                };
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.IPAddress,
                    TableName = "",
                };
                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var res = _proxy.Add_IP_DataLog(add_data, model);
                await WriteJson(context, new Output(res.message));

                return;
            }

            if (_httpRequest.Path == "/delip")
            {

                var _IPClustersModel = Json_Convert<IPClustersModel>(_httpRequest.Body);

                Ratel.Node.ClustersNode.RemoveNodeDic(_IPClustersModel.key);

                var model = new Ratel.RatelDBreeze.IPClustersModel()
                {
                    Content = _IPClustersModel.key,
                    key = "",
                    TableName = "",
                };
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.DelIPAddress,
                    TableName = "",
                };
                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                _proxy.Del_IP_DataLog(add_data, model);
                await WriteJson(context, new Output("删除成功!"));
                return;
            }

            if (_httpRequest.Path == "/getBusiness")
            {

                int.TryParse(_httpRequest.Query["pageIndex"].ToString(), out int pageIndex);

                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var _list = _proxy.GetList(pageIndex);

                await WriteJson(context, new Output(_list));
                return;
            }

            if (_httpRequest.Path == "/addBusiness")
            {
                var _model = new Ratel.RatelDBreeze.BusinessTypeModel();
                try
                {
                    _model = Json_Convert<BusinessTypeModel>(_httpRequest.Body);
                    if (string.IsNullOrEmpty(_model.key))
                    {
                        await WriteJson(context, new Output("业务类型不能为空!", "error"));
                        return;
                    }

                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("错误信息:" + ex.Message, "error"));
                    return;
                }
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.BusinessType,
                    TableName = "",
                };

                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var response = _proxy.Add_BusinessType_DataLog(add_data, _model);
                await WriteJson(context, new Output("操作成功!"));
                return;
            }

            if (_httpRequest.Path == "/delBusiness")
            {
                BusinessTypeModel _model = new BusinessTypeModel();
                try
                {
                    _model = Json_Convert<BusinessTypeModel>(_httpRequest.Body);
                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("错误信息:" + ex.Message, "error"));
                    return;
                }
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.DelBusinessType,
                    TableName = "",
                };

                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var response = _proxy.Del_BusinessType_DataLog(add_data, _model);

                await WriteJson(context, new Output("操作成功!"));
                return;
            }

            if (_httpRequest.Path == "/getBusinessData")
            {
                var _proxy = ProxyFactory.CreateProxy<ICommand>();

                string _key = _httpRequest.Query["key"].ToString();

                int.TryParse(_httpRequest.Query["pageIndex"].ToString(), out int pageIndex);

                var _list = _proxy.GetListData(_key, pageIndex);

                await WriteJson(context, new Output(_list));
                return;
            }

            if (_httpRequest.Path == "/addBusinessData")
            {
                BusinessDataModel _model = new BusinessDataModel();
                try
                {
                    _model = Json_Convert<BusinessDataModel>(_httpRequest.Body);
                    if (string.IsNullOrEmpty(_model.tableName))
                    {
                        await WriteJson(context, new Output("业务类型不能为空!", "error"));
                        return;
                    }
                    if (string.IsNullOrEmpty(_model.key))
                    {
                        await WriteJson(context, new Output("key 不能为空!", "error"));
                        return;
                    }
                    if (string.IsNullOrEmpty(_model.content))
                    {
                        await WriteJson(context, new Output("value 不能为空!", "error"));
                        return;
                    }

                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("错误信息:" + ex.Message, "error"));
                    return;
                }
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.BusinessData,
                    TableName = "",
                };

                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var response = _proxy.Add_BusinessData_DataLog(add_data, _model);

                await WriteJson(context, new Output("操作成功!"));
                return;
            }

            if (_httpRequest.Path == "/delBusinessData")
            {
                BusinessDataModel _model = new BusinessDataModel();
                try
                {
                    _model = Json_Convert<BusinessDataModel>(_httpRequest.Body);
                }
                catch (Exception ex)
                {
                    await WriteJson(context, new Output("错误信息:" + ex.Message, "error"));
                    return;
                }
                var add_data = new Ratel.RatelDBreeze.DataLogModel()
                {
                    Data = new byte[0],
                    OperationType = OperationCommandType.DelBusinessData,
                    TableName = "",
                };

                var _proxy = ProxyFactory.CreateProxy<ICommand>();
                var response = _proxy.Del_BusinessData_DataLog(add_data, _model);

                await WriteJson(context, new Output("操作成功!"));
                return;
            }

            if (_httpRequest.Path == "/App")
            {
                var _out_put = new Output(new App
                {
                    project = new Project()
                    {
                        name = "ng-alain"
                    },
                    menu = new List<Menu>()
                   {
                    new Menu()
                    {
                        text = "Dashboard",
                        group = true,
                        children = new List<Menu>()
                        {
                            new Menu()
                            {
                                text = "业务列表",
                                link = "/dashboard",
                                icon = "anticon anticon-appstore-o"
                            },
                        }
                    },
                    new Menu()
                    {
                        text = "集群",
                        group = true,
                        children = new List<Menu>()
                        {
                            new Menu()
                            {
                                text = "列表",
                                icon = "anticon anticon-skin",
                                link="/clusters/list"
                            }
                        }
                    }
                     },
                    user = new User()
                    {
                        id = 1,
                        name = _web.loginUser
                    }
                });

                await WriteJson(context, _out_put);



                return;
            }

            await this._next(context);
        }


        private T Json_Convert<T>(Stream _stream)
        {
            using (var streamReader = new StreamReader(_stream))
            {
                string req_str = streamReader.ReadToEnd();
                return JsonConvert.DeserializeObject<T>(req_str);
            }
        }


        private static Stream OpenFile(string name)
        {
            string resource = _namespace + ".web.dist.";
            var file = new FileInfo(name);
            return file.Exists
                ? file.OpenRead()
                : _assembly.GetManifestResourceStream($"{resource}{name}");
        }

        private static async Task WriteJson(HttpContext context, object content)
        {
            context.Response.StatusCode = 200;
            context.Response.ContentType = "application/json; charset=utf-8"; //"text/json";

            var json = JsonConvert.SerializeObject(content, Formatting.Indented, SerializerSettings);

            await context.Response.WriteAsync(json);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string MD5Hash(string input)
        {
            using (var md5 = System.Security.Cryptography.MD5.Create())
            {
                var result = md5.ComputeHash(Encoding.ASCII.GetBytes(input));
                var strResult = BitConverter.ToString(result);
                return strResult.Replace("-", "");
            }

        }


    }
}
