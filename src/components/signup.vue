<template>
    <div class="signup">
        <form action="">
        <div class="signup-form">
                <input type="text" placeholder="your name">
                <input type="email" placeholder="your email">
                <input type="password" placeholder="your password">
                <button  type="submit">signup</button>
        </div>
        </form>
        <div class="image">
            <img src="../assets/login_image.jpg" alt="not found" width="800px" height="400  ">
        </div>
    </div>
</template>



<style>


.signup{
    margin: 40px;
    box-shadow:0 15px 30px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    
}
.image{
    margin:0px;
}

.signup-form{
    /* margin-right:auto; */
    padding:80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

input{
    
}

</style>