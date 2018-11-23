<template>
    <div style="height:100%;">
        <transition>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image" width="100%" style="overflow:hidden" />
                </van-swipe-item>
            </van-swipe>
        </transition>
        <transition>
            <van-notice-bar mode="closeable">
                华润医药商业-财务报账系统将于2019年3月份正式上线...
            </van-notice-bar>
        </transition>
        <transition>
            <grid :cols="3">
                <grid-item :label="item.title" v-for="(item,index) in functionList" :key="index" @click.native="onItemClickImg">
                    <img slot="icon" height="60px" width="60px" :src="item.icon">
                </grid-item>
            </grid>
        </transition>
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
    FlexboxItem,
    XButton
  },
  data() {
    return {
      title: "财务报账系统",
      functionTitle: "TITLE",
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
  beforeDestroy() {},
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
  },
  watch: {
    $route(to, from) {
      if (to.path != "/") {
      } else {
      }
    }
  }
};
</script>
<style lang="less">
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
.van-swipe {
  overflow: hidden;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  line-height: 0px;
}
</style>