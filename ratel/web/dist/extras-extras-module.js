(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extras-extras-module"],{

/***/ "./src/app/routes/extras/extras-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/extras/extras-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ExtrasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasRoutingModule", function() { return ExtrasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poi/poi.component */ "./src/app/routes/extras/poi/poi.component.ts");



// import { HelpCenterComponent } from './helpcenter/helpcenter.component';
// import { ExtrasSettingsComponent } from './settings/settings.component';

var routes = [
    // { path: 'helpcenter', component: HelpCenterComponent },
    // { path: 'settings', component: ExtrasSettingsComponent },
    { path: 'list', component: _poi_poi_component__WEBPACK_IMPORTED_MODULE_3__["ExtrasPoiComponent"] },
];
var ExtrasRoutingModule = /** @class */ (function () {
    function ExtrasRoutingModule() {
    }
    ExtrasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExtrasRoutingModule);
    return ExtrasRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/extras/extras.module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/extras/extras.module.ts ***!
  \************************************************/
/*! exports provided: ExtrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModule", function() { return ExtrasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras-routing.module */ "./src/app/routes/extras/extras-routing.module.ts");
/* harmony import */ var _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpcenter/helpcenter.component */ "./src/app/routes/extras/helpcenter/helpcenter.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/extras/settings/settings.component.ts");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./poi/poi.component */ "./src/app/routes/extras/poi/poi.component.ts");
/* harmony import */ var _poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poi/edit/edit.component */ "./src/app/routes/extras/poi/edit/edit.component.ts");








var COMPONENTS = [
    _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__["HelpCenterComponent"],
    _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasSettingsComponent"],
    _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__["ExtrasPoiComponent"]
];
var COMPONENTS_NOROUNT = [_poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["ExtrasPoiEditComponent"]];
var ExtrasModule = /** @class */ (function () {
    function ExtrasModule() {
    }
    ExtrasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExtrasRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], ExtrasModule);
    return ExtrasModule;
}());



/***/ }),

/***/ "./src/app/routes/extras/helpcenter/helpcenter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/extras/helpcenter/helpcenter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pb-lg\">\n  <h1 class=\"py-md mt-sm\">帮助中心</h1>\n  <div>帮助用户快速找到问题答案</div>\n</div>\n<div class=\"text-center\">\n  <nz-input-group nzCompact nzSize=\"large\">\n    <input [(ngModel)]=\"q\" placeholder=\"请用关键词进行搜索，例如“服务器密码重置”\" style=\"width: 50%;\" nz-input>\n    <nz-select [(ngModel)]=\"type\" nzSize=\"large\" style=\"width:20%;\">\n      <nz-option [nzLabel]=\"'不限'\" [nzValue]=\"''\"></nz-option>\n      <nz-option [nzLabel]=\"'弹性计算'\" [nzValue]=\"'弹性计算'\"></nz-option>\n      <nz-option [nzLabel]=\"'存储与CDN'\" [nzValue]=\"'存储与CDN'\"></nz-option>\n      <nz-option [nzLabel]=\"'会员服务'\" [nzValue]=\"'会员服务'\"></nz-option>\n      <nz-option [nzLabel]=\"'数据库'\" [nzValue]=\"'数据库'\"></nz-option>\n    </nz-select>\n    <button nz-button [nzType]=\"'primary'\" (click)=\"search()\" nzSize=\"large\">\n      <span>搜索</span>\n    </button>\n  </nz-input-group>\n  <div class=\"py-sm text-grey-dark\">\n    搜索热词：\n    <a class=\"ml-sm\" (click)=\"quick('远程连接服务器')\">远程连接服务器</a>\n    <a class=\"ml-sm\" (click)=\"quick('挂载数据盘')\">挂载数据盘</a>\n    <a class=\"ml-sm\" (click)=\"quick('域名解析')\">域名解析</a>\n    <a class=\"ml-sm\" (click)=\"quick('域名实名认证')\">域名实名认证</a>\n    <a class=\"ml-sm\" (click)=\"quick('账号实名认证')\">账号实名认证</a>\n    <a class=\"ml-sm\" (click)=\"quick('忘记密码')\">忘记密码</a>\n  </div>\n</div>\n<nz-row [nzGutter]=\"16\" class=\"py-lg\">\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('弹性计算')\" class=\"d-block text-center text-primary\">\n        <i nz-icon type=\"rocket\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">弹性计算</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('存储与CDN')\" class=\"d-block text-center text-red\">\n        <i nz-icon type=\"hdd\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">存储与CDN</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('会员服务')\" class=\"d-block text-center text-orange\">\n        <i nz-icon type=\"user\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">会员服务</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('数据库')\" class=\"d-block text-center text-purple\">\n        <i nz-icon type=\"database\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">数据库</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('域名与网站')\" class=\"d-block text-center text-cyan\">\n        <i nz-icon type=\"api\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">域名与网站</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('网络')\" class=\"d-block text-center text-teal\">\n        <i nz-icon type=\"global\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">网络</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('应用服务')\" class=\"d-block text-center text-pink\">\n        <i nz-icon type=\"appstore\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">应用服务</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('开发者工具')\" class=\"d-block text-center text-success\">\n        <i nz-icon type=\"tool\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">开发者工具</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n</nz-row>\n"

/***/ }),

/***/ "./src/app/routes/extras/helpcenter/helpcenter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/extras/helpcenter/helpcenter.component.ts ***!
  \******************************************************************/
/*! exports provided: HelpCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterComponent", function() { return HelpCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent(msg) {
        this.msg = msg;
        this.type = '';
        this.q = '';
    }
    HelpCenterComponent.prototype.quick = function (key) {
        this.q = key;
        this.search();
    };
    HelpCenterComponent.prototype.search = function () {
        this.msg.success("\u641C\u7D22\uFF1A" + this.q);
    };
    HelpCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-helpcenter',
            template: __webpack_require__(/*! ./helpcenter.component.html */ "./src/app/routes/extras/helpcenter/helpcenter.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], HelpCenterComponent);
    return HelpCenterComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/poi/edit/edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/extras/poi/edit/edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"modal-title\">添加-集群</div>\r\n</div>\r\n\r\n<form #f=\"ngForm\" (ngSubmit)=\"save()\" nz-form>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">IP地址</nz-form-label>\r\n    <nz-form-control nzSpan=\"20\">\r\n      <input nz-input [(ngModel)]=\"ipaddress\" name=\"ipaddressa\" maxlength=\"50\" required />\r\n      <p nz-form-explain>例如：192.168.1.1:8000</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n\r\n  <!-- <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">主/从</nz-form-label>\r\n    <nz-form-control nzSpan=\"20\">\r\n      <nz-select [(ngModel)]=\"master\" name=\"master\" required [nzAllowClear]=\"false\">\r\n        <nz-option *ngFor=\"let i of cat\" [nzLabel]=\"i\" [nzValue]=\"i\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item> -->\r\n\r\n\r\n  <div class=\"modal-footer\">\r\n    <button nz-button type=\"button\" (click)=\"close()\">关闭</button>\r\n    <button nz-button [disabled]=\"!f.form.valid || !f.form.dirty\" \r\n    [nzLoading]=\"http.loading\" [nzType]=\"'primary'\">保存</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/routes/extras/poi/edit/edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/extras/poi/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ExtrasPoiEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiEditComponent", function() { return ExtrasPoiEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");




var ExtrasPoiEditComponent = /** @class */ (function () {
    function ExtrasPoiEditComponent(modal, msgSrv, http) {
        this.modal = modal;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cat = ['Master', 'Slave'];
    }
    ExtrasPoiEditComponent.prototype.ngOnInit = function () {
        // if (this.i.id > 0) {
        //   this.http.get('/pois').subscribe((res: any) => (this.i = res.list[0]));
        // }
    };
    ExtrasPoiEditComponent.prototype.save = function () {
        // var ma = false;
        // if(this.master=="Master"){
        //  ma = true;
        //}
        var _this = this;
        this.http.post('/addip', {
            "key": this.ipaddress,
            "Master": true
        })
            .subscribe(function (res) {
            _this.modal.close(true);
            _this.close();
            if (res.msg == "ok") {
                _this.msgSrv.success('保存成功!');
            }
            else {
                _this.msgSrv.error(res.data);
            }
        });
    };
    ExtrasPoiEditComponent.prototype.close = function () {
        this.modal.destroy();
    };
    ExtrasPoiEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-extras-poi-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/routes/extras/poi/edit/edit.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]])
    ], ExtrasPoiEditComponent);
    return ExtrasPoiEditComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/poi/poi.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/extras/poi/poi.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>集群列表</h1>\r\n\r\n</div>\r\n\r\n<!-- <button nz-button (click)=\"add()\" [nzType]=\"'primary'\">添加</button> -->\r\n<button nz-button (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon type=\"plus\"></i>\r\n    <span>新建</span>\r\n  </button>\r\n<st #st class=\"bg-white\" [columns]=\"columns\" [data]=\"url\" [req]=\"{params: params}\"\r\n[ps]=\"pageSize\" [pi]=\"pageIndex\"></st>\r\n"

/***/ }),

/***/ "./src/app/routes/extras/poi/poi.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/extras/poi/poi.component.ts ***!
  \****************************************************/
/*! exports provided: ExtrasPoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiComponent", function() { return ExtrasPoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/routes/extras/poi/edit/edit.component.ts");






var BADGE = {
    true: { text: '成功', color: 'success' },
    false: { text: '失败', color: 'error' },
};
var TAG = {
    true: { text: 'Master', color: 'green' },
    false: { text: 'Slave', color: '' },
};
var ExtrasPoiComponent = /** @class */ (function () {
    function ExtrasPoiComponent(msg, modal, http) {
        var _this = this;
        this.msg = msg;
        this.modal = modal;
        this.http = http;
        this.pageSize = 10;
        this.params = {
            pi: this.pageIndex,
            ps: this.pageSize,
        };
        this.url = '/iplist';
        this.iplist = [];
        this.columns = [
            // { title: '编号', index: 'id', width: '100px' },
            { title: 'IP地址', index: 'host', width: '100px' },
            // { title: '主从', index: 'master',width: '100px',type: 'tag', tag: TAG  },
            { title: '状态', index: 'connectionStatus', width: '100px', type: 'badge', badge: BADGE },
            {
                title: '操作',
                width: '180px',
                buttons: [
                    {
                        text: '删除',
                        type: "del",
                        click: function (item) {
                            if (item.me == true) {
                                _this.msg.error("不能删除自己!");
                                return;
                            }
                            _this.http.post("/delip", {
                                "key": item.host
                            }).subscribe(function (res) {
                                _this.st.load();
                                if (res.msg == "ok") {
                                    _this.msg.success("删除成功!");
                                }
                                else {
                                    _this.msg.error(res.data);
                                }
                            });
                        }
                    },
                ],
            },
        ];
    }
    ExtrasPoiComponent.prototype.add = function () {
        var _this = this;
        this.modal
            .static(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"], { i: { id: 0 } }, 500)
            .subscribe(function (res) {
            _this.st.load();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('st'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delon_abc__WEBPACK_IMPORTED_MODULE_4__["STComponent"])
    ], ExtrasPoiComponent.prototype, "st", void 0);
    ExtrasPoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extras-poi',
            template: __webpack_require__(/*! ./poi.component.html */ "./src/app/routes/extras/poi/poi.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]])
    ], ExtrasPoiComponent);
    return ExtrasPoiComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/settings/settings.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/extras/settings/settings.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-row [nzGutter]=\"24\" class=\"py-lg\">\n  <nz-col [nzSpan]=\"6\">\n    <nz-card nzTitle=\"Personal settings\" class=\"ant-card__body-nopadding\">\n      <a (click)=\"active=1\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===1}\">Profile</a>\n      <a (click)=\"active=2\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===2}\">Account</a>\n      <a (click)=\"active=3\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===3}\">Emails</a>\n      <a (click)=\"active=4\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===4}\">Notifications</a>\n    </nz-card>\n    <nz-card nzTitle=\"Developer settings\" class=\"ant-card__body-nopadding\">\n      <a (click)=\"active=5\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===5}\">OAuth applications</a>\n      <a (click)=\"active=6\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===6}\">Personal access tokens</a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzSpan]=\"18\">\n    <nz-card nzTitle=\"Public profile\" *ngIf=\"active===1\">\n      <nz-row [nzGutter]=\"64\">\n        <nz-col [nzSpan]=\"16\">\n          <form nz-form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSave($event, profileForm.value)\" [nzLayout]=\"'vertical'\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"name\" nzRequired>name</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"name\" id=\"name\">\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                  <nz-form-explain *ngIf=\"name.errors.required\">required</nz-form-explain>\n                  <nz-form-explain *ngIf=\"name.errors.pattern\">must match pattern [-_a-zA-Z0-9]</nz-form-explain>\n                </div>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"email\">email</nz-form-label>\n              <nz-form-control>\n                <nz-select formControlName=\"email\">\n                  <nz-option [nzLabel]=\"'Select a verified email to display'\" [nzValue]=\"''\"></nz-option>\n                  <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\n                </nz-select>\n                <nz-form-explain>You can manage verified email addresses in your\n                  <a (click)=\"active=3\">email settings</a>.</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"bio\">Bio</nz-form-label>\n              <nz-form-control>\n                <textarea nz-input formControlName=\"bio\" id=\"bio\" placeholder=\"Tell us a little bit about yourself\"></textarea>\n                <nz-form-explain>You can\n                  <strong>@mention</strong> other users and organizations to link to them.</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"url\">URL</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"url\" id=\"url\">\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"company\">Company</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"company\" id=\"company\">\n                <nz-form-explain>You can\n                  <strong>@mention</strong> your company's GitHub organization to link it.</nz-form-explain>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item class=\"border-top-1 mt-md pt-md\">\n              <nz-form-label nzFor=\"location\">Location</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"location\" id=\"location\">\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <button nz-button [nzType]=\"'primary'\" [disabled]=\"profileForm.invalid\">Update profile</button>\n              </nz-form-control>\n            </nz-form-item>\n          </form>\n        </nz-col>\n        <nz-col [nzSpan]=\"8\">\n          <h4>Profile picture</h4>\n          <img src=\"./assets/tmp/img/avatar.jpg\" style=\"width: 100%;\">\n          <nz-upload nzAction=\"https://jsonplaceholder.typicode.com/posts/\" class=\"d-block mt-md text-center\">\n            <button nz-button>Upload new picture</button>\n          </nz-upload>\n        </nz-col>\n      </nz-row>\n    </nz-card>\n    <nz-card nzTitle=\"Change password\" *ngIf=\"active===2\">\n      <nz-row [nzGutter]=\"64\">\n        <nz-col [nzSpan]=\"16\">\n          <form nz-form [nzLayout]=\"'vertical'\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"old_password\" nzRequired>Old password</nz-form-label>\n              <nz-form-control>\n                <input nz-input [(ngModel)]=\"pwd.old_password\" name=\"old_password\" id=\"old_password\" type=\"password\" required>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"new_password\" nzRequired>New password</nz-form-label>\n              <nz-form-control>\n                <input nz-input [(ngModel)]=\"pwd.new_password\" name=\"new_password\" id=\"new_password\" type=\"password\" required>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzRequired nzFor=\"confirm_new_password\">Confirm new password</nz-form-label>\n              <nz-form-control>\n                <input nz-input [(ngModel)]=\"pwd.confirm_new_password\" name=\"confirm_new_password\" id=\"confirm_new_password\" type=\"password\"\n                  required>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <button nz-button (click)=\"pwdSave()\" [nzType]=\"'primary'\">Update profile</button>\n                <a class=\"pl-sm\" [routerLink]=\"['/forget']\">I forgot my password</a>\n              </nz-form-control>\n            </nz-form-item>\n          </form>\n        </nz-col>\n      </nz-row>\n      <h2 class=\"py-md mt-lg border-bottom-1\">Change username</h2>\n      <p class=\"py-sm\">Changing your username can have unintended side effects.</p>\n      <button nz-button (click)=\"msg.info('to change username page')\">\n        <span>Change username</span>\n      </button>\n    </nz-card>\n    <nz-card nzTitle=\"Email\" *ngIf=\"active===3\">\n      <nz-row class=\"border-1 p-md rounded-sm\" [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n        <nz-col [nzSpan]=\"12\">\n          cipchk@qq.com\n          <nz-tooltip [nzTitle]=\"'This email will be used for account-related notifications (e.g. account changes, password resets, billing receipts) as well as any web-based GitHub operations (e.g. edits and merges).'\">\n            <span nz-tooltip>\n              <nz-tag [nzColor]=\"'#28a745'\">Primary</nz-tag>\n            </span>\n          </nz-tooltip>\n          <nz-tooltip [nzTitle]=\"'This email will be used as the \\'from\\' address for web-based GitHub operations.'\">\n            <span nz-tooltip>\n              <nz-tag [nzColor]=\"'#959da5'\">Public</nz-tag>\n            </span>\n          </nz-tooltip>\n        </nz-col>\n        <nz-col [nzSpan]=\"12\" class=\"text-right\">\n          <i nz-icon type=\"delete\" class=\"text-lg\"></i>\n        </nz-col>\n      </nz-row>\n      <h4 class=\"pt-md mb-sm\">Add email address</h4>\n      <input nz-input style=\"width: 200px;\" class=\"mr-sm\">\n      <button nz-button (click)=\"msg.info('add')\">Add</button>\n      <h4 class=\"border-top-1 py-md mt-md\">Primary email address</h4>\n      <p class=\"mb-md\">cipchk@qq.com will be used for account-related notifications and for web-based GitHub operations (e.g. edits and merges).</p>\n      <nz-select [(ngModel)]=\"primary_email\" class=\"mr-sm\">\n        <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\n      </nz-select>\n      <button nz-button (click)=\"msg.info('save')\">Save</button>\n    </nz-card>\n    <nz-card nzTitle=\"Notifications\" *ngIf=\"active===4\">\n      <p class=\"pb-md\">Choose how you receive notifications. These notification settings apply to the repositories you’re watching.</p>\n      <nz-list nzBordered>\n        <nz-list-item class=\"d-block\">\n          <h4>Automatically watch repositories</h4>\n          <p class=\"py-sm\">When you’re given push access to a repository, automatically receive notifications for it.</p>\n          <label nz-checkbox [ngModel]=\"true\">Automatically watch</label>\n        </nz-list-item>\n        <nz-list-item class=\"d-block\">\n          <h4>Participating</h4>\n          <p class=\"py-sm\">Notifications for the conversations you are participating in, or if someone cites you with an @mention.</p>\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\n        </nz-list-item>\n        <nz-list-item class=\"d-block\">\n          <h4>Watching</h4>\n          <p class=\"py-sm\">Notifications for all repositories or conversations you’re watching.</p>\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\n        </nz-list-item>\n      </nz-list>\n    </nz-card>\n    <nz-card class=\"ant-card__body-nopadding\" *ngIf=\"active===5\" [nzBordered]=\"false\">\n      <div class=\"border rounded-md text-center p-lg bg-grey-lighter\">\n        <h3>No OAuth applications</h3>\n        <p class=\"py-md\">OAuth applications are used to access the GitHub API. Read the docs to find out more.</p>\n        <button nz-button (click)=\"msg.info('Register a new application')\" [nzType]=\"'primary'\">\n          Register a new application\n        </button>\n      </div>\n    </nz-card>\n    <nz-card nzTitle=\"Personal access tokens\" [nzExtra]=\"extra\" *ngIf=\"active===6\">\n      <ng-template #extra>\n        <button nz-button (click)=\"msg.info('Generate new token')\" [nzSize]=\"'small'\">Generate new token</button>\n        <button nz-button (click)=\"msg.info('Revoke all')\" [nzSize]=\"'small'\" [nzType]=\"'danger'\" class=\"ml-sm\">Revoke all</button>\n      </ng-template>\n      <p>Tokens you have generated that can be used to access the GitHub API.</p>\n      <nz-list nzBordered class=\"mt-sm\">\n        <nz-list-item>\n          <nz-col [nzSpan]=\"12\">\n            <strong>octotree</strong> — repo\n          </nz-col>\n          <nz-col [nzSpan]=\"12\" class=\"text-right\">\n            Last used within the last day\n            <nz-button-group>\n              <button nz-button>Edit</button>\n              <button nz-button [nzType]=\"'danger'\">Delete</button>\n            </nz-button-group>\n          </nz-col>\n        </nz-list-item>\n      </nz-list>\n    </nz-card>\n  </nz-col>\n</nz-row>\n"

/***/ }),

/***/ "./src/app/routes/extras/settings/settings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/extras/settings/settings.component.ts ***!
  \**************************************************************/
/*! exports provided: ExtrasSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasSettingsComponent", function() { return ExtrasSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ExtrasSettingsComponent = /** @class */ (function () {
    function ExtrasSettingsComponent(fb, msg) {
        this.msg = msg;
        this.active = 1;
        this.pwd = {
            old_password: '',
            new_password: '',
            confirm_new_password: '',
        };
        // Email
        this.primary_email = 'cipchk@qq.com';
        this.profileForm = fb.group({
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[-_a-zA-Z0-9]{4,20}$"),
                ]),
            ],
            email: '',
            bio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(160)],
            url: '',
            company: '',
            location: '',
        });
    }
    Object.defineProperty(ExtrasSettingsComponent.prototype, "name", {
        get: function () {
            return this.profileForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    ExtrasSettingsComponent.prototype.profileSave = function (event, value) {
        console.log('profile value', value);
    };
    ExtrasSettingsComponent.prototype.pwdSave = function () {
        if (!this.pwd.old_password) {
            return this.msg.error('invalid old password');
        }
        if (!this.pwd.new_password) {
            return this.msg.error('invalid new password');
        }
        if (!this.pwd.confirm_new_password) {
            return this.msg.error('invalid confirm new password');
        }
        console.log('pwd value', this.pwd);
    };
    ExtrasSettingsComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com',
        });
    };
    ExtrasSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-extras-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/routes/extras/settings/settings.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ExtrasSettingsComponent);
    return ExtrasSettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=extras-extras-module.js.map