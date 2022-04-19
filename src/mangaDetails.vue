<script>
import navBar from "./components/nav.vue"
import manga_details from "./components/manga_details.vue"

export default{
    data(){
        return{
            comps:{'navBar':navBar,"manga_details":manga_details}
        }
    }
}

</script>


<template>
    <component :is="comps.navBar"/>
    <component :is="comps.manga_details"/>
    
</template>