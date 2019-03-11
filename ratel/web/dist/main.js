(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/_api.ts":
/*!***********************!*\
  !*** ./_mock/_api.ts ***!
  \***********************/
/*! exports provided: APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm5/mock.js");

// region: mock data
var titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
];
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
var covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
var desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
var user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];
// endregion
function getFakeList(count) {
    if (count === void 0) { count = 20; }
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: "fake-list-" + i,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0
                ? covers[i % 4]
                : covers[3 - i % 4],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
var APIS = {
    '/api/list': function (req) { return getFakeList(req.queryString.count); },
    '/api/notice': function () { return getNotice(); },
    '/api/activities': function () { return getActivities(); },
    '/api/401': function () { throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](401); },
    '/api/403': function () { throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](403); },
    '/api/404': function () { throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](404); },
    '/api/500': function () { throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](500); }
};


/***/ }),

/***/ "./_mock/_chart.ts":
/*!*************************!*\
  !*** ./_mock/_chart.ts ***!
  \*************************/
/*! exports provided: CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return CHARTS; });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
// tslint:disable


// region: mock data
var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (var i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY[i],
    });
}
var visitData2 = [];
var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (var i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
var salesData = [];
for (var i = 0; i < 12; i += 1) {
    salesData.push({
        x: i + 1 + "\u6708",
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
var searchData = [];
for (var i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
var salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
var salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
var salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '个护健康',
        y: 188,
    },
    {
        x: '服饰箱包',
        y: 344,
    },
    {
        x: '母婴产品',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
var offlineData = [];
for (var i = 0; i < 10; i += 1) {
    offlineData.push({
        name: "\u95E8\u5E97" + i,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
var offlineChartData = [];
for (var i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
var radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
//
var radarData = [];
var radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
// endregion
var CHARTS = {
    '/chart': JSON.parse(JSON.stringify({
        visitData: visitData,
        visitData2: visitData2,
        salesData: salesData,
        searchData: searchData,
        offlineData: offlineData,
        offlineChartData: offlineChartData,
        salesTypeData: salesTypeData,
        salesTypeDataOnline: salesTypeDataOnline,
        salesTypeDataOffline: salesTypeDataOffline,
        radarData: radarData,
    })),
    '/chart/visit': JSON.parse(JSON.stringify(visitData)),
    '/chart/tags': mockjs__WEBPACK_IMPORTED_MODULE_0__["mock"]({
        'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
    }),
};


/***/ }),

/***/ "./_mock/_geo.ts":
/*!***********************!*\
  !*** ./_mock/_geo.ts ***!
  \***********************/
/*! exports provided: GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return GEOS; });
var DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
var GEOS = {
    '/geo/province': function () { return DATA.filter(function (w) { return w.id.endsWith('0000'); }); },
    '/geo/:id': function (req) {
        var pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); });
    },
};


/***/ }),

/***/ "./_mock/_pois.ts":
/*!************************!*\
  !*** ./_mock/_pois.ts ***!
  \************************/
/*! exports provided: POIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return POIS; });
var POIS = {
    '/pois': {
        total: 2,
        list: [
            {
                id: 10000,
                user_id: 1,
                name: '测试品牌',
                branch_name: '测试分店',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
            {
                id: 10001,
                user_id: 2,
                name: '测试品牌2',
                branch_name: '测试分店2',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
        ],
    },
};


/***/ }),

/***/ "./_mock/_profile.ts":
/*!***************************!*\
  !*** ./_mock/_profile.ts ***!
  \***************************/
/*! exports provided: PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return PROFILES; });
var basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
var basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
var advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1: advancedOperation1,
        advancedOperation2: advancedOperation2,
        advancedOperation3: advancedOperation3,
    },
};


/***/ }),

/***/ "./_mock/_rule.ts":
/*!************************!*\
  !*** ./_mock/_rule.ts ***!
  \************************/
/*! exports provided: RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
var list = [];
for (var i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : (Math.floor(i / 2) + 1))),
        createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : (Math.floor(i / 2) + 1))),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    var ret = list.slice();
    if (params.sorter) {
        var s_1 = params.sorter.split('_');
        ret = ret.sort(function (prev, next) {
            if (s_1[1] === 'descend') {
                return next[s_1[0]] - prev[s_1[0]];
            }
            return prev[s_1[0]] - next[s_1[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(function (data) { return params.statusList.indexOf(data.status) > -1; });
    }
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(function (no) {
        var idx = list.findIndex(function (w) { return w.no === no; });
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    var i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
var RULES = {
    '/rule': function (req) { return getRule(req.queryString); },
    'DELETE /rule': function (req) { return removeRule(req.queryString.nos); },
    'POST /rule': function (req) { return saveRule(req.body.description); },
};


/***/ }),

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi, ps = +params.ps, start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') ||
            data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: PROFILES, RULES, APIS, CHARTS, POIS, USERS, GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_profile */ "./_mock/_profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return _profile__WEBPACK_IMPORTED_MODULE_0__["PROFILES"]; });

/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rule */ "./_mock/_rule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return _rule__WEBPACK_IMPORTED_MODULE_1__["RULES"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_api */ "./_mock/_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["APIS"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chart */ "./_mock/_chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return _chart__WEBPACK_IMPORTED_MODULE_3__["CHARTS"]; });

/* harmony import */ var _pois__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pois */ "./_mock/_pois.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return _pois__WEBPACK_IMPORTED_MODULE_4__["POIS"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["USERS"]; });

/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_geo */ "./_mock/_geo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return _geo__WEBPACK_IMPORTED_MODULE_6__["GEOS"]; });










/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./extras/extras.module": [
		"./src/app/routes/extras/extras.module.ts",
		"extras-extras-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["VERSION"].full);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.titleSrv.setTitle();
            _this.modalSrv.closeAll();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: I18nHttpLoaderFactory, StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/json-schema/json-schema.module */ "./src/app/shared/json-schema/json-schema.module.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delon.module */ "./src/app/delon.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");





// #region default language
// 参考：https://ng-alain.com/docs/i18n



var LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
};
// register angular

Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(LANG.ng, LANG.abbr);
var LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["DELON_LOCALE"], useValue: LANG.delon },
];
// #endregion
// #region i18n services




// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "assets/tmp/i18n/", '.json');
}
var I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
        },
    }),
];
var I18NSERVICE_PROVIDES = [
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["ALAIN_I18N_TOKEN"], useClass: _core__WEBPACK_IMPORTED_MODULE_11__["I18NService"], multi: false },
];
// #endregion
// #region global third module
var GLOBAL_THIRD_MODULES = [];
// #endregion
// #region JSON Schema form (using @delon/form)

var FORM_MODULES = [_shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_12__["JsonSchemaModule"]];
// #endregion
// #region Http Interceptors



var INTERCEPTOR_PROVIDES = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_13__["SimpleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core__WEBPACK_IMPORTED_MODULE_11__["DefaultInterceptor"], multi: true },
];
// #endregion
// #region Startup Service

function StartupServiceFactory(startupService) {
    return function () { return startupService.load(); };
}
var APPINIT_PROVIDES = [
    _core__WEBPACK_IMPORTED_MODULE_11__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_core__WEBPACK_IMPORTED_MODULE_11__["StartupService"]],
        multi: true,
    },
];
// #endregion






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _delon_module__WEBPACK_IMPORTED_MODULE_14__["DelonModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_18__["RoutesModule"]
            ].concat(I18NSERVICE_MODULES, GLOBAL_THIRD_MODULES, FORM_MODULES),
            providers: LANG_PROVIDES.concat(INTERCEPTOR_PROVIDES, I18NSERVICE_PROVIDES, APPINIT_PROVIDES),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");



var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/i18n/i18n.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/i18n/i18n.service.ts ***!
  \*******************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return I18NService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale/zh_cn */ "./node_modules/date-fns/locale/zh_cn/index.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");

// 请参考：https://ng-alain.com/docs/i18n









var DEFAULT = 'zh-CN';
var LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"],
        dateFns: date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_7__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_9__["zh_CN"],
        abbr: '🇨🇳',
    },
};
var I18NService = /** @class */ (function () {
    function I18NService(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map(function (code) {
            var item = LANGS[code];
            return { code: code, text: item.text, abbr: item.abbr };
        });
        var defaultLan = settings.layout.lang || translate.getBrowserLang();
        // `@ngx-translate/core` 预先知道支持哪些语言
        var lans = this._langs.map(function (item) { return item.code; });
        translate.addLangs(lans);
        this._default = lans.includes(defaultLan) ? defaultLan : lans[0];
        this.updateLangData(this._default);
    }
    I18NService.prototype.updateLangData = function (lang) {
        var item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        window.__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    };
    Object.defineProperty(I18NService.prototype, "change", {
        get: function () {
            return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (w) { return w != null; }));
        },
        enumerable: true,
        configurable: true
    });
    I18NService.prototype.use = function (lang) {
        var _this = this;
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(function () { return _this.change$.next(lang); });
    };
    /** 获取语言列表 */
    I18NService.prototype.getLangs = function () {
        return this._langs;
    };
    /** 翻译 */
    I18NService.prototype.fanyi = function (key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    };
    Object.defineProperty(I18NService.prototype, "defaultLang", {
        /** 默认语言 */
        get: function () {
            return this._default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18NService.prototype, "currentLang", {
        /** 当前语言 */
        get: function () {
            return (this.translate.currentLang ||
                this.translate.getDefaultLang() ||
                this._default);
        },
        enumerable: true,
        configurable: true
    });
    I18NService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_9__["SettingsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzI18nService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_9__["DelonLocaleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], I18NService);
    return I18NService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: I18NService, throwIfAlreadyLoaded, DefaultInterceptor, StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__["I18NService"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony import */ var _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net/default.interceptor */ "./src/app/core/net/default.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__["DefaultInterceptor"]; });

/* harmony import */ var _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup/startup.service */ "./src/app/core/startup/startup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__["StartupService"]; });







/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/net/default.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");










var CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "msg", {
        get: function () {
            return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.checkStatus = function (ev) {
        if (ev.status >= 200 && ev.status < 300)
            return;
        var errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]).error("\u8BF7\u6C42\u9519\u8BEF " + ev.status + ": " + ev.url, errortext);
    };
    DefaultInterceptor.prototype.handleData = function (ev) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        if (ev.status > 0) {
            this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_7__["_HttpClient"]).end();
        }
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401: // 未登录状态码
                // 请求错误 401: https://preview.pro.ant.design/api/401 用户没有权限（令牌、用户名、密码错误）。
                this.injector.get(_delon_auth__WEBPACK_IMPORTED_MODULE_9__["DA_SERVICE_TOKEN"]).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/exception/" + ev.status);
                break;
            default:
                if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(ev);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ev);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + url;
        }
        var newReq = req.clone({ url: url });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (event) {
            // 允许统一对请求错误处理
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"])
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.handleData(err); }));
    };
    DefaultInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



/***/ }),

/***/ "./src/app/core/startup/startup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/i18n.service */ "./src/app/core/i18n/i18n.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../style-icons-auto */ "./src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons */ "./src/style-icons.ts");











/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient, injector) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        this.injector = injector;
        iconSrv.addIcon.apply(iconSrv, _style_icons_auto__WEBPACK_IMPORTED_MODULE_9__["ICONS_AUTO"].concat(_style_icons__WEBPACK_IMPORTED_MODULE_10__["ICONS"]));
    }
    StartupService.prototype.load = function () {
        var _this = this;
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
            "app.register-result.activation-email": "激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",
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
        return new Promise(function (resolve, reject) {
            // zip(
            //   this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`),
            //   this.httpClient.get('assets/tmp/app-data.json'),
            // )
            _this.httpClient
                .get('/App')
                .pipe(
            // 接收其他拦截器后产生的异常消息
            // catchError(([langData, appData]) => {
            //   resolve(null);
            //   return [langData, appData];
            // }),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) {
                resolve(null);
                return null;
            }))
                .subscribe(function (res) {
                //  if (res != null){ 
                //    this.injector.get(NzMessageService).success(JSON.stringify(res));
                //  }
                // // application data
                // const ress: any = appData;
                // 应用信息：包括站点名、描述、年份
                _this.settingService.setApp(res.data.app);
                // 用户信息：包括姓名、头像、邮箱地址
                _this.settingService.setUser(res.data.user);
                // ACL：设置权限为全量
                _this.aclService.setFull(true);
                // 初始化菜单
                _this.menuService.add(res.data.menu);
                // 设置页面标题的后缀
                _this.titleService.suffix = res.data.app.name;
            }, function () { }, function () {
                resolve(null);
            });
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
    };
    StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["ALAIN_I18N_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzIconService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_7__["I18NService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_5__["ACLService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "./src/app/delon.module.ts":
/*!*********************************!*\
  !*** ./src/app/delon.module.ts ***!
  \*********************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return fnDelonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/fesm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");

/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/ng-alain/ng-alain/issues/180
 */



// #region mock



var MOCK_MODULES = !_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
    ? [_delon_mock__WEBPACK_IMPORTED_MODULE_4__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_5__ })]
    : [];
var REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"](), { login_url: '/passport/login' });
}

function fnSTConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"](), {
        modal: { size: 'lg' }
    });
}
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: REUSETAB_PROVIDES.concat(GLOBAL_CONFIG_PROVIDES),
        };
    };
    var DelonModule_1;
    DelonModule = DelonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _delon_theme__WEBPACK_IMPORTED_MODULE_3__["AlainThemeModule"].forRoot()
            ].concat(MOCK_MODULES),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "./src/app/layout/default/default.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\n<layout-header class=\"alain-default__header\"></layout-header>\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\n<section class=\"alain-default__content\">\n  <router-outlet></router-outlet>\n</section>\n<ng-template #settingHost></ng-template>\n"

/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");











var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, _message, resolver, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$)).subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                _this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            setTimeout(function () {
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutDefaultComponent.prototype.setClass = function () {
        var _a;
        var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
        var layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_7__["updateHostClass"])(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a));
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    LayoutDefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Setting componet for only developer
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production) {
            setTimeout(function () {
                var settingFactory = _this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_10__["SettingDrawerComponent"]);
                _this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    };
    LayoutDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
        settings.notify.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(unsubscribe$)).subscribe(function () { return _this.setClass(); });
        this.setClass();
    };
    LayoutDefaultComponent.prototype.ngOnDestroy = function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], LayoutDefaultComponent.prototype, "settingHost", void 0);
    LayoutDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layout/default/default.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/fullscreen.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/default/header/components/fullscreen.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    HeaderFullScreenComponent.prototype._resize = function () {
        this.status = screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"];
    };
    HeaderFullScreenComponent.prototype._click = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_resize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_click", null);
    HeaderFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-fullscreen',
            template: "\n    <i nz-icon [type]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n    {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/i18n.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/i18n.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderI18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderI18nComponent", function() { return HeaderI18nComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");






var HeaderI18nComponent = /** @class */ (function () {
    function HeaderI18nComponent(settings, i18n, doc) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        /** Whether to display language text */
        this.showLangText = true;
    }
    Object.defineProperty(HeaderI18nComponent.prototype, "langs", {
        get: function () {
            return this.i18n.getLangs();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "curLangCode", {
        get: function () {
            return this.settings.layout.lang;
        },
        enumerable: true,
        configurable: true
    });
    HeaderI18nComponent.prototype.change = function (lang) {
        var _this = this;
        var spinEl = this.doc.createElement('div');
        spinEl.setAttribute('class', "page-loading ant-spin ant-spin-lg ant-spin-spinning");
        spinEl.innerHTML = "<span class=\"ant-spin-dot ant-spin-dot-spin\"><i></i><i></i><i></i><i></i></span>";
        this.doc.body.appendChild(spinEl);
        this.i18n.use(lang);
        this.settings.setLayout('lang', lang);
        setTimeout(function () { return _this.doc.location.reload(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderI18nComponent.prototype, "showLangText", void 0);
    HeaderI18nComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-i18n',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div *ngIf=\"showLangText\" nz-dropdown>\n      <i nz-icon type=\"global\"></i>\n      {{ 'menu.lang' | translate}}\n      <i nz-icon type=\"down\"></i>\n    </div>\n    <i *ngIf=\"!showLangText\" nz-dropdown nz-icon type=\"global\"></i>\n    <ul nz-menu>\n      <li nz-menu-item *ngFor=\"let item of langs\" [nzSelected]=\"item.code === curLangCode\"\n        (click)=\"change(item.code)\">\n          <span role=\"img\" [attr.aria-label]=\"item.text\" class=\"pr-xs\">{{item.abbr}}</span>\n          {{item.text}}\n      </li>\n    </ul>\n  </nz-dropdown>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ALAIN_I18N_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _core__WEBPACK_IMPORTED_MODULE_5__["I18NService"], Object])
    ], HeaderI18nComponent);
    return HeaderI18nComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/icon.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/icon.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 500);
    };
    HeaderIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-icon',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <i class=\"anticon anticon-appstore\"></i>\n    </div>\n    <div nz-menu class=\"wd-xl animated jello\">\n      <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-calendar bg-error text-white\"></i>\n            <small>Calendar</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-file bg-geekblue text-white\"></i>\n            <small>Files</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-cloud bg-success text-white\"></i>\n            <small>Cloud</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-star-o bg-magenta text-white\"></i>\n            <small>Star</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-team bg-purple text-white\"></i>\n            <small>Team</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-scan bg-warning text-white\"></i>\n            <small>QR</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-pay-circle-o bg-cyan text-white\"></i>\n            <small>Pay</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-printer bg-grey text-white\"></i>\n            <small>Print</small>\n          </div>\n        </div>\n      </nz-spin>\n    </div>\n  </nz-dropdown>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/notify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/notify.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg, cdr) {
        this.msg = msg;
        this.cdr = cdr;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
        var data = this.data.slice();
        data.forEach(function (i) { return (i.list = []); });
        notices.forEach(function (item) {
            var newItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
            if (newItem.datetime)
                newItem.datetime = date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_2__(item.datetime, {
                    locale: window.__locale__,
                });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
        });
        return data;
    };
    HeaderNotifyComponent.prototype.loadData = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 1000);
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-notify',
            template: "\n  <notice-icon\n    [data]=\"data\"\n    [count]=\"count\"\n    [loading]=\"loading\"\n    btnClass=\"alain-default__nav-item\"\n    btnIconClass=\"alain-default__nav-item-icon\"\n    (select)=\"select($event)\"\n    (clear)=\"clear($event)\"\n    (popoverVisibleChange)=\"loadData()\"></notice-icon>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderSearchComponent.prototype, "focus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-toggled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderSearchComponent.prototype, "searchToggled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HeaderSearchComponent.prototype, "toggleChange", null);
    HeaderSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-search',
            template: "\n  <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'\">\n    <input nz-input [(ngModel)]=\"q\" (focus)=\"qFocus()\" (blur)=\"qBlur()\"\n      [placeholder]=\"'menu.search.placeholder' | translate\">\n  </nz-input-group>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/storage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/default/header/components/storage.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: function () {
                localStorage.clear();
                _this.messageSrv.success('Clear Finished!');
            },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-storage',
            template: "\n  <i nz-icon type=\"tool\"></i>\n  {{ 'menu.clear.local.storage' | translate}}\n  ",
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/task.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 500);
    };
    HeaderTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-task',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"alain-default__nav-item\" nz-dropdown>\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <div nz-menu class=\"wd-lg\">\n      <div *ngIf=\"loading\" class=\"mx-lg p-lg\"><nz-spin></nz-spin></div>\n      <nz-card *ngIf=\"!loading\" nzTitle=\"Notifications\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n        <ng-template #extra><i nz-icon type=\"plus\"></i></ng-template>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>cipchk</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u306F\u306A\u3055\u304D</strong>\n            <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA </p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u82CF\u5148\u751F</strong>\n            <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Kent</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Jefferson</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row>\n          <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n            See All\n          </div>\n        </div>\n      </nz-card>\n    </div>\n  </nz-dropdown>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/user.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");





var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    HeaderUserComponent.prototype.logout = function () {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    };
    HeaderUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-user',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div class=\"alain-default__nav-item d-flex align-items-center px-sm\" nz-dropdown>\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>\n      {{settings.user.name}}\n    </div>\n    <div nz-menu class=\"width-sm\">\n      <div nz-menu-item (click)=\"logout()\"><i nz-icon type=\"logout\" class=\"mr-sm\"></i>\n        {{ 'menu.account.logout' | translate }}\n      </div>\n    </div>\n  </nz-dropdown>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__header-logo\">\n \n  <h2 style=\"color:white;margin-left: 23px;margin-top: 10px;\">配置中心</h2>\n</div>\n<div class=\"alain-default__nav-wrap\">\n  <ul class=\"alain-default__nav\">\n    <!-- Menu -->\n    <li>\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\n        <i nz-icon type=\"menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}\"></i>\n      </div>\n    </li>\n    \n  </ul>\n  <ul class=\"alain-default__nav\">\n   \n    <li class=\"hidden-mobile\">\n      <header-user></header-user>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/default/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSidebar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/default/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{i.label}}<span class=\"pl-sm text-grey\">{{i.tip}}</span></span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\">\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number [(ngModel)]=\"pxVal\" (ngModelChange)=\"pxChange($event)\" [nzMin]=\"i.min\" [nzMax]=\"i.max\"\n                     [nzStep]=\"i.step || 2\" [nzFormatter]=\"format\"></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-content></ng-content>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingDrawerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerItemComponent", function() { return SettingDrawerItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingDrawerItemComponent = /** @class */ (function () {
    function SettingDrawerItemComponent() {
        this.i = {};
        this.format = function (value) { return value + " px"; };
    }
    Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
        set: function (val) {
            this.i = val;
            if (val.type === 'px') {
                this.pxVal = +val.value.replace('px', '');
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerItemComponent.prototype.pxChange = function (val) {
        this.i.value = val + "px";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SettingDrawerItemComponent.prototype, "data", null);
    SettingDrawerItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer-item',
            template: __webpack_require__(/*! ./setting-drawer-item.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.html"),
            host: {
                '[class.setting-drawer__body-item]': 'true',
            },
        })
    ], SettingDrawerItemComponent);
    return SettingDrawerItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">主题色</h3>\n      <span *ngFor=\"let c of colors\" nz-tooltip [ngStyle]=\"{ 'background-color': c.color }\" (click)=\"changeColor(c.color)\"\n            nz-tooltip [nzTitle]=\"c.key\" class=\"setting-drawer__theme-tag\"><i *ngIf=\"color === c.color\"\n           class=\"anticon anticon-check\"></i></span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">设置</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"顶部\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"侧边栏\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"内容\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"其它\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        固定头和侧边栏\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        色弱模式\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">预览</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>重置</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>拷贝</button>\n    <nz-alert class=\"mt-md\" nzType=\"warning\" nzMessage=\"配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改参数配置文件 src/styles/theme.less\"></nz-alert>\n  </div>\n</nz-drawer>\n<!-- <div class=\"setting-drawer__handle\" [ngClass]=\"{'setting-drawer__handle-opened': collapse}\" \n(click)=\"toggle()\">\n  <i nz-icon [type]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div> -->\n"

/***/ }),

/***/ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerComponent", function() { return SettingDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");






var ALAINDEFAULTVAR = 'alain-default-vars';
var DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
];
var DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
var SettingDrawerComponent = /** @class */ (function () {
    function SettingDrawerComponent(cdr, msg, settingSrv, lazy, zone, doc) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.loadedLess = false;
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
        get: function () {
            return this.settingSrv.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
        get: function () {
            return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
        get: function () {
            return DEFAULT_VARS['primary-color'].default;
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.loadLess = function () {
        var _this = this;
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(function () {
            var lessConfigNode = _this.doc.createElement('script');
            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
            _this.doc.body.appendChild(lessConfigNode);
        })
            .then(function () {
            return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js');
        })
            .then(function () {
            _this.loadedLess = true;
        });
    };
    SettingDrawerComponent.prototype.genVars = function () {
        var _a;
        var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
        var vars = (_a = {},
            _a["@primary-color"] = color,
            _a);
        validKeys
            .filter(function (key) { return key !== 'primary-color'; })
            .forEach(function (key) { return (vars["@" + key] = data[key].value); });
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    };
    SettingDrawerComponent.prototype.runLess = function () {
        var _this = this;
        var _a = this, zone = _a.zone, msg = _a.msg, cdr = _a.cdr;
        var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
        setTimeout(function () {
            zone.runOutsideAngular(function () {
                _this.loadLess().then(function () {
                    window.less.modifyVars(_this.genVars()).then(function () {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(function () { return cdr.detectChanges(); });
                    });
                });
            });
        }, 200);
    };
    SettingDrawerComponent.prototype.toggle = function () {
        this.collapse = !this.collapse;
    };
    SettingDrawerComponent.prototype.changeColor = function (color) {
        var _this = this;
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
            .forEach(function (key) { return delete _this.cachedData["@" + key]; });
        this.resetData(this.cachedData, false);
    };
    SettingDrawerComponent.prototype.setLayout = function (name, value) {
        this.settingSrv.setLayout(name, value);
    };
    SettingDrawerComponent.prototype.resetData = function (nowData, run) {
        var _this = this;
        if (run === void 0) { run = true; }
        nowData = nowData || {};
        var data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(function (key) {
            var value = nowData["@" + key] || data[key].default || '';
            data[key].value = value === "@primary-color" ? _this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    };
    Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
        get: function () {
            var _this = this;
            return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.apply = function () {
        this.runLess();
    };
    SettingDrawerComponent.prototype.reset = function () {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    };
    SettingDrawerComponent.prototype.copyVar = function () {
        var vars = this.genVars();
        var copyContent = Object.keys(vars)
            .map(function (key) { return key + ": " + vars[key] + ";"; })
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["copy"])(copyContent);
        this.msg.success('Copy success');
    };
    SettingDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer',
            template: __webpack_require__(/*! ./setting-drawer.component.html */ "./src/app/layout/default/setting-drawer/setting-drawer.component.html"),
            host: {
                '[class.setting-drawer]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
    ], SettingDrawerComponent);
    return SettingDrawerComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__aside-inner\">\n  <!-- <nz-dropdown nzTrigger=\"click\" class=\"alain-default__aside-user\">\n    <div nz-dropdown class=\"user-block-dropdown\">\n      <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\n      <div class=\"alain-default__aside-user-info\">\n        <strong>{{settings.user.name}}</strong>\n        <p class=\"text-truncate mb0\">{{settings.user.email}}</p>\n      </div>\n    </div>\n    <ul nz-menu>\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\n    </ul>\n  </nz-dropdown> -->\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings) {
        this.settings = settings;
    }
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/default/sidebar/sidebar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/layout/fullscreen/fullscreen.component.html"),
            host: {
                '[class.alain-fullscreen]': 'true',
            },
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/header/header.component */ "./src/app/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "./src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/header/components/search.component */ "./src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/notify.component */ "./src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/task.component */ "./src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/icon.component */ "./src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "./src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/i18n.component */ "./src/app/layout/default/header/components/i18n.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/header/components/storage.component */ "./src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/header/components/user.component */ "./src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer.component */ "./src/app/layout/default/setting-drawer/setting-drawer.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer-item.component */ "./src/app/layout/default/setting-drawer/setting-drawer-item.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./passport/passport.component */ "./src/app/layout/passport/passport.component.ts");

















var SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_15__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_16__["SettingDrawerItemComponent"]];
var COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
].concat(SETTINGDRAWER);
var HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_8__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_10__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_11__["HeaderFullScreenComponent"],
    _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_12__["HeaderI18nComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_13__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_14__["HeaderUserComponent"],
];
// passport

var PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_17__["LayoutPassportComponent"]];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            entryComponents: SETTINGDRAWER,
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT),
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/passport/passport.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\n  <div class=\"wrap\">\n    <div class=\"top\">\n      <div class=\"head\">\n        <!-- <img class=\"logo\" src=\"/logo-color.svg\"> -->\n        <span class=\"title\">配置中心</span>\n      </div>\n      <div class=\"desc\">                </div>\n    </div>\n    <router-outlet></router-outlet>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  text-align: right;\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  padding: 32px 0;\n  flex: 1;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bhc3Nwb3J0L3Bhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvcGFzc3BvcnQvRDovbmctYWxhaW4vbXktcHJvamVjdC9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9sYXlvdXQvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBR00sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREVOO0FDUkE7RUFTTSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURFTjtBQ2RBO0VBY1EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURHUjtBQ3JCQTtFQXNCTSxlQUFBO0VBQ0EsT0FBQTtBREVOO0FDekJBO0VBMEJNLG1CQUFBO0FERU47QUNDSTtFQUFBO0lBRUksNEZBQUE7SUFDQSw0QkFBQTtJQUNBLGlDQUFBO0lBQ0EscUJBQUE7RURDTjtFQ05FO0lBUUksb0JBQUE7RURDTjtBQUNGO0FDdkNBO0VBeUNNLGtCQUFBO0FEQ047QUMxQ0E7RUE0Q00sWUFBQTtFQUNBLGlCQUFBO0FEQ047QUM5Q0E7RUErQ1EscUJBQUE7QURFUjtBQ2pEQTtFQW1ETSxZQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ3JEQTtFQXVETSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx5RUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBRENOO0FDN0RBO0VBK0RNLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURDTiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYXNzcG9ydC9wYXNzcG9ydC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YwZjJmNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubGFuZ3Mge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxhbmdzIC5hbnRpY29uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAud3JhcCB7XG4gIHBhZGRpbmc6IDMycHggMDtcbiAgZmxleDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDExMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLndyYXAge1xuICAgIHBhZGRpbmc6IDMycHggMCAyNHB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxvZ28ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuIiwiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9zdHlsZXMvZGVmYXVsdCc7XG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMmY1O1xuICAgIH1cbiAgICAubGFuZ3Mge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgLmFudGljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAud3JhcCB7XG4gICAgICBwYWRkaW5nOiAzMnB4IDA7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuYW50LWZvcm0taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMTEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgIH1cbiAgICAgIC53cmFwIHtcbiAgICAgICAgcGFkZGluZzogMzJweCAwIDI0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50b3Age1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaGVhZGVyIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAzM3B4O1xuICAgICAgY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuICAgICAgZm9udC1mYW1pbHk6ICdNeXJpYWQgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbiAgICAgIGNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    LayoutPassportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-passport',
            template: __webpack_require__(/*! ./passport.component.html */ "./src/app/layout/passport/passport.component.html"),
            styles: [__webpack_require__(/*! ./passport.component.less */ "./src/app/layout/passport/passport.component.less")]
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/v1/v1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/dashboard/v1/v1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    业务类型\n  </h1>\n</div>\n<!-- <st class=\"bg-white\" [data]=\"users\" [columns]=\"columns\" [expand]=\"expand\" expandRowByClick>\n    <ng-template #expand let-item let-index=\"index\" let-column=\"column\">\n      {{ item.description }}\n    </ng-template>\n</st> -->\n\n<!-- add(modalEdit) -->\n<button nz-button (click)=\"BusinessTypeAdd()\" [nzType]=\"'primary'\">\n    <i nz-icon type=\"plus\"></i>\n    <span>新建</span>\n  </button>\n<div class=\"bg-white\">\n\n<nz-table #nestedTable [nzData]=\"listOfParentData\" [nzShowPagination]=\"true\"\n   [nzFrontPagination]=\"false\" [nzTotal]=\"PageTotal\"\n      (nzPageIndexChange)=\"nestedTableIndexChange(nestedTable)\" [nzScroll]=\"{x:'1100px'}\">\n    <thead>\n      <tr>\n        <th nzShowExpand></th>\n        <th nzWidth=\"100px\" nzLeft=\"0px\">业务类型</th>\n        <th nzWidth=\"50%\">备注</th>\n        <th nzWidth=\"100px\" nzRight=\"0px\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n\n\n      <ng-template ngFor let-data [ngForOf]=\"nestedTable.data\">\n        <tr>\n          <td nzShowExpand [(nzExpand)]=\"data.expand\" \n              (nzExpandChange)=\"innerTableExpandChange(data.expand,data.key,innerTable)\"></td>\n          <td nzLeft=\"0px\">{{data.key}}</td>\n          <td>{{data.value}}</td>\n          <td nzRight=\"0px\">\n              <span class=\"table-operation\">\n                                  <a (click)=\"addBusinessData(data.key,innerTable)\">添加</a>\n                                  <nz-divider nzType=\"vertical\"></nz-divider>\n                                  <a (click)=\"BusinessTypeEdit(data)\">编辑</a>\n                                  <nz-divider nzType=\"vertical\"></nz-divider>\n                                  <a (click)=\"Delete(data)\">删除</a>\n              </span>\n          </td>\n        </tr>\n        <tr [nzExpand]=\"data.expand\">\n          <td></td>\n          <td colspan=\"7\">\n        <div class=\"bg-white\">\n            <nz-table #innerTable [nzData]=\"data.childList\" \n             nzSize=\"middle\" [nzShowPagination]=\"true\" [nzFrontPagination]=\"false\" \n             (nzPageIndexChange)=\"innerTableIndexChange(innerTable,data.key)\" >\n                <thead>\n                  <tr>\n                    <th nzWidth=\"100px\" nzLeft=\"0px\">key</th>\n                    <th nzWidth=\"100px\">value</th>\n                    <th nzWidth=\"100px\" nzRight=\"0px\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let type_data of innerTable.data\">\n                    <td nzLeft=\"0px\">{{type_data.key}}</td>\n                    <td>{{type_data.content}}</td>\n                    <td nzRight=\"0px\">\n                                <span class=\"table-operation\">\n                                  <nz-divider nzType=\"vertical\"></nz-divider>\n                                <a (click)=\"editaddBusinessData(type_data,data.key,innerTable)\" >编辑</a>\n                                  <nz-divider nzType=\"vertical\"></nz-divider>\n                                  <a (click)=\"DeleteData(type_data,data.key,innerTable)\" >删除</a>\n                                </span>\n                    </td>\n                  </tr>\n                </tbody>\n          </nz-table>\n       </div>  \n  </td>\n  </tr>\n  </ng-template>\n\n\n  </tbody>\n  </nz-table>\n</div>\n\n\n<!-- <ng-template #modalEditData>\n    <nz-form-item>\n      <nz-form-label nzFor=\"no\">key</nz-form-label>\n      <nz-form-control>\n        <input nz-input [(disabled)]=\"disabledEditData\" [(ngModel)]=\"BusinessDataKey\" name=\"BusinessDataKey\" placeholder=\"请输入\" >\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n        <nz-form-label nzFor=\"no\">value</nz-form-label>\n        <nz-form-control>\n            <textarea nz-input placeholder=\"请输入\"\n             [(ngModel)]=\"BusinessDataValue\" [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\n        </nz-form-control>\n      </nz-form-item>\n  </ng-template> -->\n\n  <nz-modal [(nzVisible)]=\"isVisibleData\" [nzTitle]=\"modalTitleData\" [nzContent]=\"modalContentData\" \n     [nzFooter]=\"modalFooterData\" (nzOnCancel)=\"handleCancelData()\">\n    <ng-template #modalTitleData>\n    配置\n    </ng-template>\n  <ng-template #modalContentData>\n\n    <nz-form-item>\n      <nz-form-label nzFor=\"no\">key</nz-form-label>\n      <nz-form-control>\n        <input nz-input [(disabled)]=\"disabledEditData\" [(ngModel)]=\"BusinessDataKey\" name=\"BusinessDataKey\" placeholder=\"请输入\" >\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n        <nz-form-label nzFor=\"no\">value</nz-form-label>\n        <nz-form-control>\n            <textarea nz-input placeholder=\"请输入\"\n             [(ngModel)]=\"BusinessDataValue\" [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\n        </nz-form-control>\n      </nz-form-item>\n\n  </ng-template>\n<ng-template #modalFooterData>\n  <button nz-button nzType=\"default\" (click)=\"handleCancelData()\">取消</button>\n  <button nz-button nzType=\"primary\" (click)=\"BusinessDataSave()\" [nzLoading]=\"isConfirmLoadingData\">保存</button>\n</ng-template>\n</nz-modal>\n\n  \n\n\n\n  \n    <nz-modal [(nzVisible)]=\"isVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" \n            [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel()\">\n      <ng-template #modalTitle>\n        业务类型\n      </ng-template>\n      <ng-template #modalContent>\n        \n        <nz-form-item>\n          <nz-form-label nzFor=\"no\">类型</nz-form-label>\n          <nz-form-control>\n            <input nz-input [(disabled)]=\"disabledEdit\" required [(ngModel)]=\"BusinessKey\" name=\"BusinessKey\" placeholder=\"请输入\" >\n          </nz-form-control>\n        </nz-form-item>\n    \n        <nz-form-item>\n            <nz-form-label nzFor=\"no\">备注</nz-form-label>\n            <nz-form-control>\n                <textarea nz-input placeholder=\"请输入\"\n                 [(ngModel)]=\"BusinessValue\" [nzAutosize]=\"{ minRows: 2, maxRows: 6 }\"></textarea>\n            </nz-form-control>\n        </nz-form-item>\n\n      </ng-template>\n      <ng-template #modalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancel()\">取消</button>\n        <button nz-button nzType=\"primary\" (click)=\"BusinessTypeSave()\" [nzLoading]=\"isConfirmLoading\">保存</button>\n      </ng-template>\n    </nz-modal>\n\n"

/***/ }),

/***/ "./src/app/routes/dashboard/v1/v1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/dashboard/v1/v1.component.ts ***!
  \*****************************************************/
/*! exports provided: DashboardV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV1Component", function() { return DashboardV1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");




var DashboardV1Component = /** @class */ (function () {
    function DashboardV1Component(http, msg, modalSrv, notification) {
        this.http = http;
        this.msg = msg;
        this.modalSrv = modalSrv;
        this.notification = notification;
        // @ViewChild('st')
        // st: STComponent;
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.isVisibleData = false;
        this.isConfirmLoadingData = false;
        this.listOfParentData = [];
        this.listOfChildrenData = [];
        this.disabledEditData = false;
        this.disabledEdit = false;
        this.getList();
    }
    DashboardV1Component.prototype.nestedTableIndexChange = function (nestedTable) {
        var PageIndex = nestedTable.nzPageIndex;
        this.getList(PageIndex);
    };
    DashboardV1Component.prototype.BusinessTypeSave = function () {
        var _this = this;
        this.isConfirmLoading = true;
        // setTimeout(() => {
        //   this.isVisible = false;
        //   this.isConfirmLoading = false;
        // }, 3000);
        if (this.BusinessKey.trim() == "") {
            this.notification.error("操作信息", "类型不能为空!");
            this.isConfirmLoading = false;
            return;
        }
        this.http.post("/addBusiness", {
            "key": this.BusinessKey,
            "remark": this.BusinessValue,
        })
            .subscribe(function (res) {
            if (res.msg == "ok") {
                _this.handleCancel();
                _this.notification.success("操作信息", "保存成功!");
            }
            else {
                _this.notification.error("操作信息", res.data);
            }
            _this.getList();
        });
        this.isConfirmLoading = false;
    };
    DashboardV1Component.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    DashboardV1Component.prototype.handleCancelData = function () {
        this.isVisibleData = false;
    };
    DashboardV1Component.prototype.showModal = function () {
        this.isVisible = true;
    };
    DashboardV1Component.prototype.showModalData = function () {
        this.isVisibleData = true;
    };
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
    DashboardV1Component.prototype.Delete = function (data) {
        var _this = this;
        this.modalSrv.confirm({
            nzTitle: '你确定要删除（' + data.key + '）吗?',
            nzContent: "" + data.value + "",
            nzOkText: '确认',
            nzOkType: 'danger',
            nzOnOk: function () {
                _this.http.post("/delBusiness", {
                    "key": data.key,
                })
                    .subscribe(function (res) {
                    _this.getList();
                    _this.notification.success("操作信息!", "删除成功!");
                });
            },
            nzCancelText: '取消',
            nzOnCancel: function () {
            }
        });
    };
    DashboardV1Component.prototype.BusinessTypeAdd = function () {
        this.showModal();
        this.BusinessKey = "";
        this.BusinessValue = "";
        this.disabledEdit = false;
    };
    DashboardV1Component.prototype.BusinessTypeEdit = function (data) {
        this.showModal();
        this.BusinessKey = data.key;
        this.BusinessValue = data.value;
        this.disabledEdit = true;
    };
    DashboardV1Component.prototype.addBusinessData = function (key, innerTable) {
        this.showModalData();
        this.disabledEditData = false;
        this.BusinessDataValue = "";
        this.BusinessDataKey = "";
        this.innerTableData = innerTable;
        this.BusinessDatakey = key;
    };
    DashboardV1Component.prototype.editaddBusinessData = function (data, key, innerTable) {
        this.showModalData();
        this.BusinessDataValue = data.content;
        this.BusinessDataKey = data.key;
        this.disabledEditData = true;
        this.innerTableData = innerTable;
        this.BusinessDatakey = key;
    };
    DashboardV1Component.prototype.BusinessDataSave = function () {
        var _this = this;
        if (this.BusinessDataKey.trim() == "") {
            this.notification.error("操作信息", "key 不能为空!");
            return;
        }
        if (this.BusinessDataValue.trim() == "") {
            this.notification.error("操作信息", "value 不能为空!");
            return;
        }
        this.http.post("/addBusinessData", {
            "key": this.BusinessDataKey,
            "content": this.BusinessDataValue,
            "tableName": this.BusinessDatakey
        })
            .subscribe(function (res) {
            if (res.msg == "ok") {
                _this.handleCancelData();
                _this.notification.success("操作信息", "操作成功!");
            }
            else {
                _this.notification.error("操作信息", res.data);
            }
            _this.innerTableExpandChange(true, _this.BusinessDatakey, _this.innerTableData);
        });
    };
    DashboardV1Component.prototype.addData = function (tpl, key, innerTable) {
        var _this = this;
        this.disabledEditData = false;
        this.BusinessDataValue = "";
        this.BusinessDataKey = "";
        this.modalSrv.create({
            nzTitle: '添加',
            nzContent: tpl,
            nzOnOk: function () {
                _this.http.post("/addBusinessData", {
                    "key": _this.BusinessDataKey,
                    "content": _this.BusinessDataValue,
                    "tableName": key
                })
                    .subscribe(function (res) {
                    _this.innerTableExpandChange(true, key, innerTable);
                    _this.notification.success("操作信息", "添加成功!");
                });
            },
        });
    };
    DashboardV1Component.prototype.editData = function (tpl, data, key, innerTable) {
        var _this = this;
        this.BusinessDataValue = data.content;
        this.BusinessDataKey = data.key;
        this.disabledEditData = true;
        this.modalSrv.create({
            nzTitle: '编辑',
            nzContent: tpl,
            nzOnOk: function () {
                _this.http.post("/addBusinessData", {
                    "key": _this.BusinessDataKey,
                    "content": _this.BusinessDataValue,
                    "tableName": key
                })
                    .subscribe(function (res) {
                    _this.innerTableExpandChange(true, key, innerTable);
                    _this.notification.success("操作信息", "修改成功!");
                });
            },
        });
    };
    DashboardV1Component.prototype.DeleteData = function (data, key, innerTable) {
        var _this = this;
        this.BusinessDataValue = data.content;
        this.BusinessDataKey = data.key;
        this.modalSrv.confirm({
            nzTitle: '你确定要删除（' + data.key + '）吗?',
            nzContent: "" + data.content + "",
            nzOkText: '确认',
            nzOkType: 'danger',
            nzOnOk: function () {
                _this.http.post("/delBusinessData", {
                    "key": _this.BusinessDataKey,
                    "content": "",
                    "tableName": key
                })
                    .subscribe(function (res) {
                    _this.innerTableExpandChange(true, key, innerTable);
                    _this.notification.success("操作信息!", "删除成功!");
                });
            },
            nzCancelText: '取消',
            nzOnCancel: function () {
            }
        });
    };
    DashboardV1Component.prototype.innerTableIndexChange = function (innerTable, key) {
        var _this = this;
        this.http.get("/getBusinessData", {
            "key": key,
            "pageIndex": innerTable.nzPageIndex
        })
            .subscribe(function (res) {
            for (var index = 0; index < _this.listOfParentData.length; index++) {
                if (_this.listOfParentData[index].key == key) {
                    innerTable.nzTotal = res.data.total;
                    _this.listOfParentData[index].childList = res.data.list;
                }
            }
        });
    };
    DashboardV1Component.prototype.innerTableExpandChange = function (expand, key, innerTable) {
        var _this = this;
        if (expand == false)
            return;
        this.http.get("/getBusinessData", {
            "key": key,
            "pageIndex": 1
        })
            .subscribe(function (res) {
            for (var index = 0; index < _this.listOfParentData.length; index++) {
                if (_this.listOfParentData[index].key == key) {
                    innerTable.nzTotal = res.data.total;
                    innerTable.nzPageIndex = 1;
                    _this.listOfParentData[index].childList = res.data.list;
                }
            }
        });
    };
    DashboardV1Component.prototype.getList = function (pageIndex) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 1; }
        this.http.get("/getBusiness", {
            "pageIndex": pageIndex
        })
            .subscribe(function (res) {
            var data = res.data.list;
            _this.PageTotal = res.data.total;
            _this.listOfParentData = data;
        });
    };
    DashboardV1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-v1',
            template: __webpack_require__(/*! ./v1.component.html */ "./src/app/routes/dashboard/v1/v1.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
    ], DashboardV1Component);
    return DashboardV1Component;
}());



/***/ }),

/***/ "./src/app/routes/passport/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\n\n\n    <nz-tab [nzTitle]=\"'app.login.tab-login-credentials' | translate\">\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\n            <input nz-input formControlName=\"userName\" placeholder=\"username: admin\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"userName.dirty && userName.errors\">\n            {{ 'Please enter mobile number!' | translate }}\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      \n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-lock\">\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"password: admin\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"password.dirty && password.errors\">\n            {{ 'Please enter password!' | translate }}\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-tab>\n\n\n    \n  </nz-tabset>\n  <nz-form-item>\n   \n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"http.loading\" nzBlock>\n      {{ 'app.login.login' | translate }}\n    </button>\n  </nz-form-item>\n</form>\n\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.less":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  border-bottom: 0;\n  margin-bottom: 24px;\n  text-align: center;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vRDovbmctYWxhaW4vbXktcHJvamVjdC9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FESUY7QUNQQTtFQU1NLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRElOO0FDWkE7RUFXTSxlQUFBO0VBQ0EsaUJBQUE7QURJTjtBQ2hCQTtFQWVNLGtCQUFBO0FESU47QUNuQkE7RUFrQk0sZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRElOO0FDSE07RUFDRSxjQUFBO0FES1I7QUM5QkE7RUE2Qk0sZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FESU47QUNuQ0E7RUFpQ1Esc0JBQUE7QURLUjtBQ3RDQTtFQW9DUSxZQUFBO0FES1IiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicyAuYW50LXRhYnMtYmFyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIG56LXRvb2x0aXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5vdGhlciAucmVnaXN0ZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgLmFudC10YWJzIC5hbnQtdGFicy1iYXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzRweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAub3RoZXIge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIG56LXRvb2x0aXAge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");










var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(fb, modalSrv, router, settingsService, socialService, reuseTabService, tokenService, startupSrv, http, msg) {
        this.router = router;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remember: [true],
        });
        modalSrv.closeAll();
    }
    Object.defineProperty(UserLoginComponent.prototype, "userName", {
        // #region fields
        get: function () {
            return this.form.controls.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    UserLoginComponent.prototype.switch = function (ret) {
        this.type = ret.index;
    };
    UserLoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid)
                return;
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid)
                return;
        }
        // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
        // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
        //?_allow_anonymous=true
        this.http
            .post('/login', {
            type: this.type,
            userName: this.userName.value,
            password: this.password.value,
        })
            .subscribe(function (res) {
            if (res.msg !== 'ok') {
                _this.error = res.msg;
                return;
            }
            // 清空路由复用信息
            _this.reuseTabService.clear();
            // 设置用户Token信息
            //this.tokenService.set(res.user);
            _this.tokenService.set(res.data);
            // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
            _this.startupSrv.load().then(function () {
                var url = _this.tokenService.referrer.url || '/';
                if (url.includes('/passport'))
                    url = '/';
                url = "/dashboard/v1";
                _this.router.navigateByUrl(url);
            });
        });
    };
    // #region social
    UserLoginComponent.prototype.open = function (type, openType) {
        var _this = this;
        if (openType === void 0) { openType = 'href'; }
        var url = "";
        var callback = "";
        if (_env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) {
            callback = 'https://ng-alain.github.io/ng-alain/#/callback/' + type;
        }
        else {
            callback = 'http://localhost:4200/#/callback/' + type;
        }
        switch (type) {
            case 'auth0':
                url = "//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'github':
                url = "//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'weibo':
                url = "https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
        }
        if (openType === 'window') {
            this.socialService
                .login(url, '/', {
                type: 'window',
            })
                .subscribe(function (res) {
                if (res) {
                    _this.settingsService.setUser(res);
                    _this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href',
            });
        }
    };
    // #endregion
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'passport-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/routes/passport/login/login.component.html"),
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_6__["SocialService"]],
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/routes/passport/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_6__["DA_SERVICE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_6__["SocialService"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"], Object, _core__WEBPACK_IMPORTED_MODULE_9__["StartupService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<result type=\"success\" [title]=\"title\" description=\"{{ 'app.register-result.activation-email' | translate }}\">\n  <ng-template #title>\n    <div class=\"title\" style=\"font-size: 20px;\">\n      {{ 'app.register-result.msg' | translate:params }}\n    </div>\n  </ng-template>\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">\n    {{ 'app.register-result.view-mailbox' | translate }}\n  </button>\n  <button routerLink=\"/\" nz-button nzSize=\"large\">\n    {{ 'app.register-result.back-home' | translate }}\n  </button>\n</result>\n"

/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserRegisterResultComponent = /** @class */ (function () {
    function UserRegisterResultComponent(route, msg) {
        this.msg = msg;
        this.params = { email: '' };
        this.email = '';
        this.params.email = this.email = route.snapshot.queryParams.email || 'ng-alain@example.com';
    }
    UserRegisterResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-register-result',
            template: __webpack_require__(/*! ./register-result.component.html */ "./src/app/routes/passport/register-result/register-result.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], UserRegisterResultComponent);
    return UserRegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ 'app.register.register' | translate }}</h3>\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-user\">\n        <input nz-input formControlName=\"mail\" placeholder=\"Email\">\n      </nz-input-group>\n      <ng-container *ngIf=\"mail.dirty && mail.errors\">\n        <nz-form-explain *ngIf=\"mail.errors?.required\">{{ 'validation.email.required' | translate }}</nz-form-explain>\n        <nz-form-explain *ngIf=\"mail.errors?.email\">{{ 'validation.email.wrong-format' | translate }}</nz-form-explain>\n      </ng-container>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-popover [nzPlacement]=\"'right'\" [nzTrigger]=\"'focus'\" [(nzVisible)]=\"visible\" nzOverlayClassName=\"register-password-cdk\"\n        [nzOverlayStyle]=\"{'width.px': 240}\">\n        <nz-input-group nzSize=\"large\" nz-popover nzAddonBeforeIcon=\"anticon anticon-lock\">\n          <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"Password\">\n        </nz-input-group>\n        <nz-form-explain *ngIf=\"password.dirty && password.errors\">{{ 'validation.password.required' | translate }}</nz-form-explain>\n        <ng-template #nzTemplate>\n          <div style=\"padding: 4px 0;\">\n            <ng-container [ngSwitch]=\"status\">\n              <div *ngSwitchCase=\"'ok'\" class=\"success\">{{ 'validation.password.strength.strong' | translate }}</div>\n              <div *ngSwitchCase=\"'pass'\" class=\"warning\">{{ 'validation.password.strength.medium' | translate }}</div>\n              <div *ngSwitchDefault class=\"error\">{{ 'validation.password.strength.short' | translate }}</div>\n            </ng-container>\n            <div class=\"progress-{{status}}\">\n              <nz-progress [nzPercent]=\"progress\" [nzStatus]=\"passwordProgressMap[status]\" [nzStrokeWidth]=\"6\"\n                [nzShowInfo]=\"false\"></nz-progress>\n            </div>\n            <p class=\"mt-sm\">{{ 'validation.password.strength.msg' | translate }}</p>\n          </div>\n        </ng-template>\n      </nz-popover>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-lock\">\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"Confirm Password\">\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"confirm.dirty && confirm.errors\">\n        <ng-container *ngIf=\"confirm.errors.required\">\n          {{ 'validation.confirm-password.required' | translate }}\n        </ng-container>\n        <ng-container *ngIf=\"confirm.errors.equar\">\n          {{ 'validation.password.twice' | translate }}\n        </ng-container>\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\n        <ng-template #addOnBeforeTemplate>\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\n          </nz-select>\n        </ng-template>\n        <input formControlName=\"mobile\" nz-input placeholder=\"Phone number\">\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\n        <ng-container *ngIf=\"mobile.errors.required\">\n          {{ 'validation.phone-number.required' | translate }}\n        </ng-container>\n        <ng-container *ngIf=\"mobile.errors.pattern\">\n          {{ 'validation.phone-number.wrong-format' | translate }}\n        </ng-container>\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-row [nzGutter]=\"8\">\n        <nz-col [nzSpan]=\"16\">\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-mail\">\n            <input nz-input formControlName=\"captcha\" placeholder=\"Captcha\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">\n            {{ 'validation.verification-code.required' | translate }}\n          </nz-form-explain>\n        </nz-col>\n        <nz-col [nzSpan]=\"8\">\n          <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" nzBlock [nzLoading]=\"http.loading\">\n            {{ count ? count + 's' : 'app.register.get-verification-code' | translate }}</button>\n        </nz-col>\n      </nz-row>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"http.loading\" class=\"submit\">\n      {{ 'app.register.register' | translate }}\n    </button>\n    <a class=\"login\" routerLink=\"/passport/login\">{{ 'app.register.sign-in' | translate }}</a>\n  </nz-form-item>\n</form>\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvcmVnaXN0ZXIvRDovbmctYWxhaW4vbXktcHJvamVjdC9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvcGFzc3BvcnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FESUY7QUNQQTtFQU1NLGVBQUE7RUFDQSxtQkFBQTtBRElOO0FDWEE7RUFVTSxVQUFBO0FESU47QUNkQTtFQWFNLFlBQUE7RUFDQSxpQkFBQTtBRElOO0FDQUE7OztFQUtNLHNCQUFBO0FEQU47QUNMQTtFQVFNLGNBQUE7QURBTjtBQ1JBO0VBV00sY0FBQTtBREFOO0FDWEE7RUFjTSxjQUFBO0FEQU47QUNkQTtFQWtCUSx5QkFBQTtBRERSIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3VibWl0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAubG9naW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLnN1Y2Nlc3MsXG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAud2FybmluZyxcbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5lcnJvciB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAuc3VjY2VzcyB7XG4gIGNvbG9yOiAjNTJjNDFhO1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLndhcm5pbmcge1xuICBjb2xvcjogI2ZhYWQxNDtcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5lcnJvciB7XG4gIGNvbG9yOiAjZjUyMjJkO1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLnByb2dyZXNzLXBhc3MgPiAucHJvZ3Jlc3MgLmFudC1wcm9ncmVzcy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWFkMTQ7XG59XG4iLCJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL3N0eWxlcy9kZWZhdWx0Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLnN1Ym1pdCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAubG9naW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6IEBidG4taGVpZ2h0LWxnO1xuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayB7XG4gICAgLnN1Y2Nlc3MsXG4gICAgLndhcm5pbmcsXG4gICAgLmVycm9yIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgfVxuICAgIC5zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbiAgICB9XG4gICAgLndhcm5pbmcge1xuICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgIH1cbiAgICAuZXJyb3Ige1xuICAgICAgY29sb3I6IEBlcnJvci1jb2xvcjtcbiAgICB9XG4gICAgLnByb2dyZXNzLXBhc3MgPiAucHJvZ3Jlc3Mge1xuICAgICAgLmFudC1wcm9ncmVzcy1iZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");






var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(fb, router, http, msg) {
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // #endregion
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    UserRegisterComponent_1.checkPassword.bind(this),
                ],
            ],
            confirm: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    UserRegisterComponent_1.passwordEquar,
                ],
            ],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    UserRegisterComponent_1 = UserRegisterComponent;
    UserRegisterComponent.checkPassword = function (control) {
        if (!control)
            return null;
        var self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9) {
            self.status = 'ok';
        }
        else if (control.value && control.value.length > 5) {
            self.status = 'pass';
        }
        else {
            self.status = 'pool';
        }
        if (self.visible) {
            self.progress =
                control.value.length * 10 > 100 ? 100 : control.value.length * 10;
        }
    };
    UserRegisterComponent.passwordEquar = function (control) {
        if (!control || !control.parent) {
            return null;
        }
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    };
    Object.defineProperty(UserRegisterComponent.prototype, "mail", {
        // #region fields
        get: function () {
            return this.form.controls.mail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "confirm", {
        get: function () {
            return this.form.controls.confirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // #endregion
    UserRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid) {
            return;
        }
        var data = this.form.value;
        this.http.post('/register', data).subscribe(function () {
            _this.router.navigateByUrl('/passport/register-result', {
                queryParams: { email: data.mail },
            });
        });
    };
    UserRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    var UserRegisterComponent_1;
    UserRegisterComponent = UserRegisterComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/routes/passport/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/routes/passport/register/register.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
/* harmony import */ var _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/v1/v1.component */ "./src/app/routes/dashboard/v1/v1.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");





// layout

// import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';

// dashboard pages

// import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
// import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
// import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
// import { v2component } from './dashboard/v2test/v2.component';
// passport pages

// import { UserRegisterComponent } from './passport/register/register.component';
// import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
// import { CallbackComponent } from './callback/callback.component';
// import { UserLockComponent } from './passport/lock/lock.component';
var routes = [
    {
        path: '',
        component: _layout_default_default_component__WEBPACK_IMPORTED_MODULE_5__["LayoutDefaultComponent"],
        canActivate: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SimpleGuard"]],
        canActivateChild: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SimpleGuard"]],
        children: [
            { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard/v1', component: _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_7__["DashboardV1Component"] },
            // { path: 'dashboard/v2', component: v2component},
            // { path: 'dashboard/v3', component: v2component},
            // { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
            // { path: 'dashboard/monitor', component: DashboardMonitorComponent },
            // { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
            // {
            //   path: 'widgets',
            //   loadChildren: './widgets/widgets.module#WidgetsModule',
            // },
            // { path: 'style', loadChildren: './style/style.module#StyleModule' },
            // { path: 'delon', loadChildren: './delon/delon.module#DelonModule' },
            { path: 'clusters', loadChildren: './extras/extras.module#ExtrasModule' },
        ],
    },
    // 全屏布局
    // {
    //   path: 'data-v',
    //   component: LayoutFullScreenComponent,
    //   children: [
    //     { path: '', loadChildren: './data-v/data-v.module#DataVModule' },
    //   ],
    // },
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPassportComponent"],
        children: [
            {
                path: 'login',
                component: _passport_login_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
                data: { title: '登录', titleI18n: 'app.login.login' },
            },
        ],
    },
    // 单页不包裹Layout
    // { path: 'callback/:type', component: CallbackComponent },
    { path: '**', redirectTo: 'exception/404' },
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].useHash,
                    // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
                    // Pls refer to https://ng-alain.com/components/reuse-tab
                    scrollPositionRestoration: 'top',
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/v1/v1.component */ "./src/app/routes/dashboard/v1/v1.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");




// dashboard pages

// import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
// import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
// import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
// import { v2component } from './dashboard/v2test/v2.component';
// passport pages



// single pages
// import { UserLockComponent } from './passport/lock/lock.component';
// import { CallbackComponent } from './callback/callback.component';
var COMPONENTS = [
    _dashboard_v1_v1_component__WEBPACK_IMPORTED_MODULE_4__["DashboardV1Component"],
    // v2component,
    // DashboardAnalysisComponent,
    // DashboardMonitorComponent,
    // DashboardWorkplaceComponent,
    // passport pages
    _passport_login_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
    _passport_register_register_component__WEBPACK_IMPORTED_MODULE_6__["UserRegisterComponent"],
    _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterResultComponent"],
];
var COMPONENTS_NOROUNT = [];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RouteRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_yuan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/yuan */ "./src/app/shared/utils/yuan.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _utils_yuan__WEBPACK_IMPORTED_MODULE_0__["yuan"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });

// Components
// Utils

// Module



/***/ }),

/***/ "./src/app/shared/json-schema/json-schema.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");




// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
var SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
    JsonSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_3__["DelonFormModule"].forRoot()],
            exports: SCHEMA_THIRDS_COMPONENTS.slice(),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"]])
    ], JsonSchemaModule);
    return JsonSchemaModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart */ "./node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/fesm5/form.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ueditor */ "./node_modules/ngx-ueditor/fesm5/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-tinymce */ "./node_modules/ngx-tinymce/fesm5/ngx-tinymce.js");





// delon





// i18n

// #region third libs




var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
    ngx_countdown__WEBPACK_IMPORTED_MODULE_12__["CountdownModule"],
    ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__["UEditorModule"],
    ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__["NgxTinymceModule"],
];
// #endregion
// #region your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
// #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"].forChild(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
                _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"],
                _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
                _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"],
                // i18n
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/yuan.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/yuan.ts ***!
  \**************************************/
/*! exports provided: yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return yuan; });
/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
// tslint:disable-next-line:no-any
function yuan(value, digits) {
    if (digits === void 0) { digits = 2; }
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return "&yen " + value;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    SERVER_URL: "",
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], null);
        if (modalService)
            modalService.closeAll();
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(function (res) {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/style-icons-auto.ts":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

var ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"]
];


/***/ }),

/***/ "./src/style-icons.ts":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
// Custom icon static resources

var ICONS = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"],
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ng-alain\my-project\ng-alain-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map