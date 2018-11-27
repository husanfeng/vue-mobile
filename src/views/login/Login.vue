<template>
  <div class="login">
    <div class="login-input">
      <p class="login-text">欢迎登陆</p>
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名"/>
        <van-field
          v-model="password"
          clearable
          type="password"
          label="密码"
          placeholder="请输入密码"
          style="marginTop:10px"
        />
        <van-button type="primary" :loading="isLoading" style="marginTop:30px" @click="loginIn">登录</van-button>
      </van-cell-group>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import { Toast } from 'mint-ui'
import { XHeader } from "vux";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    XHeader,
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
      if (this.username != "" && this.password != "") {
        this.isLoading = true;
        sessionStorage.setItem("userName", this.username);
        sessionStorage.setItem("userToken", "iigslfdjzgertuq589e6uhgf"); // 生产一段随机数
        // this.$store.commit("setUserName", this.username);
        // this.$store.commit("setUserToken", "iigslfdjzgertuq589e6uhgf");

        this.$router.push({
          name: "home-page"
        });

        this.$store.dispatch("setUserName", this.username);
      } else {
        Toast({
          message: "请输入用户名或密码！",
          position: "bottom",
          duration: 3000
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
  height: 667px;
  width: 100%;
  position: relative;
  background-image: url(../../../static/login_mobile.png);
  background-size: cover;
  overflow: hidden;
  background-position: center;
  //   background-repeat: no-repeat;
  .login-input {
    position: absolute;
    top: 40%;
    left: 10px;
    right: 10px;
    margin: 0 auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .login-text {
    color: #fff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 40px;
  }
}

.van-button--primary {
  color: #00ff;
  background-color: #fff;
}
.van-button {
  position: relative;
  padding: 0;
  display: inline-block;
  height: 44px;
  width: 100%;
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
.van-cell-group{
  background-color: rgba(0, 0, 0, 0)
}
.van-cell {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding: 10px 15px;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  background-color: #e7dfdf;
  color: #333;
  font-size: 14px;
  overflow: hidden;
  border-radius: 5px;
}
</style>

