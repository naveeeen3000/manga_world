<script>

import navBar from "../components/navBar.vue";
import homePage from "../components/home_page.vue"
export default{
  components:{
    navBar: navBar,
    homePage: homePage
  }
}
</script>



<template>
  <header>
    <navBar />
  </header>
  <main>
    <homePage />
  </main>
</template>


<style>
body,html{
  background-color: black;
  color:rgb(168, 172, 173);
}

</style>