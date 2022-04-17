<script>

export default{
    data(){
        return{
            email:'',
            pass:'',
        }
    }
}


</script>


<template>
    <div class="signup">
    <div class="bgimage"></div>
        <div class="signup-from">
            <img src="../assets/logo.png" alt="not found" height="200px" width="300px">
            <h3 class="form-heading">Log in</h3>
            <form  action="">
                <input :value="email" type="email" placeholder="your email">
                <input :value="pass" type="password" placeholder="your password">
                <button class="submit-button"  type="submit">Login</button>
        </form>
        </div>
    </div>
</template>



<style>
 @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
.bgimage{
    background-image: url("../assets/signup_image.png");    
    filter: blur(4px);
    -webkit-filter: blur(4px);
    height: 800px; 
    margin:40px;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.signup-from{
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.8); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    border-radius: 5px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 30%;
    padding: 20px;
    
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

.submit-button{
    margin: auto;
    font-size: large;
    margin-top:10px;
    border:0px;
    background-color: rgb(0, 229, 255);
    width: 80%;
    height: 40px;
}

</style>