<script>
    import Home from "./home.vue"
    import signin from "./signin.vue"
    import login from "./login.vue"
    import notFound from "./components/notfound.vue"

    const routes={
        "/":Home,
        "/signin":signin,
        '/login':login
    }

    export default{
        data(){
            return {
                currentPath: window.location.hash
            }
        },
        computed:{
            currentView(){
                return routes[this.currentPath.slice(1) || "/"] || notFound
            }
        },
        mounted(){
            window.addEventListener('hashchange',()=>{
                this.currentPath=window.location.hash
            })
        }
    }
</script>



<template>
        <component v-bind:is="currentView"/>
</template>