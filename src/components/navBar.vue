<script>
// import process from "./package.json"
export default{
  data(){
    return{
    query:'',
    search_result: {}
    }
  },
  methods:{
    async search(query){
        this.search_result=[]
        let API_key=process.env.VUE_APP_API_KEY
        // console.log(API_key)
        var url="http://127.0.0.1:8000/api/v1/search/?q="+query
        const res=await fetch(url,{headers:{"Authorization":"Token "+API_key}})
        let d= await res.json()
        let out={'status':res.status,'data':d['data']}
        this.search_result=out
    },
    invisible(){
      document.getElementById('search-result').style.visibility='hidden'    
    },
    visible(){
      document.getElementById('search-result').style.visibility='visible'    
    }
  }
}
</script>

<style> 

</style>


<template>
  <nav class="">
    <div class="heading">
      <a href="/">Manga World </a>
    </div>
    <div class="right">

    <div class="search">
        <input placeholder="search for manga"  class="searchBar" type="text" v-model="query" @input="search(query)">
        <div v-if="search_result.status==200" @focusin="visible()" @focusout="invisible()"  class="results" id="search-result"> 
          <div v-for="res in search_result.data" v-bind:key='res.manga_id'>
            <div class="search-list">
              <div class="search-poster">
                <img v-bind:src="res['posterImage']['tiny'] || null" alt="not found">
              </div>
              <div class="search-info">
                <div class="title"><b>{{res.titles.en_jp}}</b></div>
                <div class="status">{{res.status}}</div>
                <div class="airdaate">Air Date: {{res.startDate}}</div>
              </div>
            </div>    
          </div>
      
        </div>
    </div>
    <div class="accounts">
      <a class="" href="/login">Login</a>
      <a class="" href="/signup">Signup</a>
  <div class="main-nav">
  </div>
    </div>
    </div>
  </nav>
</template>