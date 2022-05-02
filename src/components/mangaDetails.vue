<script>
    export default{
        props:{
            manga_id: String,
            show: Boolean
        },
        data(){
            return{
                manga: false
            }
        },
        methods:{
            async get_manga(){
                let url=process.env.VUE_APP_BASE_URL+'api/manga/details'
                let other_params={
                    Headers:{
                        Authorization:'Token '+process.env.VUE_APP_API_KEY,
                        "Content-Type": "aplication/json",
                    },
                    method: "GET"
                }
                const response=await fetch(url,other_params)
                const res=await response.json()
                let out=res['data']
                if(response.status!=200){
                    this.manga=false
                }
                else{
                    this.manga=out
                }
            }
        },
        beforeMount(){
            // this.get_manga()
        }
    }
</script>


<template>
<Transition name="modal">
    <div v-if="this.show" class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">default header</slot>
                </div>
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">default Footer</slot>
                </div>
                <button @click="$emit('close')" class="modal-close-button"></button>
            </div>
        </div>
    </div>
</Transition>
</template>


<style>
.modal-mask{
    position:fixed;
    z-index: 9998;
    align-self: center;
}
</style>