<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { item } = defineProps(['item']) as ParsedContent
</script>

<template>
    <NuxtLink v-if="item" :to="`${item._path}`">
        <v-card min-width="280" height="100%" hover class="pa-4 flex-1">
            <VideoComponent v-if="!isImage(item.cover)" loading="lazy" class="project-card-video" :fileName="item.cover" />
            <v-img v-else :src="`/${item.cover}`" height="200px" cover />
            <h3>
                {{ item.title }}
            </h3>
            <p>
                {{ item.subtitle }}
            </p>
            <v-chip v-for="tool in item.tools" :key="tool" size="small" class="mr-2 mt-2">
                {{ tool }}
            </v-chip>
        </v-card>
    </NuxtLink>
</template>
