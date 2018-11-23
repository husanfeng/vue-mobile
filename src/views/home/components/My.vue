<template>
    <div class="my-module">
        <div class="my-module-border">
            <div class="my-module-img">
                <img src="../../../../static/hsf.jpg" alt="">
                <div class="my-module-text">
                    <p>husanfeng</p>
                    <p>男 26</p>
                    <p>财务报账项目组前端开发</p>
                </div>
            </div>
        </div>
        <div>
            <mt-cell title="个人详情" to="/feedback-page" is-link>
                <img slot="icon" src="../../../../static/u234.png" width="24" height="24" style="margin:0px 5px 0px 10px">
            </mt-cell>
            <mt-cell title="帮助中心" to="/feedback-page" is-link>
                <img slot="icon" src="../../../../static/u236.png" width="24" height="24" style="margin:0px 5px 0px 10px">
            </mt-cell>
            <mt-cell title="设置" to="/feedback-page" is-link>
                <img slot="icon" src="../../../../static/u238.png" width="24" height="24" style="margin:0px 5px 0px 10px">
            </mt-cell>
            <mt-cell title="关于" to="/feedback-page" is-link>
                <img slot="icon" src="../../../../static/u242.png" width="24" height="24" style="margin:0px 5px 0px 10px">
            </mt-cell>
            <mt-cell title="意见反馈" to="/feedback-page" is-link>
                <img slot="icon" src="../../../../static/u234.png" width="24" height="24" style="margin:0px 5px 0px 10px">
            </mt-cell>
            <div style="margin:8px 8px 55px 8px">
                <x-button type="warn" @click.native="loginOut">退出登陆</x-button>
            </div>
        </div>
    </div>

</template>
;
<script>
import { XButton } from "vux";
// import { mapState, mapActions } from "vuex";
export default {
  components: { XButton },
  data() {
    return {};
  },
  methods: {
    loginOut() {
      sessionStorage.setItem("userName", "");
      sessionStorage.setItem("userToken", ""); // 生产一段随机数
      this.$router.push({
        name: "login_page"
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
  created() {},

  computed: {
    // ...mapState({
    //   route: state => state.route,
    //   path: state => state.route.path,
    //   deviceready: state => state.app.deviceready,
    //   demoTop: state => state.vux.demoScrollTop,
    //   isLoading: state => state.vux.isLoading,
    //   direction: state => state.vux.direction
    // }),
  },
  watch: {
    $route(to, from) {}
  }
};
</script>
<style lang="less">
.my-module {
  height: 100%;
  background-color: #f2f2f2;
  .my-module-border {
    background-color: rgb(105, 105, 155);

    height: 220px;

    .my-module-img {
      text-align: center;
      position: relative;
      top: 10px;

      img {
        height: 100px;
        width: 100px;
        border: 1px solid #948c8c;
        border-radius: 100px;
      }
      .my-module-text {
        margin: 5px;
      }
    }
  }
}
</style>