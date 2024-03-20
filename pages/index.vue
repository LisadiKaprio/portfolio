<script lang="ts" setup>

</script>

<template>
  <v-container class="homepage-container">
    <v-sheet class="intro-card" :elevation="4" rounded>
      <div class="intro-card-header-section">
        <h1>Ariana Zeivald</h1>
        <p>You can call me Ari or Lisa.</p>
      </div>
      <v-divider></v-divider>
      <div>
        <p class="intro-card-paragraph-section">
          💻🎨 I'm a Game Design graduate in Berlin, developing web applications and creating 2D artworks.
          <br /> 🔧 I have a strong passion for finding and fixing bugs.
          <br /><br /> 💜 My biggest hobby is participating in Twitch streams, which is reflected in most of my
          projects.
        </p>
      </div>
      <NuxtLink to="/projects">
        <Transition>
          <v-btn class="homepage-projects-button" size="x-large" color="primary" elevation="0">
            My Projects
          </v-btn>
        </Transition>
      </NuxtLink>
    </v-sheet>
  </v-container>
</template>

<style lang="scss">
.test-class {
  background-color: red;
}
</style>
