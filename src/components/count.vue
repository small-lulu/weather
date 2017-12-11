<template>

  <div>
    <div>
      <h2>{{msg}}</h2>
      <h2>{{msg1}}</h2>
      <hr/>
      <h3>{{$store.state.count}}-{{count}}</h3>
    </div>
    <div>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>


  </div>

</template>
<script>
  import store from '@/vuex/store'
  import {mapState,mapMutations} from 'vuex';

//    localStorage.a = 1111;
//    console.log("localStorage.a=" + localStorage.a);
//    localStorage.clear();



    export default{
    data(){
      return{
        msg:'Hello Vuex',
        msg1:localStorage.a,


      }
    },
    computed:mapState(["count"]),

//    computed:mapState(
//      {
//        user_id:state=>state.user_id,
//        user_privilege:state=>state.user_privilege,
//
//      }
//    ),


    methods:mapMutations([
      'add','reduce'
    ]),
    store

  }
</script>
