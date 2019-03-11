using Microsoft.AspNetCore.Hosting;
using Ratel.RatelSocket.RatelSocketServer;
using Ratel.YamlConfig;
using System.IO;
using System.Diagnostics;
using System.Linq;
using System;


namespace RatelServer
{
    class Program
    {
        static void Main(string[] args)
        {

            var host = new WebHostBuilder()
               .UseUrls($"http://{ServerConfSetting.serverSettingModel.Server.ip}:{ServerConfSetting.serverSettingModel.Web.port}")
               .UseKestrel()
               .UseContentRoot(Directory.GetCurrentDirectory())
               .UseStartup<Startup>()
               .Build();

            var boot = new RatelServerBoot();
            boot.RUN();

            host.Run();


            boot.Close();
        }
    }
}
