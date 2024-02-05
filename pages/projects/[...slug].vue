<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})
</script>

<template>
  <div class="d-flex flex-column align-center mx-12">
    <h1>{{ data.title }}</h1>
    <div v-if="data.skills" class="d-flex flex-row align-center">
      <p>Skills:</p>
      <v-chip v-for="skill in data.skills" :key="skill" class="mr-2">
        {{ skill }}
      </v-chip>
    </div>
    <ContentRenderer :value="data" class="d-flex flex-column" />
  </div>
</template>
