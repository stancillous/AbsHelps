<template>
    <div>

            <div
        @click="showMobileNav = !showMobileNav"
        :class="['mobile-overlay', { hideMobileOverlay: !showMobileNav }]"
      ></div>
        <header>
        <!-- don't remove this element -->
        <div class="mobile-view-hidden"></div>
        <nav>

          <transition name="fade">
            <template v-if="appStore.showLoginRegisterView">
              <LoginRegisterView/>
            </template>
          </transition>

          <div class="logo">
            <NuxtLink to="/">
              <h3 class="logo-txt text-light">A.helps</h3>
            </NuxtLink>
          </div>

          <div :class="['menu-links', {'show-mobile-menu': showMobileNav}]">
            
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Solutions</a></li>
              <li><a href="">Process</a></li>

 <svg
  @click="showMobileNav = ! showMobileNav"
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              class="icon-styleable-color"
              fill="rgba(0, 0, 0, .88)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.58579 8.00008L3.05025 11.5356C2.65973 11.9261 2.65973 12.5593 3.05025 12.9498C3.44078 13.3404 4.07394 13.3404 4.46447 12.9498L8 9.41429L11.5355 12.9498C11.9261 13.3404 12.5592 13.3404 12.9497 12.9498C13.3403 12.5593 13.3403 11.9261 12.9497 11.5356L9.41421 8.00008L12.9497 4.46455C13.3403 4.07402 13.3403 3.44086 12.9497 3.05033C12.5592 2.65981 11.9261 2.65981 11.5355 3.05033L8 6.58587L4.46447 3.05033C4.07394 2.65981 3.44078 2.65981 3.05025 3.05033C2.65973 3.44086 2.65973 4.07402 3.05025 4.46455L6.58579 8.00008Z"
            ></path>
          </svg>
            </ul>

            
          </div>
       
          <div class="d-flex align-items-center">
            <div class="signin-wrp">
              <a @click.prevent="appStore.showLoginRegisterView = true" href="">Sign in</a>
            </div>
            <div @click="showMobileNav = ! showMobileNav" class="mobile-menu-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="rgba(255, 255,255, .88)"></path></svg>
            </div>

          </div>
        </nav>
      </header>

        <slot/>

              <footer>
        <div class="footer-wrp">
          <div class="footer-content">
            <!-- <h3>Tailored staffing services <br> with guaranteed quality</h3> -->

              <h3>Perfect matches. <br> Lifelong professional relationships</h3>
            <div>
              <!-- <p>Quick Links</p> -->
              <ul>
                <li><a href="">About us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="img-wrp">
          <img src="../assets/images/two.png" alt="">
        </div>
      </footer>
    </div>
</template>

<script setup lang="ts">

const appStore = useStore()

// variable to tell if to show the mobile nav
const showMobileNav = ref(false)


</script>

<style scoped lang="scss">


// to be shown on mobile when user clicks on menu btn
.mobile-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  height: 100vh;
  width: 100vw;
}

// class to hide mobile overlay
.hideMobileOverlay {
  display: none;
}


header {
  height: 5rem;
  z-index: 5;
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  nav {
    color: black;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    .logo{
      display: grid;
      place-items: center;
      .logo-txt {
        margin-right: 2rem;
        font-size: 1.8rem;
        // text-transform: lowercase;
        font-weight: 900;
      }
    }

    .menu-links {

      ul{
        height: 100%;
        display: flex;
        align-items: center;


        svg{
          display: none;
        }

        li {
          all: unset;
          list-style: none;
          display: inline-block;
          opacity: 0.8;
          padding: 0 1rem;
          font-size: 1.4rem;
  
          a {
            color: white;
            font-size: 1.7rem;
  
          }
        }
      }
    }
    .signin-wrp {
      margin-left: 2rem;
      a {
        font-size: 1.5rem;
        border-radius: 10rem;
        background-color: var(--priColorGreen);
        background-color: #f5b083;
        color: black;
        padding: .4rem 2rem;
        font-weight: 500;
      }
    }

    .mobile-menu-btn{
      margin-left: 2rem;
      cursor: pointer;
      display: none;
    }
  }
}


footer{
  // height: 40rem;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  padding: 5rem 1.4rem;
  
  .footer-wrp{

    max-width: 1500px;
    margin: 1rem auto;
    .footer-content{
      display: grid;
      grid-template-columns: 1fr 1fr;
      // border: 1px solid white;
      font-size: 1.4rem;
      h3{
        font-size: 3rem;
        font-weight: 400;
        line-height: 40px;
        opacity: .7;
      }

      div{
        height: 20rem;

        ul {
          display: flex;
          flex-wrap: wrap;
          li{
            list-style-type: none;
            margin-left: -1.4rem;
            // display: inline-block;
            padding: .5rem 4rem;
            padding-left: unset;
            a{
              color: white;
              font-size: 1.5rem;
              opacity: .8;
              // text-decoration: none;
            }

          }
        }
      }
    }
  }
  .img-wrp{
    img{
      opacity: .1;
      width: 100vw;
    }
  }
}


@media screen and (max-width: 800px) {


    // show mobile menu btn

  header{

    .mobile-view-hidden{
      display: none;
    }

    nav{
      width: 100%;
      display: flex;
      justify-content: space-between;
          .menu-links{
            position: fixed;
            top: -2rem;
            z-index: 3;
            // left: 0;
            right: 0;
            bottom: 0;
            height: 100vh;
            width: 70vw;
            background-color: white;
            // display: none;
            transform: translateX(100%);
            opacity: 0;
            transition: all .4s ease-in-out;

      
            ul{
              height: 80%;
              align-items: start;
              padding-top: 7rem;
              display: flex;
              flex-direction: column;
              position: relative;

              svg{
                display: block;
                position: absolute;
                padding: .4rem;
                cursor: pointer;
                width: 2.3rem;
                height: 2.3rem;
                border-radius: 50%;
                background-color: rgba(220, 220, 220, 0.424);
                right: 2rem;
                top: 4.5rem;
              }
              li{
                padding: 1.4rem 0;
                a{
                  // font-size: 2rem;
                  color: black;
                  text-transform: uppercase;
                }
              }
      
            }
          }
      
          // class to be toggled to show/hide the mobile menu nav
          .show-mobile-menu{
            display: block;
            transform: translateX(0%);
            opacity: 1;
          }
      
          .signin-wrp{
            margin-top: unset;
            a{
              border-radius: 2.4rem;
              padding: .5rem 1.5rem;
              font-size: 1.2rem;
            }
          }
          .mobile-menu-btn{
            display: block;
          }

    }


  }

      footer .footer-wrp .footer-content{
      grid-template-columns: 1fr;
  
      h3{
        br{
          display: none;
        }
      }
      div{
        ul{
          padding-top: 4rem;
        }
      }
    }
}


</style>