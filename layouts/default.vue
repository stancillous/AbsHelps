<template>
  <div>
    <div
      @click="showMobileNav = !showMobileNav"
      :class="['mobile-overlay', { hideMobileOverlay: !showMobileNav }]"
    ></div>
    <header>
      <!-- don't remove this element -->
      <!-- <div class="mobile-view-hidden"></div> -->
      <nav>
        <transition name="fade">
          <template v-if="appStore.showLoginRegisterView">
            <LoginRegisterView />
          </template>
        </transition>

        <div class="logo">
          <NuxtLink to="/">
            <h3 class="logo-txt">A.helps</h3>
          </NuxtLink>
        </div>

        <div :class="['menu-links', { 'show-mobile-menu': showMobileNav }]">
          <div class="ul-wrp">

            <ul>
              <li><NuxtLink @click="showMobileNav = false" to="/jobs">View jobs</NuxtLink></li>
              <li><a @click="showMobileNav = false" href="">Job Seekers</a></li>
              <li><a @click="showMobileNav = false" href="">Employers</a></li>
              <li><a @click="showMobileNav = false" href="/about-us">About us</a></li>
              <li><a @click="showMobileNav = false" href="mailto:support@gc.com">Help Center</a></li>

            </ul>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div class="signin-wrp">
            <a @click.prevent="appStore.showLoginRegisterView = true" href=""
              >Sign in</a
            >
          </div>
          <div @click="showMobileNav = !showMobileNav" class="mobile-menu-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                fill="rgba(0,0,0, .88)"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </header>

    <slot />

    <footer>
      <div class="footer-wrp">
        <div class="footer-content">
          <!-- <h3>Tailored staffing services <br> with guaranteed quality</h3> -->

          <h3>
            Perfect matches. <br />
            Lifelong professional relationships
          </h3>
          <div>
            <!-- <p>Quick Links</p> -->
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Help center</a></li>
              <li><a href="">Privacy policy</a></li>
              <li><NuxtLink to="">Terms & Conditions</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="img-wrp">
        <img src="../assets/images/two.png" alt="" />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const appStore = useStore();

// variable to tell if to show the mobile nav
const showMobileNav = ref(false);
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
  height: 10rem;
  z-index: 5;
  max-width: 95vw;
  margin: 0 auto;
  display: flex;
  color: black;
  justify-content: space-between;
  
  a{
    color: black;
  }
  nav {
    color: black;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .logo {
      display: grid;
      place-items: center;
      .logo-txt {
        color: black;
        margin-right: 2rem;
        font-size: 1.8rem;
        font-size: 2.5rem;
        // text-transform: lowercase;
        font-weight: 900;
        opacity: .8;
      }
    }

    .menu-links {
      ul {
        height: 100%;
        display: flex;
        align-items: center;

        svg {
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
            color: black;
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
        padding: 0.4rem 2rem;
        font-weight: 500;
      }
    }

    .mobile-menu-btn {
      margin-left: 2rem;
      cursor: pointer;
      display: none;
    }
  }
}

footer {
  // height: 40rem;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  padding: 5rem 1.4rem;

  .footer-wrp {
    max-width: 1500px;
    margin: 1rem auto;
    .footer-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      // border: 1px solid white;
      font-size: 1.4rem;
      h3 {
        font-size: 3rem;
        font-weight: 400;
        line-height: 40px;
        opacity: 0.7;
      }

      div {
        height: 20rem;

        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            list-style-type: none;
            margin-left: -1.4rem;
            // display: inline-block;
            padding: 0.5rem 4rem;
            padding-left: unset;
            a {
              color: white;
              font-size: 1.5rem;
              opacity: 0.8;
              // text-decoration: none;
            }
          }
        }
      }
    }
  }
  .img-wrp {
    img {
      opacity: 0.1;
      width: 100vw;
    }
  }
}

@media screen and (max-width: 850px) {
  // show mobile menu btn

  header {
    .mobile-view-hidden {
      display: none;
    }

    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .menu-links {
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
        transition: all 0.4s ease-in-out;

        
        .ul-wrp{
          display: flex;
          padding-left: 1rem;
          height: 100%;
          align-items: center;

        }
        ul {
          height: 50%;
          align-items: start;
          padding-top: 7rem;
          display: flex;
          flex-direction: column;
          position: relative;

          // svg {
          //   display: block;
          //   position: absolute;
          //   padding: 0.4rem;
          //   cursor: pointer;
          //   width: 2.3rem;
          //   height: 2.3rem;
          //   height: 5rem;
          //   border-radius: 50%;
          //   background-color: rgba(220, 220, 220, 0.424);
          //   right: 2rem;
          //   top: 4.5rem;
          // }
          li {
            padding: 1.4rem 0;
            a {
              // font-size: 2rem;
              color: black;
              text-transform: capitalize;
            }
          }
        }
      }

      // class to be toggled to show/hide the mobile menu nav
      .show-mobile-menu {
        display: block;
        transform: translateX(0%);
        opacity: 1;
      }

      .signin-wrp {
        margin-top: unset;
        a {
          border-radius: 2.4rem;
          padding: 0.5rem 1.5rem;
          font-size: 1.2rem;
        }
      }
      .mobile-menu-btn {
        display: block;
      }
    }
  }

  footer .footer-wrp .footer-content {
    grid-template-columns: 1fr;

    h3 {
      br {
        display: none;
      }
    }
    div {
      ul {
        padding-top: 4rem;
      }
    }
  }
}
</style>
