using Helios.Channels;
using Ratel.RatelDBreeze;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Ratel.Proxy
{
    public interface ICommand
    {

        RatelHttpResponses Add_IP_DataLog(DataLogModel dataLogModel, IPClustersModel iPClustersModel);
        RatelHttpResponses Del_IP_DataLog(DataLogModel dataLogModel, IPClustersModel iPClustersModel);



        #region Business Type
        RatelHttpResponses Add_BusinessType_DataLog(DataLogModel dataLogModel, BusinessTypeModel businessTypeModel);

        RatelHttpResponses Del_BusinessType_DataLog(DataLogModel dataLogModel, BusinessTypeModel businessTypeModel);

      

        #endregion


        #region Business Data
        RatelHttpResponses Add_BusinessData_DataLog(DataLogModel dataLogModel, BusinessDataModel businessDataModel);

        RatelHttpResponses Del_BusinessData_DataLog(DataLogModel dataLogModel, BusinessDataModel businessDataModel);


        #endregion


        #region common command

        void RequestCommand_DataLog(IChannelHandlerContext context);

        void GetRequestCommand_DataLog(IChannelHandlerContext context, byte[] Data);

        void Execute_Command_DataLog(IChannelHandlerContext context, byte[] Data);


        void Thread_DataLog(IChannelHandlerContext context, byte[] Data);
        #endregion


        OutResponse<List<BusinessListModel>> GetList(int pageindex = 1);


        OutResponse<List<BusinessDataModel>> GetListData(string key = "", int pageindex = 1);


        Task<string> GetConf(string tableName, string key);
    }
}
