using System;

namespace Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {

                var _str1 = RatelHttpHelpServer.GetValue("dev_web", "mongodbUrl");
                Console.WriteLine(_str1);

            }

            Console.ReadLine();

        }

    }
}
