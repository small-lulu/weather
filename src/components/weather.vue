<template>
  <div class="weather" id="aa2">
    <mt-header fixed title="今日天气"></mt-header>
    <img v-bind:src="imgUrl"/>
    <p class="xinqing">{{ msg }}</p>
    <p class="neirong">城市：{{wn}}<br>天气：{{ww}}<br>最高温度：{{th}}<br>最低温度：{{tl}}</p>
    <!--<p>{{haha}}</p>-->
    <div class="city" id="city">
      <mt-field placeholder="请输入城市" v-model="cityname1"></mt-field>

    </div>
    <mt-button size="small" type="primary" @click="find()">查询</mt-button>


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

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        selected: '天气',
        imgUrl: './static/png-2222.png',
        weather: {},
        wn: '',
        ww: '',
        th: '',
        tl: '',
        haha: [],
        cityname: localStorage.cityname,
        cityname1: ''
      }
    },
    created() {


      axios.get('http://47.104.109.186:3001/find', {
        params: {
          city: this.cityname,
        }
      })
        .then(response => {
//      console.log(response);
          this.weather = response.data;
          this.wn = this.weather.city;
          this.ww = this.weather.weather;
          this.th = this.weather.temp2;
          this.tl = this.weather.temp1;

          if (this.ww == '晴') {
            this.imgUrl = './static/png-1350.png'
            this.msg = '晴天里有阳光，阳光总是充满温馨，相信有这么多朋友的厚爱和鼓励，晴天会永远阳光灿烂。'
          } else if (this.ww == '多云') {
            this.imgUrl = './static/png-1345.png'
            this.msg = '墨色的浓云挤压着天空，掩去了刚刚的满眼猩红，沉沉的仿佛要坠下来，压抑得仿佛整个世界都静悄悄的。'
          } else if (this.ww == '晴转多云') {
            this.imgUrl = './static/png-1340.png'
            this.msg = '晴朗的天空忽然被乌云掩盖住了，太阳也急忙照片云彩多了起来。'
          } else if (this.ww == '多云转晴') {
            this.imgUrl = './static/png-1349.png'
            this.msg = '每天把牢骚拿出来晒晒太阳，心情就不会缺钙。'
          } else if (this.ww == '小雨转多云') {
            this.imgUrl = './static/png-1343.png'
            this.msg = '梅雨淅沥地下着，那是你积怨已久的相思泪。'
          } else if (this.ww == '阵雪转多云' || '多云转雨夹雪') {
            this.imgUrl = './static/png-1348.png'
            this.msg = '忽然下的一场雪，飘得那么纯洁，将我埋葬在你的世界，冰封了我爱的期限，却让痛，成为永远。'
          } else if (this.ww == '阴转多云') {
            this.imgUrl = './static/png-1347.png'
            this.msg = '纵然我的世界里有一半是阴天,是寂寞,但我依旧保持着微笑。'
          }

//      this.isok = response.data;
        }).catch(error => {
        console.log(error);
      });


    },

    methods: {
      find() {
        console.log(this.cityname1);
        axios.get('http://47.104.109.186:3001/find', {
          params: {
            city: this.cityname1,
          }
        })
          .then(response => {
//      console.log(response);
            this.weather = response.data;
            this.wn = this.weather.city;
            this.ww = this.weather.weather;
            this.th = this.weather.temp2;
            this.tl = this.weather.temp1;

            if (this.ww == '晴') {
              this.imgUrl = './static/png-1350.png'
              this.msg = '晴天里有阳光，阳光总是充满温馨，相信有这么多朋友的厚爱和鼓励，晴天会永远阳光灿烂。'
            } else if (this.ww == '多云') {
              this.imgUrl = './static/png-1345.png'
              this.msg = '墨色的浓云挤压着天空，掩去了刚刚的满眼猩红，沉沉的仿佛要坠下来，压抑得仿佛整个世界都静悄悄的。'
            } else if (this.ww == '晴转多云') {
              this.imgUrl = './static/png-1340.png'
              this.msg = '晴朗的天空忽然被乌云掩盖住了，太阳也急忙照片云彩多了起来。'
            } else if (this.ww == '多云转晴') {
              this.imgUrl = './static/png-1349.png'
              this.msg = '每天把牢骚拿出来晒晒太阳，心情就不会缺钙。'
            } else if (this.ww == '小雨转多云') {
              this.imgUrl = './static/png-1343.png'
              this.msg = '梅雨淅沥地下着，那是你积怨已久的相思泪。'
            } else if (this.ww == '阵雪转多云' || '多云转雨夹雪') {
              this.imgUrl = './static/png-1348.png'
              this.msg = '忽然下的一场雪，飘得那么纯洁，将我埋葬在你的世界，冰封了我爱的期限，却让痛，成为永远。'
            } else if (this.ww == '阴转多云') {
              this.imgUrl = './static/png-1347.png'
              this.msg = '纵然我的世界里有一半是阴天,是寂寞,但我依旧保持着微笑。'
            }

//      this.isok = response.data;
          }).catch(error => {
          console.log(error);
        });
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
    display: inline-block;
  }

  .xinqing {
    width: 70%;
    margin: 0 auto;
    height: 60px;
    overflow: hidden;
    padding-top: 10px;
    font-size: 14px;
  }

  .neirong {
    text-align: left;
    margin: 20px 0 20px 35%;

  }

  mt-tab-item img {
    height: 100px;
  }

  .city {
    width: 40%;
    margin: 10px auto;
    display: inline-block;
    font-size: 14px;
    margin-right: 10px;
  }

  /*#aa1{*/
  /*margin-top: 42%;*/
  /*}*/
  .weather {
    /*margin: -8px;*/
    /*padding: 0;*/
    overflow-y: scroll;
  }


</style>
