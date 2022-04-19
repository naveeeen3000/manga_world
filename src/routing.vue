<script>
    import Home from "./home.vue"
    import signin from "./signin.vue"
    import login from "./login.vue"
    import mangaDetails from "./mangaDetails.vue"
    import notFound from "./components/notfound.vue"

    const routes={
        "/":Home,
        "/signin":signin,
        '/login':login,
        "/manga/": mangaDetails,
        "/not_found":notFound
    }

    export default{
        data(){
            return {
                currentPath: window.location.pathname
            }
        },
        computed:{
            currentView(){
                console.log(this.currentPath)
                return routes[this.currentPath || "/"] || notFound
            }
        },
        mounted(){
            window.addEventListener('hashchange',()=>{
                this.currentPath=window.location.pathname
            })
        }
    }
</script>



<template>
        <component v-bind:is="currentView"/>
</template>