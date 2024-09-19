<template>
  <div>
    <div
      v-if="appStore.showLoginRegisterView"
      @click="appStore.showLoginRegisterView = false"
      class="login-overlay"
    ></div>
    <div class="login-wrp">
      <div class="login-wrp-container">
        <div
          style="cursor: pointer"
          @click="appStore.showLoginRegisterView = false"
          class="close-login-wrp"
        >
          <svg
            width="15px"
            height="15px"
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
        </div>

        <h2 class="text-center pb-4">Create an account</h2>
        <form action="">
          <div>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email Address"
            />
          </div>

          <div>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Confirm password"
            />
          </div>

          <div class="btns">
            <button type="submit">Create account</button>
          </div>
          <p class="text-center opacity-75">or</p>
          <div class="google-signin text-center">
            <GoogleAuth />
            <AppleAuth />
          </div>

          <div class="text-center">
            <p>
              Have an account?
              <span
                style="cursor: pointer"
                @click="appStore.currentTab = 'loginView'"
                class="text-decoration-underline"
                href=""
                >Sign in</span
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appStore = useStore();
</script>

<style scoped lang="scss">
// overlay to show when login bar is shown
.login-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
}

.login-wrp {
  position: fixed;
  z-index: 3;
  top: 0;
  top: -2rem;
  right: 0;
  border-radius: 0.4rem;
  background-color: white;
  padding: 4rem 2rem;
  width: 50vw;
  height: 200vh;

  .login-wrp-container {
    // border: 2px solid red;
    font-size: 1.4rem;
    max-width: 380px;
    margin: 6rem auto;

    .close-login-wrp {
      position: absolute;
      cursor: pointer;
      top: 4rem;
      background-color: whitesmoke;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      left: 2rem;
    }

    form {
      a {
        color: black;
        &:hover {
          text-decoration: underline !important;
        }
      }
      div {
        margin: 1.5rem 0;
        // border: 1px solid;
      }

      input {
        // margin: 1rem 0;
        margin-top: 2rem;
        // border-bottom: 1px solid black;
        padding: 1.8rem 1rem;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 1rem;
        width: 100%;

        &:focus {
          outline: none;
        }
      }

      .btns {
        margin-top: 3rem;
      }
      button {
        border: none;
        // border-radius: 0rem !important;
        border-radius: 10rem;
        cursor: pointer;
        padding: 1.5rem 1rem;
        font-size: 1.4rem;
        background-color: var(--priColorGreen);
        // background-color: var(--seco);
        color: black;
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .login-wrp {
    width: 100vw;
  }
}
</style>
