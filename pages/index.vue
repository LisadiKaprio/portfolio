<script lang="ts" setup>
useHead({
  title: 'Ariana Zeivald - Game Developer Portfolio',
  meta: [
    { name: 'description', content: 'I\'m a game developer and 2D artist in Berlin, creating web applications and 2D artworks.' }
  ],
  bodyAttrs: {
    class: 'Portfolio'
  },
})
</script>

<template>
  <v-container class="homepage-container">
    <v-sheet class="intro-card" :elevation="4" rounded>
      <div class="intro-card-header-section">
        <h1>Ariana Zeivald</h1>
        <p>Game developer and artist in Berlin</p>
      </div>
      <v-divider></v-divider>
      <div>
        <p class="intro-card-paragraph-section">
          💻🎨 I create web applications, games and 2D artworks.
          <br /> 🔧 I have a passion for finding and fixing bugs.
          <br /><br /> 💜 Other hobbies include reading books, doing crafts, and completing game achievements.
        </p>
      </div>
      <div class="homepage-projects-buttons">
        <NuxtLink to="/art">
          <Transition>
            <v-btn class="floating-button" size="x-large" color="primary" elevation="0">
              🎨 Art Projects
            </v-btn>
          </Transition>
        </NuxtLink>
        <NuxtLink to="/code">
          <Transition>
            <v-btn class="floating-button" size="x-large" color="primary" elevation="0">
              💻 Code Projects
            </v-btn>
          </Transition>
        </NuxtLink>
      </div>
    </v-sheet>
  </v-container>
</template>

<style lang="scss">
.test-class {
  background-color: red;
}
</style>
