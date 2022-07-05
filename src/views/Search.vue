<script lang="ts" setup>
  import { onMounted, watch, ref } from 'vue'
  import store from '../store'
  import SearchBar from '@/components/searchbar/SearchBar.vue';
  import { useRoute } from 'vue-router';
  import { searchShows } from '../api';
  import { SearchResult } from '@/types/search';
  import ShowsListItem from '@/components/shows/ShowsListItem.vue';

  const route = useRoute()
  const results = ref<SearchResult[]>([])

  async function loadSearchResults(term: string) {
    if (!term) return;

    const res = await searchShows(term);
    if (res) results.value = res;
  }

  onMounted(async () => {
    loadSearchResults(route.params.term as string)
  })

  watch(() => route.params.term, (term) => {
    loadSearchResults(term as string)
  })
</script>

<template>
  <div>
    <SearchBar :term="(route.params.term as string)" />
    <ul class="search-container">
      <ShowsListItem v-for="result in results" v-bind:key="result.show.id" :show="result.show" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .search-container {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    gap: 16px 0;
    margin-top: 24px;

    @include mq('tablet') {
      width: 455px;
      margin: 0 auto;
      transform: translateX(16px);
    }

    @include mq('mobile') {
      width: 320px;
      transform: translateX(8px);
    }

    @include mq('smallest') {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
