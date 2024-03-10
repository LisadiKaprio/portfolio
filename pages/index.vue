<script
  lang="ts"
  setup
>
  const projectImages = [
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Korowai_gecko_%28cropped%29.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg',
  ]
</script>

<template>
  <div>
    <lightbox-images :items="projectImages" />
    <v-container class="d-flex align-center justify-center">
      <v-sheet
        :elevation="4"
        :height="200"
        :width="500"
        rounded
      >
        <h1>Hi!</h1>
        <p>
          I’m a Game Design graduate. I enjoy creating 2D artworks and game assets, as well as developing web
          applications.
        </p>
      </v-sheet>
    </v-container>
  </div>
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
