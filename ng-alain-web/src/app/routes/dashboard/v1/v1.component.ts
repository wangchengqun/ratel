import {
  Component,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { NzMessageService,NzModalService,NzNotificationService  } from 'ng-zorro-antd';
import { ModalHelper,_HttpClient } from '@delon/theme';
import { STComponent, STColumn,STColumnBadge, STColumnTag } from '@delon/abc';


@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html'
})
export class DashboardV1Component{
  // @ViewChild('st')
  // st: STComponent;
  isVisible = false;
  isConfirmLoading = false;

  isVisibleData = false;
  isConfirmLoadingData = false;

  listOfParentData = [];
  listOfChildrenData = [];

  PageTotal:number;


  BusinessDataKey: string;
  BusinessDataValue: string;


  BusinessKey: string;
  BusinessValue: string;

  disabledEditData: boolean=false;
  disabledEdit: boolean=false;
  constructor(private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private notification: NzNotificationService) 
  {

    this.getList();

  }


  nestedTableIndexChange(nestedTable:any){
      var PageIndex = nestedTable.nzPageIndex;
      this.getList(PageIndex);
  }


  BusinessTypeSave(): void {
    this.isConfirmLoading = true;
      // setTimeout(() => {
      //   this.isVisible = false;
      //   this.isConfirmLoading = false;
      // }, 3000);
      if(this.BusinessKey.trim()==""){
        this.notification.error("操作信息","类型不能为空!");
        this.isConfirmLoading = false;
        return;
      }
      this.http.post("/addBusiness",
      {
          "key":this.BusinessKey,
          "remark":this.BusinessValue,
      })
      .subscribe((res:any)=>{
        if(res.msg=="ok"){
          this.handleCancel();
          this.notification.success("操作信息","保存成功!");
        }else{
          this.notification.error("操作信息",res.data);  
        }
        this.getList();
      
      });  
      this.isConfirmLoading = false;
     
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleCancelData(): void {
    this.isVisibleData = false;
  }

  showModal(){
    this.isVisible = true;
  }

  showModalData(){
    this.isVisibleData = true;
  }
  // add(tpl: TemplateRef<{}>){
  //   this.BusinessKey="";
  //   this.BusinessValue="";
  //   this.disabledEdit=false;
  //   this.modalSrv.create({
  //     nzTitle: '添加',
  //     nzContent: tpl,
  //     nzOnOk: () => {
  //       if(this.BusinessKey.trim()==""){
  //         this.notification.error("操作信息","key 不能为空!");
  //         return;
  //       }

  //       this.http.post("/addBusiness",
  //       {
  //           "key":this.BusinessKey,
  //           "remark":this.BusinessValue,
  //       })
  //       .subscribe((res:any)=>{
  //         this.getList();
  //         this.notification.success("操作信息","添加成功!");
  //       });  
  //     },
  //   });
  // }


  Delete(data:any) {
    this.modalSrv.confirm({
      nzTitle     : '你确定要删除（'+data.key+'）吗?',
      nzContent   : ""+data.value+"",
      nzOkText    : '确认',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        this.http.post("/delBusiness",
        {
            "key":data.key,
        })
        .subscribe((res:any)=>{
          this.getList();
          this.notification.success("操作信息!","删除成功!");
        });  
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {
      }
    });
  }

  BusinessTypeAdd(){
    this.showModal();
    this.BusinessKey="";
    this.BusinessValue="";
    this.disabledEdit=false;

  }

  BusinessTypeEdit(data:any){
    this.showModal();
    this.BusinessKey=data.key;
    this.BusinessValue=data.value;
    this.disabledEdit=true;

  }
  // Edit(tpl: TemplateRef<{}>,data:any){
  //   this.BusinessKey=data.key;
  //   this.BusinessValue=data.value;
  //   this.disabledEdit=true;
  //   this.modalSrv.create({
  //     nzTitle: '编辑',
  //     nzContent: tpl,
  //     nzOnOk: () => {
  //       this.http.post("/addBusiness",
  //       {
  //           "key":this.BusinessKey,
  //           "remark":this.BusinessValue,
  //       })
  //       .subscribe((res:any)=>{
  //         this.getList();
  //         this.notification.success("操作信息","修改成功!");
  //       });  
  //     },
  //   });
  // }



  innerTableData:any;
  BusinessDatakey:string;
  addBusinessData(key:string,innerTable:any){
    this.showModalData();
    this.disabledEditData = false;
    this.BusinessDataValue = "";
    this.BusinessDataKey = "";

    this.innerTableData=innerTable;
    this.BusinessDatakey=key;

  }


  editaddBusinessData(data:any,key:string,innerTable:any){
    this.showModalData();
    this.BusinessDataValue = data.content;
    this.BusinessDataKey = data.key;
    this.disabledEditData = true;

    this.innerTableData=innerTable;
    this.BusinessDatakey=key;
  }

  BusinessDataSave(){
    if(this.BusinessDataKey.trim()==""){
      this.notification.error("操作信息","key 不能为空!");
      return;
    }
    if(this.BusinessDataValue.trim()==""){
      this.notification.error("操作信息","value 不能为空!");
      return;
    }

    this.http.post("/addBusinessData",
    {
        "key":this.BusinessDataKey,
        "content":this.BusinessDataValue,
        "tableName":this.BusinessDatakey
    })
    .subscribe((res:any)=>{
      if(res.msg=="ok"){
        this.handleCancelData();
        this.notification.success("操作信息","操作成功!");
      }else{
        this.notification.error("操作信息",res.data);
      }
      this.innerTableExpandChange(true,this.BusinessDatakey,this.innerTableData) ;
    
    });  

  }


  addData(tpl: TemplateRef<{}>,key:string,innerTable:any){
    this.disabledEditData = false;
    this.BusinessDataValue = "";
    this.BusinessDataKey = "";
    this.modalSrv.create({
      nzTitle: '添加',
      nzContent: tpl,
      nzOnOk: () => {
        this.http.post("/addBusinessData",
        {
            "key":this.BusinessDataKey,
            "content":this.BusinessDataValue,
            "tableName":key
        })
        .subscribe((res:any)=>{
          this.innerTableExpandChange(true,key,innerTable) ;
          this.notification.success("操作信息","添加成功!");
        });  
      },
    });
  }

  editData(tpl: TemplateRef<{}>,data:any,key:string,innerTable:any) {
    this.BusinessDataValue = data.content;
    this.BusinessDataKey = data.key;
    this.disabledEditData = true;
    this.modalSrv.create({
      nzTitle: '编辑',
      nzContent: tpl,
      nzOnOk: () => {
        this.http.post("/addBusinessData",
        {
            "key":this.BusinessDataKey,
            "content":this.BusinessDataValue,
            "tableName":key
        })
        .subscribe((res:any)=>{

          this.innerTableExpandChange(true,key,innerTable) ;
          this.notification.success("操作信息","修改成功!");
        });  

       
      },
    });
  }


  DeleteData(data:any,key:string,innerTable:any) {
    this.BusinessDataValue = data.content;
    this.BusinessDataKey = data.key;

    this.modalSrv.confirm({
      nzTitle     : '你确定要删除（'+data.key+'）吗?',
      nzContent   : ""+data.content+"",
      nzOkText    : '确认',
      nzOkType    : 'danger',
      nzOnOk      : () => {
        this.http.post("/delBusinessData",
        {
            "key":this.BusinessDataKey,
            "content":"",
            "tableName":key
        })
        .subscribe((res:any)=>{
          this.innerTableExpandChange(true,key,innerTable) ;
          this.notification.success("操作信息!","删除成功!");
        });  
      },
      nzCancelText: '取消',
      nzOnCancel  : () => {

      }
    });
  }


  innerTableIndexChange(innerTable:any,key:string){
      this.http.get("/getBusinessData",{
        "key":key,
        "pageIndex": innerTable.nzPageIndex
      })
      .subscribe((res:any)=>{
          for (let index = 0; index < this.listOfParentData.length; index++) {
            if(this.listOfParentData[index].key==key){
              innerTable.nzTotal = res.data.total;
              this.listOfParentData[index].childList = res.data.list;
            }
          }
      });  

  }
  

  innerTableExpandChange(expand:boolean,key:string,innerTable:any){
      if(expand==false)
         return;
      this.http.get("/getBusinessData",{
        "key":key,
        "pageIndex": 1
      })
      .subscribe((res:any)=>{
          for (let index = 0; index < this.listOfParentData.length; index++) {
             if(this.listOfParentData[index].key==key){
                innerTable.nzTotal = res.data.total;
                innerTable.nzPageIndex=1;
                this.listOfParentData[index].childList = res.data.list;
             }
          }
      });  
  }

  getList(pageIndex:number=1){
      this.http.get("/getBusiness",
      {
        "pageIndex":pageIndex
      })
      .subscribe((res:any)=>{
           var data = res.data.list;
           this.PageTotal=res.data.total
           this.listOfParentData = data;
      });  

  }

}



