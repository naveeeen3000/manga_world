
<script>


export default{
    data(){
        return{
            email: '',
            pass: '',
            error:'',
        }
    },
    methods: {
        async submitDetails(){
            let payload={
                "email":this.email,
                "password": this.pass,  
            }
            let url=process.env.VUE_APP_BASE_URL+'accounts/user/login'
            let otherparams={
                "headers": {
                    "Authorization":"Token "+process.env.VUE_APP_API_KEY,
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify(payload),
                "method": "POST"
            }
            const res=await fetch(url,otherparams)
            let response=await res.json()
            if(res.status==200){
                this.$storage.setStorageSync('Token',response.data.token)
                window.location='/'
            }
            else if(res.status==404){
                this.error='User '+response.detail
            }
            else{
                this.error=response.error.message
            }
        }
    }
}


</script>




<template>
    <div class="signup">
    <div class="bgimage"></div>
        <div v-if="this.$storage.getStorageSync('Token')" class="signup-from">
            <p>You are already logged in.</p>
            <a href="/"><button>Go to Homepage</button></a>
        </div>
        <div v-else class="signup-from">
            <img class="signup-logo" src="../assets/logo.png" alt="not found" >
            <h3 class="form-heading">Login</h3>
            
            <form  action="/login">
                <input v-model="email" type="email" placeholder="your email" required>
                <input v-model="pass" type="password" placeholder="your password" required>
                <p style="color:red">{{this.error}}</p>
                <input class="submit-button" type="submit" value="Signup" @click.prevent="submitDetails()">
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