<script setup>
import navBar from "../components/navBar.vue"
import SignUp from "../components/signup_page.vue"



</script>

<template>
    <header>
        <navBar />
    </header>
    <main>
        <SignUp />
    </main>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anek+Telugu&display=swap');

nav{
  background-color: rgb(234, 109, 64);
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
}
nav div{
  padding:0px;
  color:white;
}
.accounts{
  font-size: 20px;
  font-family: 'Anek Telugu', sans-serif;
  background-color: black;
  padding:10px;
}
.accounts a{
  padding-left: 20px;
}
nav a{
  color:white;
  text-decoration: none;
}
.heading{
    font-size: 30px;
    font-family: 'Fredoka One', cursive;
    
}
.right{
  display: flex;
}
.searchBar{
  font-size: 15px;
  border:0px;
  height: 3em;
  border:1px solid black;
  width:25em;

}
.results{
  background-color: black;
  position: absolute;
  top: 50px;
  /* display: flex; */
  width: 23.9em;
}
.search-list{
  padding: 0px;
  margin:0px;
  display:flex;
  flex-direction: row;
  list-style: none;
}
.search-poster{
  margin-left: 4px;
  margin-top: 2px;
}
.search-poster img{
  border-radius: 50%;
  height: 60px;
  width: 60px;
}
.search-info{
  display:flex;
  flex-direction: column;
  margin-left: 6px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.search-list:hover{
  background-color: red;
}


</style>