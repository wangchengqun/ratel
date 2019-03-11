import { Injectable, Injector,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  MenuService,
  SettingsService,
  TitleService,
  ALAIN_I18N_TOKEN,
} from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {

  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient,
    private injector: Injector,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  load(): Promise<any> {

      var zh_ch_kv = {
        "menu.search.placeholder": "搜索：员工、文件、照片等",
        "menu.fullscreen": "全屏",
        "menu.fullscreen.exit": "退出全屏",
        "menu.clear.local.storage": "清理本地缓存",
        "menu.lang": "语言",
        "menu.main": "主导航",
        "menu.exception": "异常页",
        "menu.exception.not-permission": "403",
        "menu.exception.not-find": "404",
        "menu.exception.server-error": "500",
        "menu.account": "个人页",
        "menu.account.center": "个人中心",
        "menu.account.settings": "个人设置",
        "menu.account.trigger": "触发错误",
        "menu.account.logout": "退出登录",
        "menu.more": "更多",
        "app.lock": "锁屏",
        "app.login.message-invalid-credentials": "账户或密码错误（admin/ant.design）",
        "app.login.message-invalid-verification-code": "验证码错误",
        "app.login.tab-login-credentials": "账户密码登录",
        "app.login.tab-login-mobile": "手机号登录",
        "app.login.remember-me": "自动登录",
        "app.login.forgot-password": "忘记密码",
        "app.login.sign-in-with": "其他登录方式",
        "app.login.signup": "注册账户",
        "app.login.login": "登录",
        "app.register.register": "注册",
        "app.register.get-verification-code": "获取验证码",
        "app.register.sign-in": "使用已有账户登录",
        "app.register-result.msg": "你的账户：{{email}} 注册成功",
        "app.register-result.activation-email":
          "激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",
        "app.register-result.back-home": "返回首页",
        "app.register-result.view-mailbox": "查看邮箱",
        "validation.email.required": "请输入邮箱地址！",
        "validation.email.wrong-format": "邮箱地址格式错误！",
        "validation.password.required": "请输入密码！",
        "validation.password.twice": "两次输入的密码不匹配!",
        "validation.password.strength.msg": "请至少输入 6 个字符。请不要使用容易被猜到的密码。",
        "validation.password.strength.strong": "强度：强",
        "validation.password.strength.medium": "强度：中",
        "validation.password.strength.short": "强度：太短",
        "validation.confirm-password.required": "请确认密码！",
        "validation.phone-number.required": "请输入手机号！",
        "validation.phone-number.wrong-format": "手机号格式错误！",
        "validation.verification-code.required": "请输入验证码！",
        "validation.title.required": "请输入标题",
        "validation.date.required": "请选择起止日期",
        "validation.goal.required": "请输入目标描述",
        "validation.standard.required": "请输入衡量标准"              
    };
    this.translate.setTranslation(this.i18n.defaultLang, zh_ch_kv);
    this.translate.setDefaultLang(this.i18n.defaultLang);

    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve,reject) => {
      // zip(
      //   this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
      //   this.httpClient.get('assets/tmp/app-data.json'),
      // )
     this.httpClient
      .get('/App')
        .pipe(
          // 接收其他拦截器后产生的异常消息
          // catchError(([langData, appData]) => {
          //   resolve(null);
          //   return [langData, appData];
          // }),
          catchError((res: any) => {
            resolve(null);
            return null;
          }),
        )   
        .subscribe(
          (res: any) => {
          //  if (res != null){ 
          //    this.injector.get(NzMessageService).success(JSON.stringify(res));
          //  }
            // // application data
           // const ress: any = appData;
            // 应用信息：包括站点名、描述、年份
            this.settingService.setApp(res.data.app);
            // 用户信息：包括姓名、头像、邮箱地址
            this.settingService.setUser(res.data.user);
            // ACL：设置权限为全量
            this.aclService.setFull(true);
            // 初始化菜单
            this.menuService.add(res.data.menu);
            // 设置页面标题的后缀
            this.titleService.suffix = res.data.app.name;
           
          },
          () => {},
          () => {
            resolve(null);
          },
        );
        // .subscribe(
        //   ([langData, appData]) => {
            
        //     // setting language data
        //     this.translate.setTranslation(this.i18n.defaultLang, langData);
        //     //console.log(langData);
        //     this.translate.setDefaultLang(this.i18n.defaultLang);

        //     // application data
        //     const res: any = appData;
        //     // 应用信息：包括站点名、描述、年份
        //     this.settingService.setApp(res.app);
        //     // 用户信息：包括姓名、头像、邮箱地址
        //     this.settingService.setUser(res.user);
        //     // ACL：设置权限为全量
        //     this.aclService.setFull(true);
        //     // 初始化菜单
        //     this.menuService.add(res.menu);
        //     // 设置页面标题的后缀
        //     this.titleService.default = '';
        //     this.titleService.suffix = res.app.name;
        //   },
        //   () => {},
        //   () => {
        //     resolve(null);
        //   },
        // );
    });
  }
}
