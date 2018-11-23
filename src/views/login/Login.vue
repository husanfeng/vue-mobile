<template>
    <div class="login">
        <div class="login-input">
            <van-cell-group>
                <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />
                <van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码" style="marginTop:10px" />
                <van-button type="primary" :loading="isLoading" style="marginTop:30px" @click="loginIn">登录</van-button>
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
  background-image: url("../../../static/login_mobile.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  overflow: hidden;
  .login-input {
    margin: 60% 20px 0 20px;
    // text-align: center;
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
  width: 330px;
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

