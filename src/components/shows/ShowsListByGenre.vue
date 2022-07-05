<script lang="ts" setup>
  import store from '@/store';
  import { ShowDetails } from '@/types/shows';
  import { defineProps, onMounted, onUnmounted, ref } from 'vue'
  import ShowsListItem from './ShowsListItem.vue';

  const props = defineProps<{ genre: string }>()
  const shows = ref<ShowDetails[]>(store.shows.getShowsByGenre(props.genre))
  const list = ref(null)
  const showLeftShadow = ref<boolean>(false)
  const showRightShadow = ref<boolean>(false)

  function onScroll(e: any) {
    const scrollLeft = e.target.scrollLeft
    const fullScrollWidth = scrollLeft + e.target.offsetWidth
    const scrollWidth = e.target.scrollWidth
    
    if (fullScrollWidth + 50 >= scrollWidth) showRightShadow.value = false; else showRightShadow.value = true;
    if (scrollLeft <= 20) showLeftShadow.value = false; else showLeftShadow.value = true;
  }

  onMounted(() => {
    if (!list.value) return;
    const listEl = (list.value as HTMLElement);
    listEl.addEventListener('scroll', onScroll);
    showRightShadow.value = listEl.scrollWidth > listEl.clientWidth;
  })
    
  onUnmounted(() => {
    if (!list.value) return;
    (list.value as HTMLElement).removeEventListener('scroll', onScroll)
  })
</script>

<template>
  <div class="shows">
    <h3 class="title">{{genre}}</h3>
    <div class="wrap" :class="{ 'wrap_left-shadow': showLeftShadow, 'wrap_right-shadow': showRightShadow }">
      <ul class="list" ref="list">
        <ShowsListItem v-for="show in shows" v-bind:key="show.id" :show="show" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .shows {
    margin-bottom: 32px;
  }

  .title {
    margin: 0 0 16px;
  }

  .wrap {
    position: relative;

    &.wrap_left-shadow:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      min-width: 30px;
      height: 295px;
      background: linear-gradient(270deg, transparent, rgba(255, 255, 255, 0.5));
      z-index: 1;

      .app_dark & {
        background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.5));
      }
    }

    &.wrap_right-shadow:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      min-width: 30px;
      height: 295px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
      
      z-index: 1;

      .app_dark & {
        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5));
      }
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow-x: auto;
    padding-bottom: 8px;
  }
</style>