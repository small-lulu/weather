<template>
  <div>
    <mt-header fixed title="注册"></mt-header>

    <div class="zhuce">
      <mt-field class="d1" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱(选填)" type="email" v-model="email"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号(选填)" type="tel" v-model="phone"></mt-field>
      <mt-field label="所在城市" placeholder="请输入所在城市(选填)" type="textarea" v-model="cityname"></mt-field>
      <mt-field label="自我介绍" placeholder="请输入自我介绍(选填)" type="textarea" rows="4" v-model="introduction"></mt-field>
    </div>
    <div class="bt">
      <mt-button type="danger" size="small" @click="zhuce">点击注册</mt-button>
      <mt-button type="primary" size="small" @click="go('/mine')">使用已有账号登录</mt-button>
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
        <img slot="icon" src="../assets/a2.png" @click="go('/mine')">
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
        email: '',
        phone: '',
        introduction: '',
        cityname:'',
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

      zhuce() {

        console.log(this.username,
          this.password,
          this.email,
          this.phone,
          this.introduction,)

        axios.get('http://47.104.109.186:3002/zhuce', {
          params: {
            username: this.username,
            password: this.password,
            email: this.email,
            phone: this.phone,
            cityname: this.cityname,
            introduction: this.introduction,
          }
        })
          .then(response => {
          console.log(response);
            this.isok = response.data;



          }).catch(error => {
          console.log(error);
//        alert('网络错误，不能访问');
        });

        setTimeout(funcName, 2000);
        var that = this;

        function funcName() {
          console.log(that.isok);
          if (that.isok == 'ok') {
            Toast('注册成功');
            localStorage.username=that.username
            localStorage.phone=that.phone
            localStorage.email=that.email
            localStorage.cityname=that.cityname
            localStorage.introduction=that.introduction
            that.$router.push({name: 'minei', params: {username: that.username}})
//            this.$router.push({ name: 'home', params: { userId: wise }})
          } else {
            Toast('注册失败');
            that.username = '';
            that.password = '';
            that.email = '';
            that.phone = '';
            that.cityname = '';
            that.introduction = ''
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
      }
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

  .zhuce {
    /*width: 70%;*/
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
