<template>
    <div>

        <div class="login-wrp">
            <div class="login-wrp-container">
              <h2 class="text-center pb-4">Sign In</h2>
              <form action="">
                <div>
                  <label for="email">Email</label> <br>
                  <input type="email" name="" id="email">
                </div>
    
                <div>
                  <label for="pwd">Password</label> <br>
                  <input type="password" id="password">
                </div>
                <div class="btns">
                  <button type="submit">Sign in</button>
                </div>
                <div class="forgot-pwd text-center text-capitalize">
                  <div>
                    <a class="pb-3" href="">forgot password?</a> <br>
                  </div>
                  <a href="">create an account</a>
                </div>
                <p class="text-center opacity-75">or</p>
                <div class="google-signin text-center">
                    <button type="button" class="login-with-google-btn" >
  Sign in with Google
</button>
                  <!-- <p>Sign in with google</p> -->
                </div>
    
              </form>
            </div>
          </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.login-wrp{
  position: absolute;
  z-index: 3;
  top: 6rem;
  right: 2rem;
  border-radius: .4rem;
  background-color: white;
  padding: 4rem 2rem;
  width: 33rem;

  .login-wrp-container{
    font-size: 1.3rem;
    h2{

    }
    form{

      a{
        color: black;
        &:hover{
          text-decoration: underline !important;
        }
      }
      div{
        margin: 1.5rem 0;
        // border: 1px solid;
      }
      label{
        
      }
      input{
        margin: 1.5rem 0;
        margin-bottom: 3rem;
        border: none;
        border-bottom: 1px solid black;
        width: 100%;

        &:focus{
          outline: none;
        }
      }
      button{
        border: none;
        border-radius: 0rem !important;
        cursor: pointer;
        padding: 1rem 0;
        background-color: var(--priColorGreen);
        color: black;
        width: 100%;
        margin-bottom: 2rem;
      }

      .login-with-google-btn {
  cursor: pointer;    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  width: 80%;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

}

      
    }
  }

}
</style>