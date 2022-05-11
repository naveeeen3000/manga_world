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
            let url=process.env.VUE_APP_BASE_URL+'manga/popular'
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
        <div class="famous" v-if="!popularManga">
            loading.......</div>
        <div v-else class="famous">
            <!-- <p>{{popularManga}}</p> -->
            
            <div   v-for="manga in popularManga" :key="manga['manga_id']" class="popular-manga-tile" >
                <img @click="this.show_modal=true;this.thisManga=manga" href="#" class="popular-manga-image" :src="manga.posterImage['medium']" :alt="manga.posterImage.tiny">
                <h4 class="popular-manga-title">{{manga.titles.en||manga.titles.en_jp}}</h4>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <MangaDetails  :manga="this.thisManga" :show="show_modal" @close="show_modal=false" />
    </Teleport>
    <GenreConatiner genre="comedy" />
</template>

<style>

</style>