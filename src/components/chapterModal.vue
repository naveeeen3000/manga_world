<script>
export default{
    props:{
        chapter: Object,
        show: Boolean,
    },
    data(){
        return{
            Key: Object.keys(this.chapter)[0]
        }
    }
}
</script>



<template>
    <Transition name="chapter-modal">

    <div v-if="this.show" class="chapter-modal-mask">
        <div class="chapter-modal-wrapper">
            <div class="chapter-modal-container">
                <div class="top">
                    <a @click="$emit('close')" href="#"><i class="fi fi-rr-arrow-small-right"></i></a>
                    <h2>{{key}}</h2>
                    
                </div>
                <div class="chapter-modal-body">
                    <!-- <p>{{this.chapter}}</p> -->
                    <div vi-if="chapter" v-for="image in chapter[Object.keys(chapter)[0]]" :key="image" class="manga-image">
                        <img :src="image" alt="no image">
                        <!-- {{image}} -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</Transition>
</template>


<style>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
.chapter-modal-mask{
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
.chapter-modal-wrapper{
    display: table-cell;
    vertical-align: middle;
}
.chapter-modal-container{
    width:80%;
    margin:auto;
    background-color: rgb(0, 0, 0);
    /* padding:20px 30px; */
    box-shadow:0 2px 8px rgba(0,0,0,0.33);
    border-radius:2px;
    transition: all 0.2s ease;
}

.chapter-modal-close-button{
    float: right;
}

.chapter-modal-enter-from{
    opacity: 0.5;
}
.chapter-modal-leave-to{
    opacity: 0;
}
.chapter-modal-enter-from .chapter-modal-container,
.chapter-modal-leave-to .chapter-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.chapter-modal-body{
    display:flex;
    flex-direction: column;
    overflow:scroll;
    height:50rem;
    width:100%;
}
</style>