<script>
import genreListVue from './genreList.vue'
import MangaDetails from './mangaDetails.vue'
export default{
    data(){
        return {
            popularManga: false,
            show_modal: false,
            thisManga: ''
        }
    },
    components:{
    GenreConatiner: genreListVue,
    MangaDetails: MangaDetails,
}
    ,
    methods:{
        async get_popular_manga(){
            let url=process.env.VUE_APP_BASE_URL+'api/v1/manga/popular'
            let other_params={
                "headers":{
                    "Authorization":"Token "+process.env.VUE_APP_API_KEY,
                    "Content-Type":"application/json"
                }
            }
            const response=await fetch(url,other_params)
            let data=await response.json()
            if(response.status!=200){
                this.popularManga=false
            }
            this.popularManga=data['data']
        }
    },
    beforeMount(){
        this.get_popular_manga()
    }
}
</script>



<template>
    <div class="popular-manga-section">
        <h2 class="popular-manga-section-title">popular Manga</h2>
        <div class="famous" v-if="!popularManga"></div>
        <div v-else class="famous">
            <div   v-for="manga in popularManga" :key="manga['manga_id']" class="popular-manga-tile" >
                <a href="#"><img @click="this.show_modal=true;this.thisManga=manga" class="popular-manga-image" :src="manga.cover_image" alt=""></a>
                <h4 class="popular-manga-title">{{manga.title}}</h4>
            </div>
        </div>
    </div>
    <GenreConatiner genre="adventure" />
    <GenreConatiner genre="shounen" />
    <GenreConatiner genre="comedy" />
    <GenreConatiner genre="action" />
    
    <Teleport to="body">
        <MangaDetails  :manga="this.thisManga" :show="show_modal" @close="show_modal=false" />
    </Teleport>
</template>

<style>

</style>