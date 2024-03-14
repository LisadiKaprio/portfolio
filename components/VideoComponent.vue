<script lang="ts" setup>

const props = defineProps<{
  fileName: string
}>()

const currentFileName = ref(props.fileName)

</script>

<template>
  <!-- <div class="video-container"> -->
  <video v-bind="props" playsinline loop autoplay muted>
    <source :src="`/videos/${currentFileName}.mp4`" type="video/mp4">
    <source :src="`/videos/${currentFileName}.webm`" type="video/webm">
    Video not supported
  </video>
  <!-- <img :src="`/${currentFileName}.jpg`"> -->
  <!-- </div> -->
</template>
