<script>
import navBar from "./components/nav.vue"
import signin from "./components/signup.vue"
export default{
    data(){
        return{
            comps:{'nav': navBar,'signin':signin}
        }
    }
}
</script>


<template>
    <component :is="comps.nav"/>
    <component :is="comps.signin"/>
</template>