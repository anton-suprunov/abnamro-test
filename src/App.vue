<script lang="ts" setup>
  import store from './store'
  import Header from './components/header/Header.vue';
</script>

<template>
  <div class="app" :class="{ 'app_dark': store.ui.theme === 'dark' }">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/styles/imports";

  html, body, #root { padding: 0; margin: 0; height: 100% }
  .app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #fff;
    min-height: 100%;
    transition: background-color 150ms linear, color 150ms linear;

    &.app_dark {
      background-color: #1e1e1e;
      color: #fff;  
    }
  }

  .container {
    padding: 24px;

    @include mq('mobile') {
      padding: 16px
    }
  }
</style>