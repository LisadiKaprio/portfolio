<script
  lang="ts"
  setup
>

  const props = defineProps<{
    items: string[]
  }>()

  const currentImageIndex = ref(-1)

  const currentImage = computed(() => {
    return props.items[currentImageIndex.value]
  })

  const transparentLeftIcon = computed(() => {
    if (currentImageIndex.value <= 0) return true
    return false
  })

  const transparentRightIcon = computed(() => {
    if (currentImageIndex.value >= props.items.length - 1) return true
    return false
  })

</script>

<template>
  <div class="gallery">
    <v-dialog transition="false" scroll-strategy="none">
      <template #activator="{ props: activatorProps }">
        <v-container class="my-5">
                <img
                v-for="(item, idx) in items"
                :key="idx"
                  :src="item"
                  contain
                  class="lightbox-image-small"
                  v-bind="activatorProps"
                  @click="currentImageIndex = idx"
                >
        </v-container>
      </template>
      <template #default="{ isActive }">
        <div
          class="lightbox-overlay"
          @click="isActive.value = false"
        >
          <v-icon
            class="lightbox-nav"
            :class="transparentLeftIcon ? 'inactiveIconButton' : ''"
            icon="mdi-chevron-left"
            @click.stop="!transparentLeftIcon ? currentImageIndex -= 1 : isActive.value = false"
          />
          <v-img
            :src="currentImage"
            class="lightbox-image-big"
            height="90vh"
          />
          <v-icon
            class="lightbox-nav"
            :class="transparentRightIcon ? 'inactiveIconButton' : ''"
            icon="mdi-chevron-right"
            @click.stop="!transparentRightIcon ? currentImageIndex += 1 : isActive.value = false"
          />
        </div>
      </template>
    </v-dialog>
  </div>
</template>

<style scoped></style>
