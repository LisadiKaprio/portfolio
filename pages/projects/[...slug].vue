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
    <!-- <lightbox-images :items="projectImages" /> -->
    <div class="cover">
      <img :src="`/${data.cover}`" :alt="data.coverAlt">
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

.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    padding: 4px 36px;

    &>*:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .intro {
    display: flex;
    flex-direction: row;

    .project-card {
      flex: 1.35;

      .card-section {
        &>*:not(:last-child) {
          margin-bottom: 4px;
        }
      }

      &>*:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    .intro-buttons-bar {
      flex: 1;

      &>*:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  h2,
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 12px;

    a {
      color: $dark;
      cursor: default;
    }
  }

  .cover {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    margin-bottom: 28px;

    img {
      object-fit: cover;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 105%;
      height: 105%;
      filter: blur(4px) brightness(0.5);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }

    .cover-title {
      -webkit-text-fill-color: $background;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%);
      padding: 8px 12px;
      backdrop-filter: blur(10px);
    }
  }
}
</style>
