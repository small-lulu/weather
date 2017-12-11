<template>
  <div >
    <mt-header fixed title="好友资料">
      <router-link to="/disc" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="minei">

      <mt-cell title="用户名" :value="username">{{$route.params.qb}}</mt-cell>
      <mt-cell title="邮箱" :value="email">{{$route.params.qc}}</mt-cell>
      <mt-cell title="手机号" :value="phone">{{$route.params.qp}}</mt-cell>
      <mt-cell title="所在城市" :value="cityname">{{$route.params.qt}}</mt-cell>
      <mt-cell title="自我介绍" :value="introduction">{{$route.params.qd}}</mt-cell>
    </div>


    <div class="bt">
      <mt-button type="primary" size="small" >发消息</mt-button>
      <!--<mt-button type="danger" size="small" @click="tuichu">退出当前登录账号</mt-button> -->
    </div>


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
        username: "{{$route.params.qb}}",
        email: localStorage.email,
        phone: localStorage.phone,
        cityname: localStorage.cityname,
        introduction: localStorage.introduction
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
      go(a) {
        this.$router.push(a);
      },
      goif(a, b) {
        if (localStorage.username) {
          this.$router.push(a);
        } else {
          this.$router.push(b);
        }
      },
      tuichu(){
        localStorage.clear();
        this.$router.push('/mine');
      },


      denglu() {

//        console.log(this.username);
//        console.log(this.password);

        axios.get('http://47.104.109.186:3002/process_get', {
          params: {
            username: this.username,
            password: this.password
          }
        })
          .then(function (response) {
            console.log(response.data);
            if (response.data == 'ok') {
              Toast('登录成功');
            } else {
              Toast('登录失败');
            }
          })
          .catch(function (err) {
            console.log(err);
          });


      }
    }

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

  .minei {
    text-align: left;
  }
</style>
