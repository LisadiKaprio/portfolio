<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { item } = defineProps(['item']) as ParsedContent
</script>

<template>
    <NuxtLink :to="`${item.url}`" target="_blank">
        <v-btn icon variant="outlined" class="socials-button-round">
            <v-icon>
                {{ `fa:fas fa-brands fa-${item.iconName}` }}
            </v-icon>
            <v-tooltip activator="parent" content-class='custom-tooltip'>{{ item.tooltipLabel }}</v-tooltip>
        </v-btn>
    </NuxtLink>
</template>