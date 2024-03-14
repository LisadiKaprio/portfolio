<script lang="ts" setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})

const website = (data.value && data.value.website)
  ? data.value.website.startsWith('http')
    ? data.value.website
    : `https://${data.value.website}`
  : null

const websiteButtonLabel = (data.value && data.value.websiteLabel) ?? 'Go to the website'

const github = (data.value && data.value.github) ? `https://github.com/LisadiKaprio/${data.value.github}` : null
</script>

<template>
  <div v-if="data" class="project-page">
    <div class="cover">
      <div class="cover-video">
        <VideoComponent :fileName="data.cover" />
      </div>
      <!-- <img :src="`/${data.cover}`" :alt="data.coverAlt"> -->
      <div class="cover-title">
        <h1>{{ data.title }}</h1>
      </div>
    </div>
    <div class="main">
      <div class="intro">
        <div class="project-card" :elevation="2">
          <p class="font-weight-regular">
            {{ data.goal }}
          </p>
          <div v-if="data.skills" class="card-section">
            <p class="font-weight-medium">
              Skills:
            </p>
            <p class="mr-2">
              {{ data.skills.join(', ') }}
            </p>
          </div>
          <div v-if="data.tools" class="card-section">
            <p class="font-weight-medium">
              Tools:
            </p>
            <p class="mr-2">
              {{ data.tools.join(', ') }}
            </p>
          </div>
          <div v-if="data.duration" class="card-section">
            <p class="font-weight-medium">
              Duration:
            </p>
            <p class="mr-2">
              {{ data.duration }}
            </p>
          </div>
        </div>
        <div class="intro-buttons-bar">
          <v-btn v-if="website" prepend-icon="mdi-open-in-new" color="primary" target="_blank" :href="website">
            {{ websiteButtonLabel }}
          </v-btn>
          <v-btn v-if="github" color="primary" target="_blank" :href="github">
            <img width="18" class="mr-2" :src="`/icons/github.svg`">
            View source code
          </v-btn>
        </div>
      </div>
      <v-divider />
      <ContentRenderer :value="data" class="d-flex flex-column" />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/main";
</style>
