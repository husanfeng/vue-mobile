<template>
  <div style="height:100%;">

    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          :src="image"
          width="100%"
          style="overflow:hidden"
        >
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar mode="closeable">华润医药商业-财务报账系统将于2019年3月份正式上线...</van-notice-bar>

    <grid :cols="3">
      <grid-item
        :label="item.title"
        v-for="(item,index) in functionList"
        :key="index"
        @click.native="onItemClickImg"
      >
        <img
          slot="icon"
          height="60px"
          width="60px"
          :src="item.icon"
        >
      </grid-item>
    </grid>
    <div class="">
      <highcharts-component
        :options="options"
        ref="simpleChart"
      ></highcharts-component>
      <!-- <button @click="updateChart">更新图表</button> -->
    </div>
    <div
      class=""
      style="margin:5px 0 0 0"
    >
      <highcharts-component
        :options="options2"
        ref="simpleChart"
      ></highcharts-component>
      <!-- <button @click="updateChart">更新图表</button> -->
    </div>
    <div
      class=""
      style="margin:5px 0 58px 0"
    >
      <highcharts-component
        :options="options3"
        ref="simpleChart"
      ></highcharts-component>
      <!-- <button @click="updateChart">更新图表</button> -->
    </div>
  </div>
</template>
<script>
import HighchartsComponent from "../../../components/HighchartsComponent.vue";
import Highcharts from "highcharts/highstock";
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
    XButton,
    HighchartsComponent
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
      showPlacementValue: "left",
      options: {
        title: {
          text: "2018年1-8月份单据量"
        },
        credits: {
          enabled: false
        },
        subtitle: {
          text: "2018年下单量"
        },
        // colors: [
        //   "#7cb5ec",
        //   "#434348",
        //   "#90ed7d",
        //   "#f7a35c",
        //   "#8085e9",
        //   "#f15c80",
        //   "#e4d354",
        //   "#8085e8",
        //   "#8d4653",
        //   "#91e8e1"
        // ],
        yAxis: {
          title: {
            text: "单据量"
          }
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        xAxis: {
          categories: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月"
          ]
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            }
            // pointStart: 1
          }
        },
        series: [
          {
            name: "差旅费",
            color: "#f15c80",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "借还款",
            color: "#f7a35c",
            data: [24916, 24064, 39742, 29851, 32490, 30282, 38121, 80434]
          },
          {
            name: "招待费",
            color: "#8085e9",
            data: [31744, 47722, 36005, 59771, 40185, 84377, 32147, 59387]
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      },
      options2: {
        chart: {
          type: "column"
        },
        credits: {
          enabled: false
        },

        title: {
          text: "2018年1-8月份单据量"
        },
        subtitle: {
          text: "2018年下单量"
        },
        xAxis: {
          categories: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "下单量"
          }
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [
          {
            name: "差旅费",
            color: "#f15c80",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: "借还款",
            color: "#f7a35c",
            data: [24916, 24064, 39742, 29851, 32490, 30282, 38121, 80434]
          },
          {
            name: "招待费",
            color: "#8085e9",
            data: [31744, 47722, 36005, 59771, 40185, 84377, 32147, 59387]
          }
        ]
      },
      options3: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        credits: {
          enabled: false
        },

        title: {
          text: "2018年1-8月份单据量"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                color:
                  (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                  "black"
              }
            }
          }
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "差旅费",
                color: "#f15c80",
                y: 50
                // sliced: true,
                // selected: true
              },
              {
                name: "借还款",
                color: "#f7a35c",
                y: 30
              },
              {
                name: "招待费",
                color: "#8085e9",
                y: 20
              }
            ]
          }
        ]
      }
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