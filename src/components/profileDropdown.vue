<script>

export default{
    data(){
        return{
            userData: false
        }
    },
    methods:{
        async getUserDetails(){
            let token=this.$storage.getStorageSync("Token")
            let payload={   
                "token":token
                }
            let url=process.env.VUE_APP_BASE_URL+"accounts/user/details"
            let other_params={
                headers:{
                "Authorization":"Token "+process.env.VUE_APP_API_KEY,
                "Content-Type":"application/json",
                },
                body: JSON.stringify(payload),
                method:"POST"
            }
            const res=await fetch(url,other_params)
            let response=await res.json()
            this.userData=response.user
        },
        logout(){
            this.$storage.clearStorageSync()
            window.location.reload()
        }
    },
    mounted(){    
      this.getUserDetails()
    }
}

</script>

<template>
    <div  class="dropdown-container">
          <div class='dropdown-heading'>
              <div class="profile-pic">
                <img class="profile-pic" src="../assets/user_avatar.png">
              </div>
              <div class="username-div">
                <h4 class="username" v-if="this.userData" >{{this.userData.name}}</h4>
              </div>
          </div>
          <div class="options">
            <a href="#"><div class="option">edit profile</div></a>
            <a href="#" @click="this.logout()"><div class="option">sign out</div></a>
          </div>
        </div>
</template>


<style>
.dropdown-container{
    
}
.dropdown-heading{
    margin:auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:black;
    padding:1rem 1rem 0 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* font-size:large; */
}

.dropdown-heading{
    color:gray;
}

.options{
    display: flex;
    flex-direction: column;
    align-items: stretch; 
    justify-content: space-between;
}
.option{
    padding-left: 0.8rem;
    color:black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: large;
    border:2px solid gray;
    border-radius: 0.3rem;
}

.username{
    color:gray;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>