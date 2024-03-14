<script lang="ts" setup>

const props = defineProps<{
  items?: string[]
  itemsAsVideos?: string[]
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
        <v-col v-for="(item, idx) in itemsAsVideos" :key="idx" class="lightbox-image-small-wrapper">
          <video-component :fileName="item" class="lightbox-image-small" @click="currentItemIndex = idx"
            v-bind="activatorProps" />
        </v-col>
      </v-container>
    </template>
    <template #default="{ isActive }">
      <div class="lightbox-overlay" @click="isActive.value = false">
        <v-icon class="lightbox-nav" :class="transparentLeftIcon ? 'inactiveIconButton' : ''" icon="mdi-chevron-left"
          @click.stop="!transparentLeftIcon ? currentItemIndex -= 1 : isActive.value = false" />
        <v-img v-if="currentImage" :src="currentImage" class="lightbox-image-big" height="90vh" />
        <video-component v-else-if="currentVideo" :fileName="currentVideo" class="lightbox-image-big" />
        <v-icon class="lightbox-nav" :class="transparentRightIcon ? 'inactiveIconButton' : ''" icon="mdi-chevron-right"
          @click.stop="!transparentRightIcon ? currentItemIndex += 1 : isActive.value = false" />
      </div>
    </template>
  </v-dialog>
</template>

<style scoped></style>
