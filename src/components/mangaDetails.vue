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
                <div class="modal-header">
                    <img v-if="this.manga.coverImage==null" src="../assets/error.png" alt="">
                    <object v-else :data="this.manga.coverImage.small" >
                        <img :src="this.manga.coverImage.original" alt="Just testing.">
                    </object>
                </div>
                <div class="modal-body">
                    <div class="poster">
                        <img :src="this.manga.posterImage.small" alt="">
                        <!-- <h3>{{manga.titles.en||manga.titles.en_jp}}</h3> -->
                    </div>
                    <div class="info">
                        <h3>{{manga.titles.en||manga.titles.en_jp}}</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <slot name="footer">default Footer</slot>
                </div>
                <button @click="$emit('close')" class="modal-close-button">close</button>
            </div>
        </div>
    </div>
</Transition>
</template>


<style>
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
    background-color: #fff;
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

.poster h3{
    margin-left: 3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.modal-body{
    position:relative;
    display:flex;
    /* flex-direction: row; */
    /* justify-content: space-between; */
}

</style>