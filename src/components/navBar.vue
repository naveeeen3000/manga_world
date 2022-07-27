<script>
import MangaDeatils from './mangaDetails.vue'
import ProfileDropdown from './profileDropdown.vue'
export default{
  data(){
    return{
    query:'',
    search_result: {},
    thisManga: {},
    show_modal: false,
    showProfileDropdown: false,
    userData: false
    }
  },
  components:{
    "MangaDetails": MangaDeatils,
    "ProfileDropdown": ProfileDropdown,
    
}
  ,
  methods:{
    async search(query){
        this.search_result=[]
        let API_key=process.env.VUE_APP_API_KEY
        var url=process.env.VUE_APP_BASE_URL+"api/v1/search/?q="+query
        const res=await fetch(url,{headers:{"Authorization":"Token "+API_key}})
        let d= await res.json()
        let out={'status':res.status,'data':d['data']}
        // console.log(out)
        this.search_result=out
    }
  },
  mounted(){
    document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('search-result');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});
  }
}
</script>

<template>
  <nav class="">
    <div class="branding">
      <a href="/">Manga World </a>
    </div>
    <div class="right">

    <div class="search">
        <input placeholder="search for manga" class="searchBar" type="text" v-model="query" @input="search(query)">
        <div v-if="search_result.status==200" class="results" id="search-result"> 
          <div v-for="res in search_result.data" v-bind:key='res.manga_id' class='search-result-li'>
            <div class="search-list" @click="this.show_modal=true;this.thisManga=res">
              <div class="search-poster">
                <img v-bind:src="res['cover_image'] || null" alt="not found">
              </div>
              <div class="search-info">
                <div class="title"><b>{{res.title}}</b></div>
                <div class="status">{{res.status}}</div>
                <div class="airdaate">Air Date: {{res.release_date}}</div>
              </div>
            </div>    
          </div>
        </div>
    </div>
    <div class="user-avatar-div" v-if="this.$storage.getStorageSync('Token')" >
      <img @click="this.showProfileDropdown=!this.showProfileDropdown" class="user-avatar" src="../assets/user_avatar.png" alt="">
      <div class="profile-dropdown" v-if="this.showProfileDropdown" >
          <ProfileDropdown />
      </div>
    </div>
    <div v-else  class="accounts">
      <a class="" href="#/login">Login</a>
      <a class="" href="#/signup">Signup</a>
  <div class="main-nav">
  </div>
    </div>
    </div>
  </nav>
  <Teleport to="body">
      <MangaDetails :manga="this.thisManga" :show='this.show_modal' @close='this.show_modal=false'/>
  </Teleport>
</template>



<style> 
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anek+Telugu&display=swap');

nav{
  background-color: rgb(0, 191, 212);
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  height: 3rem;
  padding: 0 0rem 0 1rem;
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
.branding{
    font-size: 30px;
    font-family: 'Fredoka One', cursive;
}

.right{
  display: flex;
  margin-right:0px;
}
.searchBar{
  color:white;
  font-size: medium;
  border:0px;
  height: 3rem;
  border:1px solid black;
  width:25rem;
  background-color: black;
}


.results{
  background-color: rgb(86, 86, 86);
  position: absolute;
  z-index: 2;
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

.profile-pic{
  position: relative;
  height:3rem;
  margin:0px;
  /* margin-left: 2px; */
}

.profile-dropdown{
  position:absolute;
  right:0px;
  width:12rem;
  background-color: beige;
  /* padding:2rem 2rem 2rem 2rem; */
  border-radius: 0.6rem;
  z-index:1;
}
.user-avatar{
  height: 2.9rem;
  margin-left:1rem;
  border-radius: 50%;
}
.search-result-li:hover{
  cursor: pointer;
}
</style>
