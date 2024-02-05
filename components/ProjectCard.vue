<script setup lang="ts">
const { item } = defineProps(['item']) as ParsedContent
</script>

<template>
    <NuxtLink v-if="item" :to="`${item._path}`">
        <v-card min-width="280" height="100%" class="pa-4 flex-1">
            <v-img :src="`/${item.cover}`" height="200px" cover />
            <h3>
                {{ item.title }}
            </h3>
            <p>
                {{ item.description }}
            </p>
            <v-chip v-for="skill in item.skills" :key="skill" size="small" class="mr-2">
                {{ skill }}
            </v-chip>
        </v-card>
    </NuxtLink>
</template>
