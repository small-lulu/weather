<template >
  <div class="news" id="xw">
    <!--<mt-header fixed title="今日新闻"></mt-header>-->
    <mt-header fixed title="新闻">
      <router-link to="/news" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>

      <!--<router-link to="/" slot="right">-->
        <!--<mt-button icon="more"></mt-button>-->
      <!--</router-link>-->
    </mt-header>
    <h3 class="title">{{$route.params.qb}}</h3>
    <p class="date">{{$route.params.qc}}</p>

    <span v-html="$route.params.qd"></span>
    <img :src="$route.params.qp" width="100%"  />



  </div>
</template>
<script>

//  var a=$route.params.username;
//  console.log(a)
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        selected: '新闻',
        news: [
          {title: '大好事', date: '9/19'},
          {title: '小好事', date: '2/19'},
          {title: '中好事', date: '9/11'},
        ],

      }
    },

    created(){
      window.scrollTo(0,0);
    },


//    created() {
////      axios.get('http://mobile.weather.com.cn/data/forecast/101030400.html')
//      axios.get('http://127.0.0.1:3000/test2.js')
//      //      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
//        .then(response => {
////          console.log(response);
//          this.news = response.data;
//        }).catch(error => {
//        console.log(error);
////        alert('网络错误，不能访问');
//      })
//
//    },

    methods: {

      go(a) {
        this.$router.push(a);
      }
    },



  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .news {
    text-align: left;

  }

  .title {

    text-align: center;
    width: 70%;
    margin: 0 auto;
  }

  .date {
    text-align: center;
  }
  .text {
    width: 85%;
    margin: 0 auto;
    text-indent: 2em;
  }

</style>
