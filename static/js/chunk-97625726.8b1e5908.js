/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-1-9 05:07:40
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97625726"],{"5da8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"colorful-icon-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v(" 小清新图标在演示环境中使用的是cdn加速服务，开发时需存储到本地，使用方法可查看群文档，点击图标即可复制源码，点击图标即可复制源码 ")])],1),n("el-col",{attrs:{span:24}},[n("el-form",{attrs:{inline:!0,"label-width":"80px"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"图标名称"}},[n("el-input",{model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),n("el-form-item",{attrs:{"label-width":"0"}},[n("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:t.queryData}},[t._v(" 搜索 ")])],1)],1)],1),t._l(t.queryIcon,(function(e,a){return n("el-col",{key:a,attrs:{xs:6,sm:8,md:3,lg:2,xl:2}},[n("el-card",{staticStyle:{cursor:"pointer"},attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.handleCopyIcon(a,e)}}},[n("vab-remix-icon",{attrs:{"icon-class":"https://cdn.jsdelivr.net/gh/chuzhixin/zx-remixicon/src/icons/svg/"+e+".svg"},on:{click:function(t){t.stopPropagation()}}})],1),n("div",{staticClass:"icon-text"},[t._v(t._s(e))])],1)})),n("el-col",{attrs:{span:24}},[n("el-pagination",{attrs:{background:t.background,"current-page":t.queryForm.pageNo,"page-size":t.queryForm.pageSize,"page-sizes":[72,144,216,288],layout:t.layout,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2)],1)},r=[],o=(n("96cf"),n("1da1")),i=n("878e"),c=n("f71e"),s={name:"RemixIcon",data:function(){return{copyText:"",layout:"total, sizes, prev, pager, next, jumper",total:0,background:!0,height:0,selectRows:"",elementLoadingText:"正在加载...",queryIcon:[],queryForm:{pageNo:1,pageSize:72,title:""}}},created:function(){this.fetchData()},methods:{handleSizeChange:function(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.queryForm.pageNo=t,this.fetchData()},queryData:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["getIconList"])(t.queryForm);case 2:n=e.sent,a=n.data,r=n.totalCount,t.queryIcon=a,t.allIcon=a,t.total=r;case 8:case"end":return e.stop()}}),e)})))()},handleCopyIcon:function(t,e){var n='<vab-remix-icon icon-class="'.concat(this.queryIcon[t],'" />');this.copyText=n,Object(c["default"])(n,e)}}},u=s,l=(n("836f"),n("2877")),h=Object(l["a"])(u,a,r,!1,null,"16dab434",null);e["default"]=h.exports},"836f":function(t,e,n){"use strict";n("e9a5")},"878e":function(t,e,n){"use strict";n.r(e),n.d(e,"getIconList",(function(){return r}));var a=n("b775");function r(t){return Object(a["default"])({url:"/remixIcon/getList",method:"post",data:t})}},e9a5:function(t,e,n){}}]);