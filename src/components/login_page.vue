
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
            console.log(url)
            const res=await fetch(url,otherparams)
            let response=await res.json()
            console.log(response)
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
            
            <form  action="">
                <input v-model="email" type="email" placeholder="your email" required>
                <input v-model="pass" type="password" placeholder="your password" required>
                <p style="color:red">{{this.error}}</p>
                <input class="submit-button" type="submit" value="Signup" @click.prevent="submitDetails()">
            </form>
        </div>
    </div>
</template>



<style>
 

</style>