using PeterKottas.DotNetCore.WindowsService;
using System;

namespace RatelWindowsServerInsatll
{
    class Program
    {
        static void Main(string[] args)
        {
            //windows服务安装，cmd 需要管理员身份
            //输入 dotnet RatelWindowsServerInsatll.dll MyServer( MyServer是要安装的服务名称)

            if (args.Length != 1)
                Console.WriteLine("请输入服务名称!");
            string _serverName = args[0];
            ServiceRunner<ServiceInstall>.Run(_serverName, config =>
            {
                config.Service(serviceConfig =>
                {
                    serviceConfig.ServiceFactory((extraArguments, controller) =>
                    {
                        return new ServiceInstall();
                    });

                    serviceConfig.OnStart((service, extraParams) =>
                    {
                        Console.WriteLine("Service started");
                        service.Start();
                    });

                    serviceConfig.OnStop(service =>
                    {
                        Console.WriteLine("Service stopped");
                        service.Stop();
                    });

                    serviceConfig.OnError(e =>
                    {
                        Console.WriteLine($"error:  {e.Message}");
                    });
                });
            });
            Console.ReadLine();

        }
    }
}
