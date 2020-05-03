<template>
    <div class="login-box">

      <el-form ref="userForm" :rules="rules" :model="userForm" label-width="80px">
        <h3 class="login-title">欢迎登陆</h3>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>

      <el-form-item class="login-btn">
        <el-button type="primary" @click="Login('userForm')">登陆</el-button>
        <el-button >注册</el-button>
      </el-form-item>
      </el-form>
      </div>
</template>

<script>
    export default {
        name: "Login",
     data() {
          return {
            userForm: {
              name: '',
             password:''
            },

            rules:{
                     name: [
                       { required: true, message: '请输入用户名账号', trigger: 'blur' }
                     ],
                    password: [
                     { required: true, message: '请输入密码', trigger: 'blur' }
                     ]
                 }
       };

    },
    methods: {
      Login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method:'post',
              url:'http://localhost:8090/login',
              data :{
                name: this.$refs[formName].name,
                password:this.$refs[formName].password
              }
            }).then(function (response) {
              console.log(response.data) //返回的结果在response里
            });
          } else if(formName.name==''||formName.password=='') {
            this.LoginNull();
            return false;
          }else {
            this.LoginError();
            return false;
          }
        });
      },
      LoginNull() {
        this.$message.error('用户名或密码输入错误！');
      },
      LoginError() {
        this.$message.error('用户名或密码格式不正确！');
      }
    },

    }
</script>

<style scoped>

  .login-box{
    width: 500px;
    height: 300px;
    align-items: center;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    box-shadow: 0 5px 10px #DCDFE6;
    margin:150px auto;
    padding: 20px 50px 20px 30px;
  }
  .login-title{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 35px;
  }
  .login-btn{
    margin-left: 20%;
  }
</style>
