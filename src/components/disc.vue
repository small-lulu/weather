<template>
<div class="weather">
    <mt-header fixed title="今日发现"></mt-header>
    <div class="tongcheng">同城好友({{cityname}})</div>



  <router-link class="news1" v-for="n in persons"
               :to="{name:'friend',params:{qa:n.id,qb:n.username,qc:n.email,qp:n.phone,qd:n.introduction,qt:n.cityname}}">
    <mt-cell :title="n.username"></mt-cell>
  </router-link>



    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="天气">
        <img slot="icon" src="../assets/a1.png" @click="go('/')">
        天气
      </mt-tab-item>
      <mt-tab-item id="新闻" >
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
        persons:[],
        selected: '发现',
        cityname:localStorage.cityname,
      }
    },
    created() {
      if (localStorage.cityname!=null){
        axios.get('http://47.104.109.186:3008/city', {
          params: {
            cityname: this.cityname,
          }
        })
          .then(response => {
            console.log(response);
            this.persons = response.data;
          }).catch(error => {
          console.log(error);
        })
      }else{
        Toast('请登录');
      }

    },

    methods: {

      go(a){
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
  .xinqing{
    width: 70%;
    margin:0 auto;
    height: 100px;
    overflow:hidden;
    padding-top: 20px;
    font-size: 14px;
  }
  .neirong{
text-align: left;
    margin:20px 35%;

  }
  .news1 {
    text-decoration-line: none;
    color: #333333;
    text-align: left;

  }
  .tongcheng{
    background-color: #fafafa;
    border: solid 1px #eaeaea;
    margin: 0;
    padding: 0;
    height: 40px;
    line-height: 40px;
  }

</style>
