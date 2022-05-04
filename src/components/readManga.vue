<script>
import chapterModal from './chapterModal.vue'
export default{
    data(){
        return{
            manga_title: this.$route.params.manga_title,
            manga: false,
            show_modal: false,
            thisChapter: {}
        }
    },
    methods:{
        async get_manga(){
            let url=process.env.VUE_APP_BASE_URL+'manga/read/?manga_title='+this.manga_title
            let other_params={
                'headers':{
                    'Authorization':'Token '+process.env.VUE_APP_API_KEY,
                    'Content-Type':'application/json'
                },
                'method': 'GET'
            }
            const response=await fetch(url,other_params)
            const res=await response.json()
            if(response.status==200){
                this.manga=res['data'][0]
            }
        }
    },
    beforeMount(){
        this.get_manga()
        console.log(this.manga)
    },
    components:{
        chapterModal: chapterModal
    }
}
</script>
<template>
    <div class="read-manga-container" v-if="this.manga">
        <div class="manga-info">
            <img :src="manga.cover_image" alt="" class="manga-poster">
            <div class="manga-info-right">
                <h2 class="manga-title">
                {{this.manga.title}}
                </h2>
                <span class="genre">
                    <span v-for="genre in this.manga.genre" :key="genre">
                        {{genre}}
                    </span>
                </span>
                <h4 class="manga-au">
                    {{this.manga.author}}
                </h4>
                <h4 class="manga-status">
                    <span v-if="this.manga.status=='Ongoing'" style="color:green">
                        ONGOING
                    </span>
                    <span v-else style="color:red">FINISHED</span>
                </h4>
            </div>
        </div>
        <div class="manga-chapters">
            <h3>Chapters List</h3>
            <div class="chapters-container">
                <div v-for="chapter in this.manga.chapters" :key="chapter" class="chapter">
                    <span><a @click="this.show_modal=true;this.thisChapter=chapter" href='#'>{{Object.keys(chapter)[0]}}</a></span>
                </div>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <chapterModal :show='this.show_modal' :chapter='this.thisChapter' @close='this.show_modal=false'/>
    </Teleport>
</template>
<style>


.read-manga-container{
    /* padding:4rem; */
    /* display: inline-block; */
    width:100%;
}

.manga-info{
    padding:4rem;
    display:flex;
    flex-direction: row;
    align-self: baseline;
}

.manga-poster{
    margin-left: 10%;
}

.manga-info-right{
    padding-left:4rem;
    width:50%;
}
.manga-chapters{
    margin-top:-4rem;
    margin-left:30%;
    width:50%;
    
    box-shadow:0 2px 8px rgb(145, 145, 145);
}

.chapters-container{
overflow: scroll;
    height:20rem;
}

.chapter{
    font-size: large;
    margin-bottom:2px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.chapter a:hover{
    color:red;
    transition:all 0.2s ease-in;
}
.chapter a{
    text-decoration:none;
    color:aliceblue;
}
</style>