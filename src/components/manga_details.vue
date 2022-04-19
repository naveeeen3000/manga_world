<script>


export default{
    data(){
        return{
            manga_id: (window.location.search).slice(1).split("=")[1],
        }
    },
    computed: {
        async  manga(){
            let url="http://127.0.0.1:8000/api/v1/manga/details/?manga_id="+this.manga_id
            let params={
                "headers":{"Authorization":"Token "+import.meta.env.VITE_API_KEY}
            }
            const res=await fetch(url,params)
            const response=await res.json()
            let data= await response.data
            console.log(data)
            if (res.status==200){
                return data
            }
            return false
        }
    }
}

</script>



<template>
    <div class="manga-details">
        <p v-bind:value="manga"></p>
    </div>
</template>