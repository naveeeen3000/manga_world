<script>
import HomeView from "./components/home_page.vue"
import LoginView from "./views/loginView.vue"
import SignupView from "./views/signupView.vue"
import navBar from './components/navBar.vue'
import ReadView from './components/readManga.vue'

const routes = {
  '/': HomeView,
  '/signup': SignupView,
  '/login':LoginView,
  '/read': ReadView
}


export default{
  data(){
    return{
      currentPath:window.location.hash
    }
  },
  components:{
      HomeView:HomeView,
      // LoginView:LoginView,
      // SignupView:SignupView,
      navBar:navBar
  },
  computed:{
    currentView(){
      return routes["/"+(this.currentPath.split('/')[1] || '')]
      // console.log(routes[this.currentPath.slice(1) || '/'])
    }
  },
  mounted(){
    window.addEventListener('hashchange', () => {
    this.currentPath = window.location.hash
		})
  }
}
</script>



<template>
  <navBar/>
  <!-- <HomeView /> -->
  <component :is='currentView'/>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
body{
  margin:0px;
}
body,html{
  background-color: black;
  color:rgb(168, 172, 173);
}
.bgimage{
    background-image: url("./assets/signup_image.png");    
    filter: blur(4px);
    -webkit-filter: blur(4px);
    height: 800px; 
    margin:40px;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

button{
    width:9 rem;
    height:3rem;
    font-size: medium;

}

.signup-from{
    background-color: rgb(0,0,0); 
    background-color: rgba(0, 0, 0, 0.8); 
    color: white;
    font-weight: bold;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    border-radius: 5px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 30rem;
    padding: 20px;
    
}

.signup-logo{
    height:10rem;
    width:15rem;
}

img{
    margin-left: 25%;
}

.form-heading{
    margin: auto;
    margin-left: 45%;
    font-size: large;
    font-family: 'Prompt', sans-serif;
}

.signup-from form{
    display: flex;
    padding:20px;
    flex-direction: column;
    
    justify-content: space-between;
}
.signup-from p{
    margin:auto;
    font-size:large;
    font-family: 'Prompt',sans-serif;
}
.signup-from input{
    margin: auto;
    font-size: large;
    margin-bottom: 15px;
    color:white;
    background-color: rgb(84, 84, 84,0.8);
    border-radius: 6px;
    border: 0px;
    width: 80%;
    height: 40px;
}

.signup-from input[type=submit]{
    margin: auto;
    font-size: x-large;
    margin-top:10px;
    /* color:black; */
    border:0px;
    background-color: rgb(0, 229, 255);
    width: 80%;
    height: 40px;
}
</style>