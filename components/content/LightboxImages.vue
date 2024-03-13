<script lang="ts" setup>

type VideoItem = {
  mp4FileName: string;
  webmFileName?: string;
  imageFileName?: string;
  imageAlt?: string;
}

const props = defineProps<{
  items: string[] | null
  itemsAsVideos: VideoItem[] | null
}>()

const currentItemIndex = ref(-1)

const currentImage = computed(() => {
  if (props.items) return props.items[currentItemIndex.value] ?? null
  else return null
})

const currentVideo = computed(() => {
  if (props.itemsAsVideos) return props.itemsAsVideos[currentItemIndex.value] ?? null
  else return null
})

const transparentLeftIcon = computed(() => {
  return (currentItemIndex.value <= 0)
})

const transparentRightIcon = computed(() => {
  return ((props.items && currentItemIndex.value >= props.items.length - 1)
    || (props.itemsAsVideos && currentItemIndex.value >= props.itemsAsVideos.length - 1))
})

</script>

<template>
  <v-dialog transition="false" scroll-strategy="none">
    <template #activator="{ props: activatorProps }">
      <v-container v-if="!itemsAsVideos" class="lightbox-container-small">
        <img v-for="(item, idx) in items" :key="idx" :src="item" contain class="lightbox-image-small"
          v-bind="activatorProps" @click="currentItemIndex = idx">
      </v-container>
      <v-container v-else class="lightbox-container-small">
        <div v-for="(item, idx) in itemsAsVideos" :key="idx" class="lightbox-image-small-wrapper">
          <video-component :mp4-file-name="item.mp4FileName" :webm-file-name="item.webmFileName"
            :image-file-name="item.imageFileName" :cover-alt="item.imageAlt" class="lightbox-image-small"
            @click="currentItemIndex = idx" v-bind="activatorProps" />
        </div>
      </v-container>
    </template>
    <template #default="{ isActive }">
      <div class="lightbox-overlay" @click="isActive.value = false">
        <v-icon class="lightbox-nav" :class="transparentLeftIcon ? 'inactiveIconButton' : ''" icon="mdi-chevron-left"
          @click.stop="!transparentLeftIcon ? currentItemIndex -= 1 : isActive.value = false" />
        <v-img v-if="currentImage" :src="currentImage" class="lightbox-image-big" height="90vh" />
        <video-component v-else-if="currentVideo" :mp4-file-name="currentVideo.mp4FileName"
          :webm-file-name="currentVideo.webmFileName" :image-file-name="currentVideo.imageFileName"
          :cover-alt="currentVideo.imageAlt" class="lightbox-image-big" />
        <v-icon class="lightbox-nav" :class="transparentRightIcon ? 'inactiveIconButton' : ''" icon="mdi-chevron-right"
          @click.stop="!transparentRightIcon ? currentItemIndex += 1 : isActive.value = false" />
      </div>
    </template>
  </v-dialog>
</template>

<style scoped></style>
