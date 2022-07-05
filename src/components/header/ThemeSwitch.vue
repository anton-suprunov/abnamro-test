<script lang="ts" setup>
  import store from '../../store'

  function onSwitch() {
    store.ui.switchTheme();
  }
</script>

<template>
  <div class="switch" :onClick="onSwitch">
    <span class="text">Switch to {{ store.ui.theme === 'light' ? 'dark' : 'light' }} theme</span>
    <span class="logo" />
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .switch {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-left: auto;
    cursor: pointer;
  }

  .text {
    @include mq('tablet') {
      display: none;
    }
  }

  .logo {
    background-image: url('../../assets/dark-theme.svg');
    width: 24px;
    height: 24px;
    background-size: 100% 100%;
    margin-left: 8px;
    background-repeat: no-repeat;

    .app_dark & { background-image: url('../../assets/light-theme.svg'); }
  }
</style>