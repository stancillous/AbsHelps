export const useStore = defineStore("app_state", {
  state: () => ({
    currentTab: "loginView", /**tells us which component to show (login or register) */
    showLoginRegisterView: false, /**variable to tell us whether to show/hide the login/sign up components */

  }),
  actions: {
    
  }
})
