<script>


export default{
    data(){
        return{
            name: '',
            email: '',
            pass: '',
            error:'',
            signedIn: false
        }
    }, 
    methods: {
        async submitDetails(){
            let payload={
                "name":this.name,
                "email":this.email,
                "password": this.pass,  
            }
            console.log(payload)
            let url=process.env.VUE_APP_BASE_URL+"/accounts/user/create"
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
            if(res.status==201){
                this.signedIn=true
            }
            else{
                
                this.error=response.error.message
            }
        }
    }
}


</script>




<template>
    <div v-if="emailVerifyAlert" class="alert alert-success alert-dismissible fade show" @load="verifyuser()" role="alert">
        <strong>Congratulations!</strong> A verification mail has been sent to {{this.email}}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
    <div class="signup">
    <div class="bgimage"></div>
        <div v-if="!signedIn" class="signup-from">
            <img class="signup-logo" src="../assets/logo.png" alt="not found" >
            <h3 class="form-heading">Signup</h3>
            <form action="">
                <input v-model="name" type="text" placeholder="your name">
                <input v-model="email" type="email" placeholder="your email">
                <input v-model="pass" type="password" placeholder="your password">
                <p>{{error}}</p>
                <input class="submit-button" @click.prevent="submitDetails(ele)" type="submit" value="Signup">
            </form>
        </div>
        <div v-if="signedIn" class="signup-from">
            <h3>you've successfully signed up for <b>MangaWorld</b></h3>
            <div class="redirect-buttons">
                            <a href="/"><button class="btn btn-success">go home</button></a> 
            <a href="/login"><button class="btn btn-success">login</button></a>
            </div>
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
    width: 30%;
    padding: 20px;
    
}
.signup-logo{
    height:200px;
    width:300px;
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

.redirect-buttons{
    display: flex;
    justify-content: space-evenly;
}
</style>