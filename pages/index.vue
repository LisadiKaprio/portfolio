<script lang="ts" setup>

</script>

<template>
  <v-container class="d-flex align-center">
    <v-sheet :elevation="4" :width="560" rounded>
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
    </v-sheet>
  </v-container>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
