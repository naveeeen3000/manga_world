<script>
import navBar from './components/nav.vue'

export default{
  data(){
    return{
      comps: {
        'navBar':navBar
      }
    }
  }
}


</script>



<template>
  <header>
    <component v-bind:is="comps.navBar" />
  </header>
</template>