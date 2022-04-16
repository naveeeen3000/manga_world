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
        let API_key=import.meta.env.VITE_API_KEY
        // console.log(API_key)
        var url="http://127.0.0.1:8000/api/v1/search/?q="+query
        const res=await fetch(url,{headers:{"Authorization":"Token "+API_key}})
        let d= await res.json()
        let out={'status':res.status,'data':d['data']}
        this.search_result=out
    },
    invisible(){
      document.getElementById('search-result').style.visibility='hidden'    }
    },
    visible(){
      document.getElementById('search-result').style.visibility='visible'    
    }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anek+Telugu&display=swap');

nav{
  background-color: rgb(234, 109, 64);
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
  background-color: black;
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
  font-size: 15px;
  border:0px;
  height: 3em;
  border:1px solid black;
  width:25em;

}
.results{
  background-color: black;
  position: absolute;
  top: 50px;
  /* display: flex; */
  width: 23.9em;
}
.search-list{
  padding: 0px;
  margin:0px;
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
  background-color: red;
}

</style>


<template>
  <nav class="">
    <div class="heading">
      <a href="/">Manga World </a>
    </div>
    <div class="right">

    <div class="search">
        <input placeholder="search for manga" @focusin="visible()" @focusout="invisible()" class="searchBar" type="text" v-model="query" @input="search(query)">
        <div v-if="search_result.status==200"  class="results" id="search-result"> 
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
      <a class="" href="#/login">Login</a>
      <a class="" href="#/signin">Signup</a>
  <div class="main-nav">
  </div>
    </div>
    </div>
  </nav>
</template>