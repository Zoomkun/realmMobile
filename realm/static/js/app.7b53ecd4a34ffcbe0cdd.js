webpackJsonp([1],{"62/Y":function(e,t){},"6lJq":function(e,t){},"7WE+":function(e,t){},"84b1":function(e,t){},"8bIc":function(e,t){},"9VyP":function(e,t,a){e.exports=a.p+"static/img/photo5.c2315c1.png"},EJb4:function(e,t){},IFbE:function(e,t){},Mfho:function(e,t,a){e.exports=a.p+"static/img/photo2.dfcc94c.png"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(e){a("EJb4")},null,null).exports,r=a("/ocq"),o=new n.a,c={name:"Header",data:()=>({nav:["首页","区世界","团队介绍","商务合作"],page:0,sideBarIn:""}),methods:{getPageIndex(e){this.page=e,o.$emit("toChangePage",e),o.$emit("overFlowHidden",!1),this.sideBarIn=!1},fnSideBarIn(){this.sideBarIn=!0,o.$emit("overFlowHidden",!0)},fnSideBarOut(){this.sideBarIn=!1,o.$emit("overFlowHidden",!1)}},computed:{classObject:function(){return this.sideBarIn?"sideBarIn":!1===this.sideBarIn?"sideBarOut":""}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav",class:e.classObject},[a("div",{staticClass:"btn",on:{click:e.fnSideBarIn}}),e._v(" "),a("div",{staticClass:"shadow",on:{click:e.fnSideBarOut}}),e._v(" "),a("div",{staticClass:"menuBox"},[a("div",{staticClass:"close",on:{click:e.fnSideBarOut}}),e._v(" "),e._l(e.nav,function(t,n){return a("p",{class:{active:e.page===n},on:{click:function(t){e.getPageIndex(n)}}},[e._v(e._s(t))])})],2)])},staticRenderFns:[]};var d=a("VU/8")(c,l,!1,function(e){a("62/Y")},"data-v-cda49fa2",null).exports,p=a("DNVT"),m=(a("mgS3"),{name:"Banner",data:()=>({page:{pageNow:0}}),mounted(){var e=this;e.swiperRoll(),o.$on("toChangePage",function(t){e.$forceUpdate(),e.$set(e.page,"pageNow",t)})},methods:{swiperRoll(){var e=new p.a(".swiper-container",{effect:"fade",autoplay:!0,loop:!0,pagination:{el:".banner-bullets",bulletClass:"banner-bullet",bulletActiveClass:"banner-bullet-active"},on:{touchMove:function(){o.$emit("toChangeSwiper",e.realIndex)},autoplay:function(){o.$emit("toChangeSwiper",e.realIndex)}}})}}}),u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"banner"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.page.pageNow,expression:"page.pageNow === 0"}],staticClass:"banner-bg"},[e._m(0)]),e._v(" "),0!==e.page.pageNow?a("div",{staticClass:"banner-small"},[1===e.page.pageNow?a("div",{staticClass:"idea"}):e._e(),e._v(" "),2===e.page.pageNow?a("div",{staticClass:"team"}):e._e(),e._v(" "),3===e.page.pageNow?a("div",{staticClass:"business"}):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"triangle"})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner-box"},[t("div",{staticClass:"swiper-container banner-container"},[t("ul",{staticClass:"swiper-wrapper"},[t("li",{staticClass:"swiper-slide"},[t("a",{attrs:{href:"http://nxh.bcrealm.com",target:"_blank"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:a("bvHn"),alt:""}})])]),this._v(" "),t("li",{staticClass:"swiper-slide"},[t("a",{attrs:{href:"http://bbm.bcrealm.com",target:"_blank"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:a("YdqA"),alt:""}})])])]),this._v(" "),t("span",{staticClass:"banner-bullets"})])])}]};var v=a("VU/8")(m,u,!1,function(e){a("84b1"),a("6lJq")},"data-v-0a208f2b",null).exports,g={name:"Content-index",data:()=>({swiper:{swiperIndex:0},gameData:[{image:a("syVd"),name:"币家摇钱树",info:'<span style="font-weight: bold;">币家摇钱树</span>于2018年7月4日上线。<br/>在该游戏中，玩家需要通过与好友进行互动，学习了解最新的行业资讯等方式增加自己的种植能力，加快树木的成长。游戏中的排行榜功能，记录了每个用户对植树的贡献。该游戏在上线的短短十几天时间内，获得了数十万玩家的喜爱，形成了自己的游戏文化。'},{image:a("syVd"),name:"宁夏红传奇",info:'<span style="font-weight: bold;">宁夏红传奇</span>是一部基于宁夏红枸杞酒的种酿造玩法的小游戏<br/>在游戏里，用户扮演的是酒庄庄主的身份，可以通过在庄园内种植并收集枸杞，每4斤枸杞才能酿造出一瓶宁夏红枸杞酒。酿造完成后即可获得相应的币奖励。<br/>在游戏中，您还可以添加好友与好友进行互动，分享酿酒心得，并了解当前最新的宁夏红产品资讯以及区块链知识。'}]}),mounted(){var e=this;o.$on("toChangeSwiper",function(t){e.$forceUpdate(),e.$set(e.swiper,"swiperIndex",t)})},methods:{}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-index"},[a("dl",{staticClass:"gameBox clear"},[a("dd",[a("div",{staticClass:"gameImage",style:{backgroundImage:"url("+e.gameData[e.swiper.swiperIndex].image+")"}}),e._v(" "),a("p",[e._v(e._s(e.gameData[e.swiper.swiperIndex].name))])]),e._v(" "),a("dt",{domProps:{innerHTML:e._s(e.gameData[e.swiper.swiperIndex].info)}},[e._v("\n            "+e._s(e.gameData[e.swiper.swiperIndex].info)+"\n        ")])])])},staticRenderFns:[]};var _=a("VU/8")(g,f,!1,function(e){a("7WE+")},"data-v-3173db11",null).exports,b={name:"Content-team",data:()=>({team:[{name:"岳师聿",image:a("gxLD"),position:"商业模式设计",info:"商业模式设计师、投融资顾问、天使投资人<br/>创建原本企业策划，曾参与香港中远集团、农业银行等百余家企业互联网服务平台规划<br/>赛百味（中国）、梧桐智慧基金等项目合伙人<br/>钜丰黄金、摩天之星投资人<br/>区世界项目主发起人及商业模式负责人"},{name:"贾凌云",image:a("Mfho"),position:"游戏开发负责人",info:"北京航空航天大学软件工程硕士，<br/>10年游戏研发经历.<br/>曾担任主程序项目经理、游戏制作人<br/>2010《梦幻修仙》中国首款突破3000w月流水产品<br/>2014《战龙三国》月流水5千万，腾讯游戏同类排行第一"},{name:"闫嘉峰",image:a("YrIy"),position:"运营负责人",info:"十四年市场营销、管理培训经验<br/>两年互联网+平台市场运营经验<br/>广州寻蜜鸟科技有限公司负责全国市场运营<br/>创建并经营数字资产交易所，区块链项目发行及市值管理<br/>链圈科技创始人、参与区块链社区平台创建<br/>数金集团运营总裁，负责DGS发行、市值管理"},{name:"周昆",position:"平台搭建负责人",image:a("9VyP"),info:"西北工业大学软件工程硕士，<br/>曾服务BEA，QUEST，SEGUE等美国知名软件企业，拥有20年大型应用软件平台研发，搭建和运维管理经验。领导过逾200人以上的项目技术研发团队。项目涉及邮政，银行，国家电力，机场等大型企业核心应用系统。<br/>时刻追踪最新区块链技术发展，熟悉区块链底层软件技术框架，对搭建大型区块链分布式应用有一定造诣。"},{name:"申凌&emsp;博士",image:a("Sfy7"),position:"项目总架构设计",info:"中科院声学所硕士，新加坡国立大学计算机博士<br/>区块链+天使投资人，专注股权投资和区块链思想研究<br/>圆富全球区块链研究院成员<br/>参与中科院八五重大项目。<br/>曾任北京大学深圳研究生导师"}]}),methods:{}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-team clear"},e._l(e.team,function(t,n){return a("dl",{staticClass:"team-left clear"},[a("dd",[a("img",{attrs:{src:t.image,alt:""}})]),e._v(" "),a("dt",[a("h4",{domProps:{innerHTML:e._s(t.name)}},[e._v(e._s(t.name))]),e._v(" "),a("p",[e._v(e._s(t.position))]),e._v(" "),a("div",{staticClass:"team-info",domProps:{innerHTML:e._s(t.info)}},[e._v(e._s(t.info))])])])}))},staticRenderFns:[]};var C=a("VU/8")(b,h,!1,function(e){a("8bIc")},"data-v-3714bafa",null).exports,w={name:"Content-idea",data:()=>({image:a("y5Ku"),companyIntroduction:[{title:"区世界介绍",content:"&emsp;&emsp;深圳市胜凯达科技有限公司，缘起一群有梦想的年轻人。我们因为共同的理想和目标而汇聚在一起，利用这区块链这项世界最前沿的技术去设计和构建我们产品--区世界。<br/>&emsp;&emsp;在这个世界中的任何人都能够自由公平地创造受到保护价值”这是我们的核心价值观。区世界的设计过程中，我们毁掉了我们自己的世界观，价值观和人生观，重新建立了新的宇宙观，辩证观和平衡观。突破了自我的意识，去掉了中心与权威，将价值的创造权，话语权，决定权，交给到每一个人手上。我们可以遇见在未来的这个世界中，会有各行各业的人在各种各样世界中创造各种各样的价值和财富。小国寡民的景象离我们并不遥远。<br/>&emsp;&emsp;团队来自各行各业的精英，有美丽的天使，有好玩的游戏专家，有雄辩的商务，有Geek的技术怪咖。他们八仙过海各显神通默默地为这个人类共同的美好愿景贡献着自己的智慧和力量。"},{title:"核心理念",content:"&emsp;&emsp;每个人都能够进行自由公平地创造收到保护的价值，并能够自由流通。"},{title:"产品特点",content:"&emsp;&emsp;兼顾效率与公平帮助组织快速高效地形成共识自由，开放。去中心，自治。不可篡改，价值保护"}]}),methods:{}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-idea clear"},[a("div",{staticClass:"idea-img",style:{backgroundImage:"url("+e.image+")"}}),e._v(" "),a("div",{staticClass:"idea-content clear"},e._l(e.companyIntroduction,function(t,n){return a("div",{staticClass:"clear"},[a("div",{staticClass:"title-box"},[a("span",[e._v(e._s(t.title))])]),e._v(" "),a("p",{domProps:{innerHTML:e._s(t.content)}},[e._v(e._s(t.content))])])}))])},staticRenderFns:[]};var $=a("VU/8")(w,x,!1,function(e){a("IFbE")},"data-v-6cf4994e",null).exports,I={name:"Content-business",data:()=>({msg:{userName:"",email:"",title:"",content:""}}),methods:{sedMsg(){this.$ajax.post("url",this.msg,function(e){1===e.code&&alert("发送成功")})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-business clear"},[a("h2",{staticClass:"title"},[e._v("商业合作联系方式")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("h2",{staticClass:"title"},[e._v("邮件联系")]),e._v(" "),a("p",{staticClass:"prompt"},[e._v("如果您有任何问题，请不要犹豫，给我们发送邮件。")]),e._v(" "),a("div",{staticClass:"postMsg clear"},[a("p",{staticClass:"input-text clear"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.msg.userName,expression:"msg.userName"}],attrs:{type:"text",placeholder:"您的名字"},domProps:{value:e.msg.userName},on:{input:function(t){t.target.composing||e.$set(e.msg,"userName",t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.msg.email,expression:"msg.email"}],attrs:{type:"text",placeholder:"您的邮箱"},domProps:{value:e.msg.email},on:{input:function(t){t.target.composing||e.$set(e.msg,"email",t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.msg.title,expression:"msg.title"}],attrs:{type:"text",placeholder:"标题"},domProps:{value:e.msg.title},on:{input:function(t){t.target.composing||e.$set(e.msg,"title",t.target.value)}}})]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.msg.content,expression:"msg.content"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"在此输入您的内容"},domProps:{value:e.msg.content},on:{input:function(t){t.target.composing||e.$set(e.msg,"content",t.target.value)}}}),e._v(" "),a("span",{staticClass:"btn",on:{click:e.sedMsg}},[e._v("发送")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"prompt"},[this._v("如果您需要任何帮助，请与我们联系或发送电子邮件给我们。"),t("br"),this._v(" 我们会尽快答复您")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"companyInfo clear"},[a("dl",{staticClass:"phoneBox"},[a("dd"),e._v(" "),a("dt",[a("p",[e._v("联系人：曹先生")]),e._v(" "),a("p",[e._v("手机：13888888888"),a("span",[e._v("座机：0755-123456")])])])]),e._v(" "),a("dl",{staticClass:"addressBox"},[a("dd"),e._v(" "),a("dt",[a("p",[e._v("南山区天工道科技北路南玻电子大厦302室")])])]),e._v(" "),a("dl",{staticClass:"qrCodeBox"},[a("dd"),e._v(" "),a("dt",[a("p")])])])}]};var N=a("VU/8")(I,y,!1,function(e){a("qtKb")},"data-v-f42d06ec",null).exports,E={name:"Index",mounted(){var e=this;o.$on("toChangePage",function(t){e.$forceUpdate(),e.$set(e.page,"pageNow",t)}),o.$on("overFlowHidden",function(t){e.$forceUpdate(),e.$set(e.page,"overFlowHidden",t)})},data:()=>({page:{overFlowHidden:!1,pageNow:0}}),methods:{},components:{Sidebar:d,Cbanner:v,Cindex:_,Cteam:C,Cidea:$,Cbusiness:N}},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index",class:{hidden:e.page.overFlowHidden}},[a("Sidebar"),e._v(" "),a("Cbanner"),e._v(" "),a("section",{staticClass:"clear",staticStyle:{background:"#fff"}},[0===e.page.pageNow?a("Cindex"):e._e(),e._v(" "),1===e.page.pageNow?a("Cidea"):e._e(),e._v(" "),2===e.page.pageNow?a("Cteam"):e._e(),e._v(" "),3===e.page.pageNow?a("Cbusiness"):e._e()],1)],1)},staticRenderFns:[]};var S=a("VU/8")(E,B,!1,function(e){a("bYbE")},"data-v-1b50bdf9",null).exports;n.a.use(r.a);var F=new r.a({routes:[{path:"/",name:"Index",component:S}],mode:"history"}),P=a("mtWM"),H=a.n(P);n.a.config.productionTip=!1;var U=H.a.create({baseURL:"",timeout:1e4});U.interceptors.response.use(function(e){if(200===e.status)return e.data},function(e){return Promise.reject(e)}),U.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",n.a.prototype.$ajax=U,n.a.prototype.$axios=H.a,new n.a({el:"#app",router:F,components:{App:i},template:"<App/>"})},Sfy7:function(e,t,a){e.exports=a.p+"static/img/photo3.ed3a2fd.png"},YdqA:function(e,t,a){e.exports=a.p+"static/img/banner2.bff89e3.jpg"},YrIy:function(e,t,a){e.exports=a.p+"static/img/photo4.7d54feb.png"},bYbE:function(e,t){},bvHn:function(e,t,a){e.exports=a.p+"static/img/banner1.068a019.jpg"},gxLD:function(e,t,a){e.exports=a.p+"static/img/photo1.f7863dd.png"},mgS3:function(e,t){},qtKb:function(e,t){},syVd:function(e,t,a){e.exports=a.p+"static/img/gameImage.bf0dd53.png"},y5Ku:function(e,t,a){e.exports=a.p+"static/img/idea_photo.0234cb0.png"}},["NHnr"]);
//# sourceMappingURL=app.7b53ecd4a34ffcbe0cdd.js.map