<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})
</script>

<template>
  <div class="project-page">
    <img :src="`/${data.cover}`" :alt="data.coverAlt" class="cover">
    <div class="main">
      <div class="intro">
        <v-card :elevation="2">
          <div v-if="data.skills" class="d-flex flex-column">
            <p>Skills:</p>
            <v-chip v-for="skill in data.skills" :key="skill" class="mr-2">
              {{ skill }}
            </v-chip>
          </div>
        </v-card>
        <div class="intro-textbar">
          <h1>{{ data.title }}</h1>
          <p>{{ data.description }}</p>
        </div>
      </div>
      <v-divider></v-divider>
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

    .v-card {
      flex: 1;
    }

    .intro-textbar {
      margin-left: 36px;
      flex: 1.5;
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
    width: 100%;
    margin-bottom: 28px;
  }
}
</style>
