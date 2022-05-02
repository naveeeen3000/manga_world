<script>

export default{
    props:{
        genre: String
    },
    data(){
        return{
            genreData:false
        }
    },
    methods:{
        async get_manga_by_genre(){
            let url=process.env.VUE_APP_BASE_URL+'manga/?genre='+this.genre
            let other_params={
                "headers":{
                    'Authorization':'Token '+process.env.VUE_APP_API_KEY
                },
                'method':'GET'
            }
            const response = await fetch(url,other_params)
            const res=await response.json()
            if(response.status!=200){
                this.genreData=false
            }
            else{
                this.genreData=res['data']
            }
        }
    },
    beforeMount(){
        this.get_manga_by_genre()
    }
}

</script>


<template>
    <Suspense>
    <div class="popular-manga-section">
        <h2 class="popular-manga-section-title">{{this.genre}}</h2>
        <div  class="famous">
            <div  v-for="manga in this.genreData" :key="manga.title" class="popular-manga-tile">
                <img class="popular-manga-image" :src="manga.cover_image" alt="">
                <h4 class="popular-manga-title">{{manga.title}}</h4>
                <!-- <p>{{manga}}</p> -->
            </div>
        </div>
    </div>
    <template #fallback>
        ...
    </template>
    </Suspense>
    <!-- <div v-if="this.genreData" class="genre-container">
        <h2 class="genre-container-title">{{this.genre}}</h2>
        <div class="genre-list">
            <div v-for="manga in this.genreData" :key="manga.title" class="genre-tile">
                <img :src="manga.cover_image" alt="" class="genre-tile-image">
                <h4 class="genre-tile-title">{{manga.title}}</h4>
            </div>
        </div>
    </div> -->
</template>


<style>

.popular-manga-section{
    /* background-color: rgb(142, 222, 238); */
    margin:1.5rem;
}
.famous{
    /* border: 2px solid black; */
    margin:1.5rem;
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
    /* width:11rem; */
    border-radius: 1.5rem;
    opacity: 0.7;
    margin-right:1rem;
    margin-left: 0px;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
}

.popular-manga-image:hover{
    transition: 0.5s;
    transform-style: preserve-3d;
    opacity: 1;
    box-shadow:0px;
}

.popular-manga-section-title{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;;
    margin-left:5rem;
}

.popular-manga-title{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* padding-left:3rem; */
    overflow:hidden;
    width: 10rem;
}
</style>