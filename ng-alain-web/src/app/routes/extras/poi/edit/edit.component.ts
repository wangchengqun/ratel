import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-extras-poi-edit',
  templateUrl: './edit.component.html',
})
export class ExtrasPoiEditComponent implements OnInit {
  i: any;
  cat: string[] = ['Master', 'Slave'];

  master: string;
  ipaddress: string;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {
  }

  ngOnInit() {
    // if (this.i.id > 0) {
    //   this.http.get('/pois').subscribe((res: any) => (this.i = res.list[0]));
    // }
  }

  save() {
      // var ma = false;
      // if(this.master=="Master"){
      //  ma = true;
      //}

      this.http.post('/addip',{
        "key":this.ipaddress,
        "Master": true
      })
      .subscribe((res:any) => {
          this.modal.close(true);
          this.close();
          if(res.msg=="ok"){
            this.msgSrv.success('保存成功!');
          }else{
            this.msgSrv.error(res.data);
          }
    });

  }

  close() {
    this.modal.destroy();
  }
}
