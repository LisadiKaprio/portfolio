<script setup>
const { data: items } = await useAsyncData('items', () => queryContent('/projects').find())
</script>

<template>
  <div>
    <h1>Projects</h1>
    <v-data-iterator :items="items">
      <template
        v-for="(item, i) in items"
        :key="i"
      >
        <v-card
        width="500"
        class="ma-8 pa-4"
        :href="item._path">
          <v-img
            :src="`/${item.cover}`"
            height="200px"
            cover
          />
          <v-card-title>
            {{item.title}}
          </v-card-title>

          <v-card-subtitle>
            {{item.description}}
          </v-card-subtitle>
        </v-card>
      </template>
    </v-data-iterator>
    <!-- Your project content here -->
  </div>
</template>
