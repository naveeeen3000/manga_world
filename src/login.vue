<script>
import navBar from "./components/nav.vue"
import login from "./components/login.vue"
export default{
    data(){
        return{
            comps:{'nav': navBar,'login':login}
        }
    }
}
</script>


<template>
    <component :is="comps.nav"/>
    <component :is="comps.login"/>
</template>