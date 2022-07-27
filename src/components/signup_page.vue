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
 
</style>