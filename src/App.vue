<template>
  <div id="app">
    <header-tab></header-tab>
    <img src="./assets/logo.png">
    <menu-list></menu-list>
    <router-view class="article"></router-view>
  </div>
</template>

<script>
import HeaderTab from './components/header.vue'
import menuList from './components/menus.vue'
export default {
  name: 'app',
  components:{
    HeaderTab,
    menuList
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.article{
  margin-left:210px;
}
</style>
