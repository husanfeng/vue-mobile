<template>
    <div id="app" style="height:100%;">
        <div>
            <loading v-model="isLoading"></loading>
        </div>
        <drawer width="250px;" :show.sync="drawerVisibility" :show-mode="showModeValue" :placement="showPlacementValue" :drawer-style="{'background-color':'#f2f2f2', width: '250px'}">
            <!-- drawer content -->
            <div slot="drawer">
                <flexbox @click="">
                    <flexbox-item>
                        <div class="flex-logo">
                            <img src="../static/hsf.jpg" />
                        </div>
                    </flexbox-item>
                </flexbox>
                <flexbox @click.native="feedbackClick">
                    <flexbox-item>
                        <div class="flex-function-img">
                            <img src="../static/u234.png" />
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-function-label">
                            意见反馈
                        </div>
                    </flexbox-item>
                </flexbox>

                <flexbox>
                    <flexbox-item>
                        <div class="flex-function-img">
                            <img src="../static/u236.png" />
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-function-label">
                            帮助中心
                        </div>
                    </flexbox-item>
                </flexbox>

                <flexbox>
                    <flexbox-item>
                        <div class="flex-function-img">
                            <img src="../static/u238.png" />
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-function-label">
                            设置
                        </div>
                    </flexbox-item>
                </flexbox>

                <flexbox>
                    <flexbox-item>
                        <div class="flex-function-img">
                            <img src="../static/u240.png" />
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-function-label">
                            注销登陆
                        </div>
                    </flexbox-item>
                </flexbox>

                <flexbox>
                    <flexbox-item>
                        <div class="flex-function-img">
                            <img src="../static/u242.png" />
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-function-label">
                            关于
                        </div>
                    </flexbox-item>
                </flexbox>
                <!-- <group title="" style="margin-top:20px;">
                    <cell title="Demo" link="/" value="" @click.native="drawerVisibility = false">
                    </cell> -->
                <!-- <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
                    </cell>
                    <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
                    </cell> -->
                <!-- </group> -->
                <!-- <group title="showMode">
                    <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
                </group>
                <group title="placement">
                    <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
                </group> -->
            </div>
            <!-- main content -->
            <view-box ref="viewBox" body-padding-bottom="55px">

                <div v-show="isShowFunction">
                    <transition>
                        <van-swipe :autoplay="3000">
                            <van-swipe-item v-for="(image, index) in images" :key="index">
                                <img :src="image" width="100%" style="overflow:hidden" />
                            </van-swipe-item>
                        </van-swipe>
                    </transition>
                    <transition>
                        <div class="next">
                            <van-icon name="arrow-left" class="setarrow" @click="drawerVisibility = !drawerVisibility" />
                        </div>
                    </transition>
                    <transition>
                        <van-notice-bar mode="closeable">
                            华润医药商业-财务报账系统将于2019年3月份正式上线...
                        </van-notice-bar>

                    </transition>
                    <transition>
                        <grid :cols="3">
                            <grid-item :label="item.title" v-for="item in functionList" @click.native="onItemClickImg">
                                <img slot="icon" :src="item.icon">
                            </grid-item>
                        </grid>
                    </transition>
                </div>
                <div v-show="isShowProcess" class="process-module" style="text-align:center">
                    <p style="text-align:center">
                        暂无流程查询
                    </p>
                </div>
                <div v-show="isShowMy" class="my-module">
                    <div class="my-module-border">
                        <div class="my-module-img">
                            <img src="../static/hsf.jpg" alt="">
                            <div class="my-module-text">
                                <p>husanfeng</p>
                                <p>男 26</p>
                                <p>财务报账项目组前端开发</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <group>
                            <cell primary="content" value-align="left" title="手机号:" value="   13301220456">
                            </cell>
                            <cell title="邮箱:" value-align="left" value="123@163.com">
                            </cell>
                            <cell title="登录名:" value-align="left" value="husanfeng">
                            </cell>
                            <cell title="登录密码:" value="123456" value-align="left">
                            </cell>
                        </group>
                    </div>
                </div>
                <div v-show="isShowRouterView">
                    <router-view></router-view>
                </div>
                <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom" v-show="isShowBar">
                    <tabbar-item selected @on-item-click="onItemClickFunction">
                        <img slot="icon" src="../static/function_normal.png">
                        <img slot="icon-active" src="../static/function_pressed.png">
                        <span slot="label">首页</span>
                    </tabbar-item>
                    <tabbar-item @on-item-click="onItemClickProcess">
                        <img slot="icon" src="../static/order_normal.png">
                        <img slot="icon-active" src="../static/order_pressed.png">
                        <span slot="label">流程</span>
                    </tabbar-item>
                    <tabbar-item @on-item-click="onItemClickMy">
                        <img slot="icon" src="../static/my_normal.png">
                        <img slot="icon-active" src="../static/my_pressed.png">
                        <span slot="label">我的</span>
                    </tabbar-item>
                </tabbar>

            </view-box>
        </drawer>
    </div>
</template>

<script>
import {
  Radio,
  Group,
  Cell,
  Badge,
  Drawer,
  Actionsheet,
  ButtonTab,
  ButtonTabItem,
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  Loading,
  Grid,
  GridItem,
  Flexbox,
  FlexboxItem
} from "vux";
import {
  CellGroup,
  Icon,
  NavBar,
  NoticeBar,
  Swipe,
  SwipeItem,
  Row,
  Col,
  List
} from "vant";
import { debug } from "util";
// import { mapState, mapActions } from "vuex";
export default {
  directives: {},
  components: {
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [List.name]: List,

    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet,
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      title: "财务报账系统",
      isShowBar: true,
      isShowFunction: true,
      isShowProcess: false,
      isShowMy: false,
      isShowRouterView: false,
      images: [
        "https://picsum.photos/400/180/?image=1",
        "https://picsum.photos/400/180/?image=2",
        "https://picsum.photos/400/180/?image=3",
        "https://picsum.photos/400/180/?image=4"
      ],
      functionList: [],
      isLoading: false,
      path: "",
      entryUrl: document.location.href,
      showMenu: false,
      menus: {
        "language.noop": '<span class="menu-title">角色切换</span>',
        "zh-CN": "管理员",
        en: "部门领导"
      },
      drawerVisibility: false,
      showMode: "push",
      showModeValue: "push",
      showPlacement: "left",
      showPlacementValue: "left"
    };
  },
  methods: {
    onItemClickImg() {
      this.$router.push({
        name: "feedback-page"
      });
    },
    feedbackClick() {
      this.drawerVisibility = false;
      this.$router.push({
        name: "feedback-page"
      });
    },
    onItemClickFunction() {
      this.isShowFunction = true;
      this.isShowProcess = false;
      this.isShowMy = false;
    },
    onItemClickProcess() {
      this.isShowFunction = false;
      this.isShowProcess = true;
      this.isShowMy = false;
    },
    onItemClickMy() {
      this.isShowFunction = false;
      this.isShowProcess = false;
      this.isShowMy = true;
    },
    onShowModeChange(val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false;
      setTimeout(one => {
        this.showModeValue = val;
      }, 400);
    },
    onPlacementChange(val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false;
      setTimeout(one => {
        this.showPlacementValue = val;
      }, 400);
    },
    onClickMore() {
      this.showMenu = true;
    },
    changeLocale(locale) {
      this.$i18n.set(locale);
      this.$locale.set(locale);
    }
    // ...mapActions(["updateDemoPosition"])
  },
  mounted() {
    // this.handler = () => {
    //   if (this.path === "/demo") {
    //     this.box = document.querySelector("#demo_list_box");
    //     this.updateDemoPosition(this.box.scrollTop);
    //   }
    // };
  },
  beforeDestroy() {
    this.box && this.box.removeEventListener("scroll", this.handler, false);
  },
  created() {
    this.functionList = [
      {
        title: "我的申请",
        icon: "../static/icon_ehr_tool_blood_pressure.png"
      },
      {
        title: "待审批",
        icon: "../static/icon_ehr_tool_body_temerature.png"
      },
      {
        title: "已审批",
        icon: "../static/icon_ehr_tool_diet.png"
      },
      {
        title: "已提交",
        icon: "../static/icon_ehr_tool_glucose.png"
      },
      {
        title: "草稿单",
        icon: "../static/icon_ehr_tool_heart_rate.png"
      },
      {
        title: "作废单",
        icon: "../static/icon_ehr_tool_sport.png"
      }
    ];
  },

  computed: {
    // ...mapState({
    //   route: state => state.route,
    //   path: state => state.route.path,
    //   deviceready: state => state.app.deviceready,
    //   demoTop: state => state.vux.demoScrollTop,
    //   isLoading: state => state.vux.isLoading,
    //   direction: state => state.vux.direction
    // }),

    // isShowBar() {
    //   if (this.entryUrl.indexOf("hide-tab-bar") > -1) {
    //     return false;
    //   }
    //   return true;
    // },
    isShowNav() {
      if (this.entryUrl.indexOf("hide-nav") > -1) {
        return false;
      }
      return true;
    },
    leftOptions() {
      return {
        // showBack: this.route.path !== "/"
      };
    },
    rightOptions() {
      return {
        showMore: true
      };
    },
    headerTransition() {},
    componentName() {
      //   if (this.route.path) {
      //     const parts = this.route.path.split("/");
      //     if (/component/.test(this.route.path) && parts[2]) return parts[2];
      //   }
    },
    isDemo() {
      //   return /component|demo/.test(this.route.path);
    },
    isTabbarDemo() {
      //   return /tabbar/.test(this.route.path);
    },
    // title() {
    //   //   if (this.route.path === "/") return "Home";
    //   //   if (this.route.path === "/project/donate") return "Donate";
    //   //   if (this.route.path === "/demo") return "Demo list";
    //   //   return this.componentName ? `Demo/${this.componentName}` : "Demo/~~";
    // },
    viewTransition() {}
  },
  watch: {
    $route(to, from) {
      if (to.path != "/") {
        this.isShowBar = false;
        this.isShowFunction = false;
        this.isShowProcess = false;
        this.isShowMy = false;
        this.isShowRouterView = true;
      } else {
        this.isShowBar = true;
        this.isShowFunction = true;
        this.isShowProcess = false;
        this.isShowMy = false;
        this.isShowRouterView = false;
      }
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
body {
  background-color: #f8f8f8;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.demo-icon-22 {
  font-family: "vux-demo";
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #f70968;
}
.vux-demo-tabbar
  .weui-tabbar_item.weui-bar__item_on
  .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #f70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: "vux-demo"; /* project id 70323 */
  src: url("//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot");
  src: url("//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_70323_wlronpvr565yiudi.woff") format("woff"),
    url("//at.alicdn.com/t/font_70323_wlronpvr565yiudi.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_70323_wlronpvr565yiudi.svg#iconfont")
      format("svg");
}
.demo-icon {
  font-family: "vux-demo";
  font-size: 20px;
  color: #04be02;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.menu-title {
  color: #888;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
.van-nav-bar {
  height: 46px;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
  line-height: 46px;
  background-color: #dbdb70;
}
.weui-grid {
  position: relative !important;
  float: left !important;
  padding: 5px 10px !important;
  width: 33.33333333% !important;
  box-sizing: border-box !important;
}
.weui-grid__icon {
  width: 60px !important;
  height: 60px !important;
  margin: 0 auto !important;
}
.weui-grid__icon img {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #1afa29 !important;
}

.flex-logo {
  text-align: center;
  margin-top: 30px;
  img {
    height: 120px;
    width: 120px;
    border-radius: 120px;
  }
}

.flex-function-img {
  text-align: right;
  margin-top: 30px;
  img {
    height: 40px;
    width: 40px;
  }
}
.flex-function-label {
  margin-top: 30px;
}
.position-bottom {
  position: fixed;
  top: 60px;
  //left: 1%;
}
@-webkit-keyframes myfirst {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
  60% {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}
@keyframes myfirst {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -moz-transform: translateX(30px);
    -ms-transform: translateX(30px);
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
  60% {
    -moz-transform: translateX(15px);
    -ms-transform: translateX(15px);
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
}
.next {
  // .position-bottom;
  .setarrow {
    // position:relative;
    .position-bottom;
    font-size: 40px !important;
    color: rgba(243, 244, 247, 0.8);
    opacity: 0.8;
    cursor: pointer;
    animation: myfirst 5s infinite;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
}
.van-swipe {
  overflow: hidden;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  line-height: 0px;
}
.process-module {
  height: 100%;
  background-color: #f2f2f2;
}
.my-module {
  height: 100%;
  background-color: #f2f2f2;
  .my-module-border {
    background-color: #fff;
    margin: 5px;
    height: 150px;
    border: 1px solid #948c8c;
    border-radius: 25px;
    .my-module-img {
      text-align: left;
      margin: 25px 0px 0px 5px;
      img {
        height: 100px;
        width: 100px;
        border: 1px solid #948c8c;
        border-radius: 100px;
      }
      .my-module-text {
        float: right;
        margin: 5px 50px 0px 0px;
      }
    }
  }
}
.weui-cells {
  /* margin-top: 1.17647059em; */
  background-color: #ffffff !important;
  /* line-height: 1.41176471; */
  font-size: 20px !important;
  overflow: hidden !important;
  position: relative !important;
}
.weui-cell {
  margin: 10px !important;
  padding: 10px 15px !important;
  position: relative !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  align-items: center !important;
}
</style>