<template>
    <div class="login">
        <div class="login-input">
            <van-cell-group>
                <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
                <van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码" style="marginTop:10px" />
                <van-button type="primary" :loading="isLoading" style="marginTop:10px" @click="loginIn">登录</van-button>
            </van-cell-group>
        </div>
    </div>
    </div>
</template>
<script>
import { XHeader } from "vux";

export default {
  components: {
    XHeader
  },
  data() {
    return {
      title: "title",
      isLoading: false,
      username: "",
      password: ""
    };
  },
  methods: {
    loginIn() {
      if (this.username != "" || this.password != "") {
        this.isLoading = true;
        sessionStorage.setItem("userName", this.username);
        sessionStorage.setItem("userToken", "iigslfdjzgertuq589e6uhgf"); // 生产一段随机数
        this.$store.commit("setUserName", this.username);
        this.$store.commit("setUserToken", "iigslfdjzgertuq589e6uhgf");

        this.$router.push({
          name: "home-page"
        });
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.path != "/") {
        this.title = to.meta;
        // debugger;
      } else {
      }
    }
  }
};
</script>
<style lang="less">
.login {
  height: 100%;
  width: 100%;
  /* min-width: 1366px;
  min-height: 600px; */
  background-image: url("../../../static/login_mobile.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  overflow: hidden;
  .login-input {
    // height: 300px;
    // background-image: url("../../../static/login-box-bg.png");
    // background-repeat: no-repeat;
    // background-position: center;
    margin: 60% 10px 0 10px;
    //  position: absolute;
    text-align: center;
    // border: 2px solid #948c8c;
  }
}

.van-button--primary {
  color: #fff;
  background-color: #ffa329;
}
.van-button {
  position: relative;
  padding: 0;
  display: inline-block;
  height: 44px;
  width: 160px;
  line-height: 42px;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
}
.van-button--normal {
  padding: 0 15px;
  font-size: 16px;
}
</style>

