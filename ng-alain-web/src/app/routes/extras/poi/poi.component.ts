import { Component, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { ModalHelper,_HttpClient } from '@delon/theme';
import { STComponent, STColumn,STColumnBadge, STColumnTag } from '@delon/abc';
import { ExtrasPoiEditComponent } from './edit/edit.component';


const BADGE: STColumnBadge = {
  true: { text: '成功', color: 'success' },
  false: { text: '失败', color: 'error' },
};

const TAG: STColumnTag = {
  true: { text: 'Master', color: 'green' },
  false: { text: 'Slave', color: '' },
};


@Component({
  selector: 'app-extras-poi',
  templateUrl: './poi.component.html',
})
export class ExtrasPoiComponent {
  @ViewChild('st')
  st: STComponent;
  

  pageIndex:number;
  pageSize:number = 10;
  params = {
    pi: this.pageIndex,
    ps: this.pageSize,
  };
  url = '/iplist';

  iplist: any[] = [];



  columns: STColumn[] = [
    // { title: '编号', index: 'id', width: '100px' },
    { title: 'IP地址', index: 'host',width: '100px'  },
    // { title: '主从', index: 'master',width: '100px',type: 'tag', tag: TAG  },
    { title: '状态', index: 'connectionStatus', width: '100px',type: 'badge', badge: BADGE },
    {
      title: '操作',
      width: '180px',
      buttons: [
        { 
          text: '删除', 
          type:"del",
          click: (item:any) =>{
            
            if(item.me==true){
              this.msg.error("不能删除自己!");
              return;
            }

            this.http.post("/delip",{
              "key":item.host
            }).subscribe((res:any)=>{
              this.st.load();
              if(res.msg=="ok"){
                this.msg.success("删除成功!");
              } else {
                this.msg.error(res.data);
              }
            });

          }
        },
      ],
    },
  ];

  constructor(public msg: NzMessageService, 
    private modal: ModalHelper,
    private http: _HttpClient) {


  }




  add() {
    this.modal
      .static(ExtrasPoiEditComponent, { i: { id: 0 } },500)
      .subscribe((res:any) => {
        this.st.load();
      });
  }
}
