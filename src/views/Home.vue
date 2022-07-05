<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { loadAllShows } from '../api'
  import store from '../store'
  import ShowsListByGenre from '../components/shows/ShowsListByGenre.vue'
  import SearchBar from '@/components/searchbar/SearchBar.vue';

  onMounted(async () => {
    const res = await loadAllShows()
    if (res) store.shows.init(res);
  })
</script>

<template>
  <div>
    <SearchBar />
    <ShowsListByGenre v-for="(genre, index) in store.shows.genres" v-bind:key="index" :genre="genre" />
  </div>
</template>

<style lang="scss" scoped>

</style>
