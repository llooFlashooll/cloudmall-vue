<template>

  <div class="page">

    <div class="title-container">
      <h1 class="header">欢迎使用 cloudmall</h1>
    </div>

    <el-card class="box" shadow="always">
      <el-row class="title">
        <h2>登录</h2>
      </el-row>
      <el-form label-width="0">
        <el-form-item>
          <i class="el-icon-user"></i>
          <el-input class="form-input" v-model="email" placeholder="邮箱">
          </el-input>
        </el-form-item>

        <el-form-item>
          <i class="el-icon-s-goods"></i>
          <el-input class="form-input" v-model="password" placeholder="密码" show-password>
          </el-input>
        </el-form-item>
        
        <el-form-item class="login">
          <el-button type="primary" class="form-button" v-on:click="login" round id="login">登录</el-button>
        </el-form-item>

        <el-form-item class="register">
          <el-button type="primary" class="form-button" v-on:click="toRegister" round id="register">去注册</el-button>
          <el-button type="primary" class="form-button" v-on:click="getPassword" round id="forget">邮箱找回密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <div id="copyright" style="position:fixed; bottom:20px; width: 100%">
      <div class="copyright">
        <p>COPYRIGHT © 2020 <a href="#" target="_blank">TONGJI CLOUDMALL</a>. ALL RIGHTS RESERVED.</p>
      </div>
    </div>

    
  </div>
</template>

<script>

export default {
  name: "Login",
  data(){
    return {
      email:'',
      password:''
    }
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color: aliceblue')
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },
  methods:{
    login:function () {
      console.log("请求登录");
      if( this.email == "" || this.password == "") {
        alert("请正确输入");
      }

      console.log("Login Success!");
      sessionStorage.setItem("isLogin", true);
      // sessionStorage.setItem("userid", uid);
      location = '../';
    },

    toRegister:function() {
      location="./register"
    },

    getPassword:function () {

    }

  }
}
</script>

<style scoped>

.page {
  width: 100%;
  /* height: 100%; */
  /* background-color: aliceblue; */
}

.box {
  width: 30%;
  margin-top: 50px;
  margin-left: 35%;
}

.header {
  text-align: center;
  margin-top: 80px;
}

.title {
  text-align: center;
}

.form-input {
  width: 80%;
}

.el-icon-user {
  font-size: 25px;
  margin: 0 20px;
}

.el-icon-s-goods {
  font-size: 25px;
  margin: 0 20px;
}

.login {
  text-align: center;
}

.register {
  text-align: center;
}

.copyright {
  margin: 0 auto;
  width: 520px;
  max-width: 100%;
  text-align: center;
  font-size: 13px
}
</style>