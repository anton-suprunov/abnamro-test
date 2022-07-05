<script lang="ts" setup>
  import { ref, watch, defineProps } from 'vue';
  import { debounce } from 'lodash';
  import { useRouter } from 'vue-router';

  const props = defineProps<{ term?: string }>()
  const searchTerm = ref<string>(props.term || "")
  const router = useRouter()

  function cleanTerm() {
    searchTerm.value = ''
    router.push("/")
  }

  const watchCb = debounce(async () => {
    if (searchTerm.value.length > 0) {
      router.push(`/search/${searchTerm.value}`)
    } else {
      router.push("/")
    }

  }, 200)

  watch(searchTerm, watchCb)
</script>

<template>
  <div class="searchbar">
    <input type="text" v-model="searchTerm" placeholder="Search for shows..." class="input" />
    <span class="close-icon" @click="cleanTerm" v-if="searchTerm" />
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .searchbar {
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 0 0 16px;
    width: 220px;
    
    @include mq('mobile') {
      width: 100%;
    }
  }

  .input {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, .2);    
    padding: 0 24px 0 8px;
    outline: none;

    .app_dark & {
      border-color: #1e1e1e;
    }
  }

  .close-icon {
    background-image: url('../../assets/close-icon.svg');
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
</style>