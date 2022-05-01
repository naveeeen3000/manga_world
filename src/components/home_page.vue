<script>

export default{
    data(){
        return {
            popularManga: false
        }
    },
    methods:{
        async get_popular_manga(){
            let url=process.env.VUE_APP_BASE_URL+'manga/popular'
            let other_params={
                "headers":{
                    "Authorization":"Token "+process.env.VUE_APP_API_KEY,
                    "Content-Type":"application/json"
                }
            }
            console.log('asd')
            const response=await fetch(url,other_params)
            let data=await response.json()
            if(response.status!=200){
                this.popularManga=false
            }
            console.log('this is the function')
            this.popularManga=data['data']
        }
    },
    beforeMount(){
        console.log('before mount')
        this.get_popular_manga()
    },
    mounted(){
        console.log('mounted')
    }
}
</script>



<template>
    <h2>popular Manga</h2>
    <div class="famous" v-if="!popularManga">
        loading.......</div>
    <div v-else class="famous">
        <!-- <p>{{popularManga}}</p> -->
        
        <div  v-for="manga in popularManga" :key="manga['manga_id']" class="popular-manga-tile">
            <img class="popular-manga-image" :src="manga.posterImage['medium']" :alt="manga.posterImage.tiny">
            <h4 class="popular-manga-title">{{manga.titles.en||manga.titles.en_jp}}</h4>
            <!-- <p>{{manga}}</p> -->
        </div>
    </div>
</template>

<style>

.famous{
    /* border: 2px solid black; */
    margin:1rem;
    /* overflow: scroll; */
    scroll-behavior: smooth;
    padding: 10px;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* flex-wrap:wrap; */
}

.popular-manga-image{
    height:15rem;
    border-radius: 1.5rem;
    opacity: 0.7;
    margin-right:1rem;
}

.popular-manga-image:hover{
    transition: 0.5s;
    transform-style: preserve-3d;
    opacity: 1;
}

.popular-manga-title{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
</style>