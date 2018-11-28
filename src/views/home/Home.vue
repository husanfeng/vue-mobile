<template>
  <div style="height:100%;">
    <div>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-if="isShowFunction">
      <Function></Function>
    </div>
    <div v-show="isShowProcess">
      <Process></Process>
    </div>
    <div v-show="isShowMy">
      <My></My>
    </div>
    <tabbar
      class="vux-demo-tabbar"
      icon-class="vux-center"
      slot="bottom"
      v-show="isShowBar"
    >
      <tabbar-item
        :selected='isShowFunction'
        @on-item-click="onItemClickFunction"
      >
        <img
          slot="icon"
          src="../../../static/function_normal.png"
        >
        <img
          slot="icon-active"
          src="../../../static/function_pressed.png"
        >
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item
        :selected='isShowProcess'
        @on-item-click="onItemClickProcess"
      >
        <img
          slot="icon"
          src="../../../static/order_normal.png"
        >
        <img
          slot="icon-active"
          src="../../../static/order_pressed.png"
        >
        <span slot="label">流程</span>
      </tabbar-item>
      <tabbar-item
        :selected='isShowMy'
        @on-item-click="onItemClickMy"
      >
        <img
          slot="icon"
          src="../../../static/my_normal.png"
        >
        <img
          slot="icon-active"
          src="../../../static/my_pressed.png"
        >
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
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
  XButton,
  Flexbox,
  FlexboxItem
} from "vux";

import Function from "./components/Function.vue";
import My from "./components/My.vue";
import Process from "./components/Process";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  directives: {},
  components: {
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
    FlexboxItem,
    XButton,
    Function,
    Process,
    My
  },
  data() {
    return {
      title: "财务报账系统",
      functionTitle: "TITLE",
      isShowBar: true,
      //   isShowFunction: true,
      //   isShowProcess: false,
      //   isShowMy: false,
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
    loginOut() {
      sessionStorage.setItem("userName", "");
      sessionStorage.setItem("userToken", ""); // 生产一段随机数
      this.$router.push({
        name: "login_page"
      });
    },
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
      this.onItemClickFunction();
    },
    onItemClickProcess() {
      this.onItemClickProcess();
    },
    onItemClickMy() {
      this.onItemClickMy();
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
    },
    // ...mapActions([
    //   "onItemClickFunction",
    //   "onItemClickProcess",
    //   "onItemClickMy"
    // ]),
    ...mapMutations([
      "onItemClickFunction",
      "onItemClickProcess",
      "onItemClickMy"
    ])
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
        icon: "./static/icon_ehr_tool_blood_pressure.png"
      },
      {
        title: "待审批",
        icon: "./static/icon_ehr_tool_body_temerature.png"
      },
      {
        title: "已审批",
        icon: "./static/icon_ehr_tool_diet.png"
      },
      {
        title: "已提交",
        icon: "./static/icon_ehr_tool_glucose.png"
      },
      {
        title: "草稿单",
        icon: "./static/icon_ehr_tool_heart_rate.png"
      },
      {
        title: "作废单",
        icon: "./static/icon_ehr_tool_sport.png"
      }
    ];
  },

  computed: {
    ...mapState({
      isShowFunction: state => state.home.isShowFunction,
      isShowProcess: state => state.home.isShowProcess,
      isShowMy: state => state.home.isShowMy
      //   route: state => state.route,
      //   path: state => state.route.path,
      //   deviceready: state => state.app.deviceready,
      //   demoTop: state => state.vux.demoScrollTop,
      //   isLoading: state => state.vux.isLoading,
      //   direction: state => state.vux.direction
    }),

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
        this.functionTitle = to.meta;
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
.router-view {
  width: 100%;
  top: 46px;
}
</style>