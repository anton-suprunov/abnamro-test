<script lang="ts" setup>
  import store from '@/store';
  import { ShowDetails } from '@/types/shows';
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import { loadShowDetails } from '../api'

  const route = useRoute()
  const router = useRouter()
  const show = ref<ShowDetails>();

  function goBack() {
    router.back()
  }

  onMounted(async () => {
    if (route.params.showId) {
      const storedShow = store.shows.getShowById(route.params.showId as string)
      if (storedShow) {
        show.value = storedShow; 
      } else {
        const res = await loadShowDetails(route.params.showId as string)
        if (res) show.value = res;
        console.log(show.value)
      }
    }
  })
  
</script>

<template>
  <div class="show">
    <span class="back" @click="goBack">&laquo; Back</span>
    <div class="details">
      <span class="image" :style="{ backgroundImage: `url(${show?.image.original})` }" />
      <div class="description">
        <h1 class="title">{{ show?.name }}</h1>
        <div class="highlight">
          <strong>Rating: {{ show?.rating.average }}</strong>
          <span class="year">{{ show?.premiered.split('-')[0] }}</span>
          <span class="network">{{ show?.network.name }}</span>
        </div>
        <div class="genres">{{show?.genres.join(', ')}}</div>
        <div class="summary" v-html="show?.summary" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .back {
    display: block;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .details {
    display: flex;

    @include mq("tablet") {
      flex-direction: column; 
    }
  }

  .image {
    min-width: 300px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: contain;

    @include mq("tablet") {
      align-self: center;
      height: 400px;
      background-position: 50% 50%;
      max-width: 100%;
      width: 100%;
      min-width: auto;
    }
  }

  .description {
    margin: 0 0 0 24px;
    max-width: 800px; 

    @include mq("tablet") {
      margin: 24px 0 0;
    }
  }

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;

    @include mq("tablet") {
      font-size: 20px;
    }
  }

  .year {
    font-weight: 400;
    font-size: 18px;
    margin-left: 16px;
    color: #444;
    .app_dark & {
      color: #868686;
    }
  }

  .highlight {
    margin-top: 12px;
    color: #019286;
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  .genres {
    font-style: italic;
    margin-top: 12px;
    color: #444;

    .app_dark & {
      color: #868686;
    }
  }

  .summary {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: #444;
    p { margin: 0 0 10px }

    .app_dark & {
      color: #868686;
    }
  }

  .network {
    background-color: #868686;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 16px;
  }
</style>