<script setup>
const { data: items } = await useAsyncData('items', () => queryContent('/projects').find())
</script>

<template>
    <div>
        <h1>Projects</h1>
        <v-data-iterator :items="items">
            <template v-slot:default="{ items }">
    <template
      v-for="(item, i) in items"
      :key="i"
    >
      <v-card v-bind="item.raw"></v-card>

      <br>
    </template>
            </template>
        </v-data-iterator>
        <!-- Your project content here -->
    </div>
</template>
