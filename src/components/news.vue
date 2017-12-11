<template>
  <div class="news">
    <!--<mt-header fixed title="今日新闻"></mt-header>-->
    <mt-header fixed title="今日新闻">


      <!--<router-link to="/" slot="right">-->
      <mt-button icon="more" slot="right" @click="fenlei()"></mt-button>
      <!--</router-link>-->
    </mt-header>

    <mt-popup
      v-model="popupVisible"
      position="right">
      <div class="celan" id='cl'>
        <p class="xwlx">请选择新闻类型：</p>
        <mt-button type="default" size="small" @click="xwlxch('%e5%a4%b4%e6%9d%a1')">头条</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e6%96%b0%e9%97%bb')">新闻</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e8%b4%a2%e7%bb%8f')">财经</mt-button>
        <br>
        <p class="ge"></p>
        <mt-button type="default" size="small" @click="xwlxch('%e4%bd%93%e8%82%b2')">体育</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e5%a8%b1%e4%b9%90')">娱乐</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e5%86%9b%e4%ba%8b')">军事</mt-button>
        <br>
        <p class="ge"></p>
        <mt-button type="default" size="small" @click="xwlxch('%e6%95%99%e8%82%b2')">教育</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e7%a7%91%e6%8a%80')">科技</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e8%82%a1%e7%a5%a8')">股票</mt-button>
        <br>
        <p class="ge"></p>
        <mt-button type="default" size="small" @click="xwlxch('%e6%98%9f%e5%ba%a7')">星座</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e5%a5%b3%e6%80%a7')">女性</mt-button>
        <mt-button type="default" size="small" @click="xwlxch('%e5%81%a5%e5%ba%b7')">健康</mt-button>
        <br>
        <p class="ge"></p>
        <mt-button type="default" size="small" @click="xwlxch('%e8%82%b2%e5%84%bf')">育儿</mt-button>
      </div>


    </mt-popup>


    <router-link class="news1" v-for="n in news"
                 :to="{name:'newsd',params:{qa:n.id,qb:n.title,qc:n.time,qp:n.pic,qd:n.content}}">
      <mt-cell :title="n.title"></mt-cell>
    </router-link>
    <span v-html="con"></span>

    <mt-tabbar v-model="selected" fixed>
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

  export default {
    name: 'HelloWorld',
    data() {
      return {
        selected: '新闻',
        news: [],
        con: '',
        popupVisible: null,
        xwlx: localStorage.xwlx
      }
    },
    mounted: function () {
      var orderHeight = document.documentElement.clientHeight;
      console.log(orderHeight)
      document.getElementById('cl').style.height = orderHeight + 'px'
    },

    created() {

//      axios.get('http://mobile.weather.com.cn/data/forecast/101030400.html')
//      axios.get('http://127.0.0.1:3001/test2.js')
//      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
//      axios.get('http://127.0.0.1:3000/test2.js')
      axios.get('http://47.104.109.186:3005/xwlx', {
        params: {
          xwlx: this.xwlx,
        }
      })
        .then(response => {
          this.news = response.data;

        }).catch(error => {
        console.log(error);
//        alert('网络错误，不能访问');
      })

//        document.getElementById('cl').style.height= document.body.clientHeight+ 'px';
    },

    methods: {
      fenlei() {
        this.popupVisible = ''
      },

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
      xwlxch(a) {
        this.xwlx = a;
        localStorage.xwlx=this.xwlx;
console.log(this.xwlx);

        axios.get('http://47.104.109.186:3005/xwlx', {
          params: {
            xwlx: this.xwlx,
          }
        })
          .then(response => {
            this.news = response.data;
          }).catch(error => {
          console.log(error);
        })
        setTimeout(funcName, 1000);
//        var that = this;
        function funcName() {
          location.reload()
        }
      }

    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .news {
    text-align: left;
  }

  .news1 {
    text-decoration-line: none;
    color: #333333;
  }

  .celan {
    /*height: 100px;*/
    background-color: #ffffff;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .celan children {
    margin-top: 5px;
  }

  .ge {
    height: 4px;
    margin: 0;
    padding: 0;
  }

  .xwlx {
    font-size: 14px;
    color: #656b79;
  }

  mt-button {

  }

</style>
