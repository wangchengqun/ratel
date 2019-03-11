
using Microsoft.AspNetCore.Hosting;
using PeterKottas.DotNetCore.WindowsService.Interfaces;
using Ratel.RatelSocket.RatelSocketServer;
using Ratel.YamlConfig;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

namespace RatelWindowsServerInsatll
{
    public class ServiceInstall : IMicroService
    {
        private RatelServerBoot boot = new RatelServerBoot();

        private Thread thread = null;

        private IWebHost host = null;
        public void Start()
        {

            thread = new Thread(() =>
            {
                host = new WebHostBuilder()
               .UseUrls($"http://{ServerConfSetting.serverSettingModel.Server.ip}:{ServerConfSetting.serverSettingModel.Web.port}")
               .UseKestrel()
               .UseContentRoot(Directory.GetCurrentDirectory())
               .UseStartup<Startup>()
               .Build();

                boot.RUN();

                host.Run();

            });
            thread.Start();

        }

        public void Stop()
        {
            thread.Interrupt();
            boot.Close();
            host.StopAsync().Wait();
        }
    }
}
