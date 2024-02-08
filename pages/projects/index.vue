<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { data: items } = await useAsyncData('items', () => queryContent('/projects').find())

let sortedItems: ParsedContent[]
if (items.value) {
  sortedItems = items.value.sort((a: ParsedContent, b: ParsedContent) => {
    const dateA = new Date(a.created)
    const dateB = new Date(b.created)
    return dateB.getTime() - dateA.getTime()
  })
}
</script>

<template>
  <div class="d-flex flex-column">
    <h1 class="mb-8">
      Projects
    </h1>
    <template v-if="sortedItems">
      <v-data-iterator :items="sortedItems">
        <v-row no-gutters class="d-flex justify-center ">
          <v-col v-for="(item, i) in items" :key="i" class="mb-8 mr-8">
            <ProjectCard :item="item" />
          </v-col>
        </v-row>
      </v-data-iterator>
    </template>
    <template v-else>
      <p>No projects found...</p>
    </template>
  </div>
</template>
