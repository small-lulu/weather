import Vue from 'vue'
import Router from 'vue-router'
import weather from '@/components/weather'
// import test from '@/components/test'
import news from '@/components/news'
import newsd from '@/components/newsd'
import disc from '@/components/disc'
import mine from '@/components/mine'
import minei from '@/components/minei'
import zhuce from '@/components/zhuce'
import count from '@/components/count'
import xiugai from '@/components/xiugai'
import friend from '@/components/friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weather',
      component: weather
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '/disc',
      name: 'disc',
      component: disc
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsd',
      name: 'newsd',
      component: newsd
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/minei',
      name: 'minei',
      component: minei
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/xiugai',
      name: 'xiugai',
      component: xiugai
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
  ]
})
