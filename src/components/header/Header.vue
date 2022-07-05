<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import ThemeSwitch from './ThemeSwitch.vue';
  const router = useRouter()

  function onTitleClick() {
    router.push('/')
  }
</script>

<template>
  <header class="header">
    <router-link to="/" class="logo"></router-link>
    <p @click="onTitleClick">TEST ASSIGNMENT</p>
    <ThemeSwitch />
  </header>  
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .header {
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    padding: 0 24px;
  }

  .logo {
    background-image: url('../../assets/logo-abn-amro.svg');
    background-size: contain;
    width: 120px;
    height: 30px;
    background-repeat: no-repeat;

    @include mq('tablet') {
      display: none
    }
  }

  p {
    color: #868686;
    font-weight: 600;
    padding-left: 16px;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;

    @include mq('mobile') {
      font-size: 14px
    }

    .app_dark & { color: #fff }
  }
</style>