<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { pending, data: items } = await useLazyAsyncData('code-items', () => queryContent('/code').find()
  , { server: false })

useHead({
  title: 'Code Projects by Ariana Zeivald - Game Developer Portfolio',
  meta: [
    { name: 'description', content: 'Explore my code projects including web applications, games, and development work.' }
  ],
  bodyAttrs: {
    class: 'Portfolio'
  },
})

const sortedItems = ref<ParsedContent[]>()

watch(items, (newItems) => {
  if (newItems) {
    sortedItems.value = newItems.sort((a: ParsedContent, b: ParsedContent) => {
      const dateA = new Date(a.created)
      const dateB = new Date(b.created)
      return dateB.getTime() - dateA.getTime()
    })
  }
})
</script>

<template>
  <div class="d-flex flex-column">
    <h1 class="mb-8">
      Code Projects
    </h1>
    <template v-if="!pending && sortedItems">
      <v-data-iterator :items="sortedItems">
        <v-row no-gutters class="d-flex justify-center ">
          <v-col v-for="(item, i) in items" :key="i" class="mb-8 mr-8">
            <LazyProjectCard :item="item" class="project-card" />
          </v-col>
        </v-row>
      </v-data-iterator>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>
