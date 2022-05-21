<script>
    export default{
        props:{
            manga: Object,
            show: Boolean
        },
    }
</script>


<template>
<Transition name="modal">
    <div v-if="this.show" class="modal-mask">
        <div class="modal-wrapper">
            <div v-if="this.manga" class="modal-container">
                <div class="top">
                    <a @click="$emit('close')" href="#"><i class="fi fi-rr-arrow-small-left"></i></a>
                    <h3>{{manga.title}}</h3>
                </div>
                <div class="modal-header">
                    <img v-if="this.manga.cover==null" src="../assets/error.png" alt="">
                    <object v-else :data="this.manga.cover.small"  >
                        <img :src="this.manga.cover.original" alt="Just testing.">
                    </object>
                </div>
                <div class="modal-body">
                    <div class="poster">
                        <img :src="this.manga.cover_image" alt="">
                    </div>
                    <div class="info">
                        <h2>{{manga.title}} ({{manga.release_date}})</h2>
                        <span class="rating">Rating: <b>{{(Number(manga.average_rating)/10).toFixed(1)}}/10</b>
                            <span v-if="manga.status=='finished'" style="color:red"> FINISHED</span>
                            <span v-else style="color:green"> ONGOING</span>
                        </span>
                        <p class="manga-description">{{manga.description.split('(Source:')[0]}}</p>
                        <!-- <span class="chapters">
                            <span v-if="manga.chapterCount!=null">chapters: {{manga.chapterCount}}</span>
                            <span v-if="manga.volumeCount!=null">volumes : {{manga.volumeCount}}</span>
                        </span> -->
                    </div>
                    <div class="info-right">
                        <div class="alternate-titles">
                            <span><h3>Alterante Titles</h3></span>
                            <span class="titles">
                                <span v-for="title in manga.alternative.split(';')" :key="title">
                                    {{title}} 
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a :href="'/read/'+manga.title"><button class="read-manga-button" >Read</button></a>
                </div>
            </div>
        </div>
    </div>
</Transition>
</template>


<style>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
.modal-mask{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width:100%;
    z-index: 9998;
    background-color: rgb(0, 0, 0,0.8);  
    transition:opacity 0.2s ease; 
    display: table;
}
.modal-wrapper{
    display: table-cell;
    vertical-align: middle;
}
.modal-container{
    width:80%;
    margin:auto;
    background-color: rgb(0, 0, 0);
    /* padding:20px 30px; */
    box-shadow:0 2px 8px rgba(0,0,0,0.33);
    border-radius:2px;
    transition: all 0.2s ease;
}

.modal-close-button{
    float: right;
}

.modal-enter-from{
    opacity: 0.5;
}
.modal-leave-to{
    opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-header{
    margin:0;
    z-index:0;
}

.modal-close-button{
    position: absolute;
}

.modal-header object{
    margin:0;
    width: 100%;
    opacity: 0.7;
    border-bottom:2px #fff solid;
    z-index: 0;
}
.modal-header img{
    margin:0;
    width: 100%;
    height: 20rem;
    opacity: 0.7;
    border-bottom:2px #fff solid;
    
}

.poster{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.poster img{
    margin: -4rem 0px 0px 3rem ;
    /* height:50%; */
    width: 50%;
}


.modal-body{
    position:relative;
    display:flex;
    /* flex-direction: row; */
    /* justify-content: space-between; */
}

.modal-body h2{
    margin-bottom: 5px;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.modal-body .info .rating span{
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    padding-left:20px;
}
.modal-body .info .manga-description{
    width: 45rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.chapters{
    display: flex;
    flex-direction: column;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.info-right{
    border-left: 2px solid #fff;
    padding-left: 10px;
    margin-left:10px;
}

.titles{
    display: flex;
    padding-left:20px ;
    flex-direction: column;
    justify-content: space-between;
}
.top{
    position: relative;
    display: flex;   
}
[class^="fi-"]:before, [class*=" fi-"]:before, [class^="fi-"]:after, [class*=" fi-"]:after {
    font-size: 3rem;
}
.read-manga-button{
    margin-left: 25%;
    margin-top: 1rem;
    border:0;
    width:10rem;
    height:3rem;
    font-size: large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.read-manga-button:hover{
    background-color: rgb(115, 25, 167);
    color:#fff;
    transition: all 0.2s ease-in;
}
.alternate-titles{
    height:19.2rem;
    overflow:hidden;
}
</style>