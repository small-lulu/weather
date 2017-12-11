<template>
  <div>
    <mt-header fixed title="登录"></mt-header>

    <div class="denglu">
      <mt-field class="d1" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="bt">
      <mt-button type="default" size="small" @click="go('/zhuce')">注册</mt-button>
      <mt-button type="primary" size="small" @click="denglu">登录</mt-button>
    </div>


    <mt-tabbar v-model="selected" fixed id="aa1">
      <mt-tab-item id="天气">
        <img slot="icon" src="../assets/a1.png" @click="go('/')">
        天气
      </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" src="../assets/a4.png" @click="go('/news')">
        新闻
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/a3.png" @click="go('/disc')">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/a2.png" @click="goif('/minei','/mine')">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        selected: '我的',
        username: '',
        password: '',
        isok: ''
      }
    },
    created() {
//      axios.get('http://mobile.weather.com.cn/data/forecast/101030400.html')
      axios.get('http://47.104.109.186:3002/process_get')
      //      axios.get('http://jspang.com/DemoApi/oftenGoods.php')

        .then(response => {
//          console.log(response);
//          this.weather = response.data;
        }).catch(error => {
        console.log(error);
//        alert('网络错误，不能访问');
      });


    },

    methods: {

      denglu() {

        axios.get('http://47.104.109.186:3002/process_get', {
          params: {
            username: this.username,
            password: this.password
          }
        })
          .then(response => {
//          console.log(response);
            this.isok = response.data;

          }).catch(error => {
          console.log(error);
//        alert('网络错误，不能访问');
        });

        setTimeout(funcName, 2000);
        var that = this;
        function funcName() {
//          console.log(that.isok);
//          console.log(that.isok);

          if (that.isok !== 'err') {
//            console.log(that.isok);
            Toast('登录成功');
            that.$router.push({ name: 'minei', params: { username: that.username}})
            localStorage.username=that.username
            localStorage._id=that.isok[0]._id
            localStorage.phone=that.isok[0].phone
            localStorage.email=that.isok[0].email
            localStorage.cityname=that.isok[0].cityname
            localStorage.introduction=that.isok[0].introduction

//            this.$router.push({ name: 'home', params: { userId: wise }})
          } else {
            Toast('登录失败');
            that.username='';
            that.password='';
          }
        }

//console.log(this.isok)

      },
//
//          .then(function (response) {
//            console.log(response.data);
//            this.isok==response.data;
//            console.log(this.isok);
//            if (response.data == 'ok') {
//              Toast('登录成功');
//              this.isok==response.data;
//              console.log(isok)
//            } else {
//              Toast('登录失败');
//            }
//          })
//          .catch(function (err) {
//            console.log(err);
//          });
//
//        this.$router.push('/')
//      },
      go(a) {
        this.$router.push(a);
      },
      goif(a,b) {
        if(localStorage.username)
        {
          this.$router.push(a);
        }else {
          this.$router.push(b);
        }

      },
    },
    mounted: function () {
      var windowInnerHeight = window.innerHeight;
      window.onresize = resize;
      function resize() {
        if (window.innerHeight < windowInnerHeight) {
          document.getElementById('aa1').style.height = "0"//也可以在css文件夹写个类名，然后相对应的removeClass和addClass既可
        } else {
          document.getElementById('aa1').style.height = '55px'//也可以在css文件夹写个类名，然后相对应的removeClass和addClass既可
        }
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    /*color: #42b983;*/
  }

  mt-button {
    margin-left: 10px;
    height: 300px;
  }

  .xinqing {
    width: 70%;
    margin: 0 auto;
    height: 100px;
    overflow: hidden;
    padding-top: 20px;
    font-size: 14px;
  }

  .neirong {
    text-align: left;
    margin: 20px 35%;

  }

  .bt {
    margin-top: 20px;
  }

  .denglu {
    width: 70%;
    margin: 0 auto;
    text-align: left;
    /*border: 1px solid #b8bbbf;*/
    border-radius: 10px;
    padding: 10px;
  }

  .mine {
    background: #000;
  }

</style>
