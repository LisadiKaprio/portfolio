<script lang="ts" setup>

const props = defineProps<{
  items?: string[]
}>()

const currentItemIndex = ref(-1)

const currentItem = computed(() => {
  if (props.items) return props.items[currentItemIndex.value] ?? null
  else return null
})

const isImage = (fileName: string) => {
  if (fileName.endsWith('.png') || fileName.endsWith('.jpg')) return true
  return false
}

const transparentLeftIcon = computed(() => {
  return (currentItemIndex.value <= 0)
})

const transparentRightIcon = computed(() => {
  return ((props.items && currentItemIndex.value >= props.items.length - 1))
})

</script>

<template>
  <v-dialog transition="false" scroll-strategy="none">
    <template #activator="{ props: activatorProps }">
      <v-container class="lightbox-container-small">
        <v-col v-for="(item, idx) in items" :key="idx" class="lightbox-image-small-wrapper" v-bind="activatorProps">
          <img v-if="isImage(item)" :src="item" contain class="lightbox-image-small" @click="currentItemIndex = idx">
          <lazy-video-component v-else :fileName="item" class="lightbox-image-small" @click="currentItemIndex = idx" />
        </v-col>
      </v-container>
    </template>
    <template #default="{ isActive }">
      <div class="lightbox-overlay" @click="isActive.value = false">
        <v-icon class="lightbox-nav-close" icon="mdi-close"/>
        <v-icon class="lightbox-nav nav-left" :class="transparentLeftIcon ? 'inactiveIconButton' : ''" icon="mdi-menu-left"
          @click.stop="!transparentLeftIcon ? currentItemIndex -= 1 : isActive.value = false" />
        <img v-if="currentItem && isImage(currentItem)" :src="currentItem" class="lightbox-image-big" />
        <lazy-video-component v-else-if="currentItem && !isImage(currentItem)" :fileName="currentItem"
          class="lightbox-image-big" />
        <v-icon class="lightbox-nav nav-right" :class="transparentRightIcon ? 'inactiveIconButton' : ''" icon="mdi-menu-right"
          @click.stop="!transparentRightIcon ? currentItemIndex += 1 : isActive.value = false" />
      </div>
    </template>
  </v-dialog>
</template>

<style scoped></style>
