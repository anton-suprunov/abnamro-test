<script lang="ts" setup>
  import { ShowDetails } from '@/types/shows';
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const props = defineProps<{ show: ShowDetails }>()

  function onItemClick() {
    router.push(`/show/${props.show.id}`)
  }
</script>

<template>
  <li
    class="item" 
    v-if="props.show.image?.medium"
    v-on:click="onItemClick"
    :style="`background-image:url(${props.show.image?.medium})`">
    <h4 class="item-title">
      <span>{{ props.show.name }}</span>
      <span class="item-rating">{{ props.show.rating?.average }}</span>
    </h4>
  </li>
</template>

<style lang="scss" scoped>
  @import "@/styles/imports";

  .item {
    min-width: 210px;
    width: 210px;
    height: 295px;
    margin-right: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    position: relative;

    &:last-child { margin-right: 0 }

    &:hover .item-title {
      opacity: 1;
    }

    @include mq('mobile') {
      min-width: 150px;
      width: 150px;
      height: 210px;
      margin-right: 8px;
    }
  }

  .item-title {
    opacity: 0;
    color: #fff;
    position: absolute;
    margin: 0;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
    font-size: 18px;
    padding: 10px;
    line-height: 20px;
    transition: opacity .2s ease;
    flex-direction: column;
    text-shadow: 1px 1px 1px #000;
    text-align: center;
  }

  .item-rating {
    font-size: 12px;
  }
</style>