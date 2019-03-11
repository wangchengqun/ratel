using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Ratel.RatelProxy
{

    public class ProxyFactory
    {
        public static T CreateProxy<T>()
        {
            return Proxy.Create<T, ProxyServer>();
        }

        public static T CreateMethodProxy<T>(string methodName, object[] obj_Array)
        {
            var obj = Proxy.Create<T, ProxyServer>();
            return (T)obj.GetType().GetMethod(methodName).Invoke(obj, obj_Array);
        }

    }

    public class ProxyRegistry
    {
        public static ConcurrentDictionary<string, object> dic = new ConcurrentDictionary<string, object>();

        public static void AddRegistry(string method, object obj)
        {
            dic.TryAdd(method, obj);
        }


    }


    public class ProxyServer : Proxy
    {
        protected override object Invoke(MethodInfo targetMethod, object[] args)
        {
            string method_name = targetMethod.Name;
            //Task
            if (targetMethod.ReturnType.BaseType == typeof(Task) && targetMethod.ReturnType.IsGenericType)
            {
                return TaskGenneric_Return(targetMethod, args);
            }
            if (targetMethod.ReturnType == typeof(Task))
            {
                return Task_Return(targetMethod, args);
            }

            ProxyRegistry.dic.TryGetValue(method_name, out object _model);

            object _obj = _model.GetType().GetMethod(method_name).Invoke(_model, args);
            return _obj;
        }

        private Task Task_Return(MethodInfo targetMethod, object[] args)
        {
            Type _returnType = targetMethod.ReturnType.GetGenericArguments().FirstOrDefault();
            Type tcsType = typeof(TaskCompletionSource<>);
            if (targetMethod.ReturnType == typeof(Task))
            {
                _returnType = typeof(object);
            }
            var GenericType = tcsType.MakeGenericType(new Type[] { _returnType });
            var TaskProperty = GenericType.GetTypeInfo().GetDeclaredProperty("Task");
            var TrySetResultMethod = GenericType.GetTypeInfo().GetDeclaredMethod("TrySetResult");
            var TrySetExceptionMethod = GenericType.GetRuntimeMethod("TrySetException", new Type[] { typeof(Exception) });
            var TrySetCanceledMethod = GenericType.GetRuntimeMethod("TrySetCanceled", Array.Empty<Type>());
            var _instance = Activator.CreateInstance(GenericType);

            string method_Name = targetMethod.Name;

            ProxyRegistry.dic.TryGetValue(method_Name, out object _model);

            var canshu = _model.GetType().GetMethod(method_Name).Invoke(_model, args);

            TrySetResultMethod.Invoke(_instance, new object[] { canshu });

            var task = (Task)TaskProperty.GetValue(_instance);
            return task;
        }


        private Task TaskGenneric_Return(MethodInfo targetMethod, object[] args)
        {
            string method_Name = targetMethod.Name;
            ProxyRegistry.dic.TryGetValue(method_Name, out object _model);
            var canshu = _model.GetType().GetMethod(method_Name).Invoke(_model, args);
            return (Task)canshu;
        }

    }
}
