<script>
import MangaDeatils from './mangaDetails.vue'
export default{
  data(){
    return{
    query:'',
    search_result: {},
    thisManga: {},
    show_modal: false
    }
  },
  components:{
    "MangaDetails": MangaDeatils,
}
  ,
  methods:{
    async search(query){
        this.search_result=[]
        let API_key=process.env.VUE_APP_API_KEY
        var url=process.env.VUE_APP_BASE_URL+"search/?q="+query
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anek+Telugu&display=swap');

nav{
  background-color: rgb(0, 191, 212);
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
}
nav div{
  padding:0px;
  color:white;
}
.accounts{
  font-size: 20px;
  font-family: 'Anek Telugu', sans-serif;
  background-color: rgb(85, 85, 85);
  padding:10px;
}
.accounts a{
  padding-left: 20px;
}
nav a{
  color:white;
  text-decoration: none;
}
.heading{
    font-size: 30px;
    font-family: 'Fredoka One', cursive;
    
}
.right{
  display: flex;
}
.searchBar{
  font-size: medium;
  border:0px;
  height: 3em;
  border:1px solid black;
  width:25em;

}
.results{
  background-color: rgb(86, 86, 86);
  position: absolute;
  z-index: 1;
  top: 50px;
  /* display: flex; */
  width: 25.1em;
}
.search-list{
  padding: 0px;
  margin:0px;
  margin-top: 5px;
  display:flex;
  flex-direction: row;
  list-style: none;
}
.search-poster{
  margin-left: 4px;
  margin-top: 2px;
}
.search-poster img{
  border-radius: 50%;
  margin-left: 5%;
  height: 60px;
  width: 60px;
}
.search-info{
  display:flex;
  flex-direction: column;
  margin-left: 6px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.search-list:hover{
  background-color: rgb(0, 229, 255);
}


</style>


<template>
  <nav class="">
    <div class="heading">
      <a href="/">Manga World </a>
    </div>
    <div class="right">

    <div class="search">
        <input placeholder="search for manga"  class="searchBar" type="text" v-model="query" @input="search(query)">
        <div v-if="search_result.status==200"  @focusin="visible()" @focusout="invisible()"  class="results" id="search-result"> 
          <div v-for="res in search_result.data" v-bind:key='res.manga_id'>
            <div class="search-list" @click="this.show_modal=true;this.thisManga=res">
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
  <Teleport to="body">
      <MangaDetails :manga="this.thisManga" :show='this.show_modal' @close='this.show_modal=false'/>
  </Teleport>
</template>