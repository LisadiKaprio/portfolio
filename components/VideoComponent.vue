<script lang="ts" setup>

const props = defineProps<{
  mp4FileName: string | undefined,
  webmFileName?: string | undefined,
  imageFileName?: string | undefined,
  coverAlt?: string | 'Project Preview',
}>()

const currentMp4 = ref(props.mp4FileName)

</script>

<template>
  <!-- <div class="video-container"> -->
  <video v-if="props.mp4FileName || props.webmFileName" v-bind="props" playsinline loop autoplay muted>
    <source v-if="currentMp4 && currentMp4.valueOf()" :src="`/videos/${currentMp4.valueOf()}`" type="video/mp4">
    <source v-if="props.webmFileName" :src="`/videos/${props.webmFileName}`" type="video/webm">
    Video not supported
  </video>
  <img v-else :src="`/${props.imageFileName}`" :alt="props.coverAlt">
  <!-- </div> -->
</template>
