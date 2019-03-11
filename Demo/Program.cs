using System;

namespace Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                var _str1 = RatelHttpHelpServer.GetValue("test1", "app_dev1");
                Console.WriteLine(_str1);

            }

            Console.ReadLine();

        }

    }
}
