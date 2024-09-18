<template>
    <div>

          <transition name="fade">
                  <component :is="activeComponent" />
            </transition>
    </div>
</template>

<script setup lang="ts">

const loginView = resolveComponent('Login')
const registerView = resolveComponent('Register')

const componentsMap = {
    loginView: loginView,
    registerView: registerView
}

const appStore = useStore()

const activeComponent = computed(()=>{
    return componentsMap[appStore.currentTab] || loginView
})

</script>

<style scoped lang="scss">

</style>
