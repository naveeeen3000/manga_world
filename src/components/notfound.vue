<script>

import navBar from "./nav.vue"

export default {
    data(){
        return {
            "navBar":navBar
        }
    }
}


</script>



<template>
    <component :is="navBar"/>
    <br><br>
    <h3>Not Found</h3>
</template>