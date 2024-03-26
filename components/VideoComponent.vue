<script lang="ts" setup>

const props = defineProps<{
  fileName: string
}>()

</script>

<template>
  <div class="video-component-wrapper">
    <video loading="lazy" :key="fileName" playsinline loop autoplay muted>
      <source :src="`/videos/${fileName}.mp4`" type="video/mp4">
      <source :src="`/videos/${fileName}.webm`" type="video/webm">
      Video not supported
    </video>
  </div>
</template>
