<template>
  <div style="height:100%;">
    <!-- <div>
      <loading v-model="isLoading"></loading>
    </div> -->
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
    >
      <tabbar-item
        :selected='isShowFunction'
        @on-item-click="onItemClickFunctionTab"
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
        @on-item-click="onItemClickProcessTab"
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
        @on-item-click="onItemClickMyTab"
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
    return {};
  },
  methods: {
    onItemClickFunctionTab() {
      this.onItemClickFunction();
    },
    onItemClickProcessTab() {
      this.onItemClickProcess();
    },
    onItemClickMyTab() {
      this.onItemClickMy();
    },
    // ...mapActions([
    //   "onItemClickFunction",
    //   "onItemClickProcess",
    //   "onItemClickMy"
    // ]),
    ...mapMutations("home", [
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

  created() {},

  computed: {
    ...mapState("home", {
      isShowFunction: state => state.isShowFunction,
      isShowProcess: state => state.isShowProcess,
      isShowMy: state => state.isShowMy
    })
  },
  watch: {
    $route(to, from) {}
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