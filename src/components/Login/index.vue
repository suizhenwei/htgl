<template>
  <div class="login" id="particles">
    <div>{{test}}</div>
    <div class="demo-dynamic">
      <div class="labels">
        <span>用户名：</span>
        <hd-input 
          class="baseInput user-input" 
          @handleBlur="onUserBlur" 
          type="text" 
          placeholder="6-10个字母、数字、下划线"/>
          <span class="spanColor">{{SpanUser}}</span>
      </div>
      <div class="labels">
        <span>密<b style="opacity:0;">迷</b>码：</span>
        <hd-input 
          class="baseInput pwd-input"
          @handleBlur="onPwdBlur" 
          type="password" 
          placeholder="6-20个字母、数字、下划线"/>
          <span class="spanColor">{{SpanPwd}}</span>
      </div>
      <input 
        class="btn" 
        type="button" 
        value="提交" 
        @click="submitForm" 
      >
    </div>
  </div>
 
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loginName:{
        username: '',
        pwdname: ''
      },
      test:'',
      disabled:'disabled',
      SpanPwd: '',
      SpanUser: '',
    };
  },
  mounted(){
    particlesJS.load('particles', '../../../static/data/particles.json');
  },
  computed: {
    ...mapState(['pageTitle'])
  },
  methods: {
    onUserBlur (val) {
      let reg = /^\w{6,10}$/
      if(!reg.test(val)){
        sessionStorage.setItem('User',false);
        this.$messages({
          // duration:1500,
          title: 'Title',
          message: '<div>0000000</div>',
          confirmBtn: true,
          closeBtn: true,
          cancelBtn: true,
          confirmTextBtn: '提交',
          confirmCallback () {
            return new Promise((resolve, reject) => {
              setTimeout(function () {
                resolve()
                console.log('confirm')
              },2000)
            })
          }
        })
        // this.open('用户名输入错误了', 'warning')
        this.SpanUser = '用户名输入错误了'
      } else {
        sessionStorage.setItem('User',true);
        // this.open('用户名输入正确', 'success')
        this.SpanUser = ''
      }
    },
    onPwdBlur (val) {
      let reg = /^\w{6,20}$/;
      if(!reg.test(val)){
        sessionStorage.setItem('Pwd',false);
        // this.open('密码输入错误', 'warning')
        this.SpanPwd = '密码输入错误'
      }else {
        sessionStorage.setItem('Pwd',true);
        // this.open('密码输入正确', 'success')
        this.SpanPwd = ''
      }
    },
    submitForm () {
      this.User = sessionStorage.getItem('User')
      this.Pwd = sessionStorage.getItem('Pwd')
      if(this.User === 'true' && this.Pwd === 'true'){
        this.$router.push('/home')
      } else {
        // this.open('登陸信息不對', 'error')
      }
    },
    // Element自带message  弹窗
    // open (message, type) {
    //   this.$message({
    //     showClose: true,
    //     message: message,
    //     type: type,
    //     duration: 1500
    //   })
    // }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width:100%;
  height:100%;
  background-image: url('../../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.demo-dynamic{
  /* widows: 50%;
  height: auto; */
  width:315px;
  height:170px;
  background: rgba(255,255,255,.2);
  position: absolute;;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding:50px 30px;
}
.demo-dynamic div:nth-of-type(2){
  margin:40px 0;
}
.btn{
  width:100px;
  line-height: 1.5;
  background: #3a76e5;
  border:1px solid #3a76e5;
  border-radius: 15px;
  outline: 0;
  /* cursor: pointer; */
  color:black
}
.labels{
  position: relative;
}
.spanColor{
  position: absolute;
  top:34px;
  left:90px;
  color:#F56C6C;
}
</style>
