<!-- <script>

const route = useRoute()
const isArtPage = ref(route.path.startsWith( '/art'))
watch(() => route.path, () => {
    isArtPage.value = (route.path.startsWith( '/art'))
}, { immediate: true, deep: true })
</script> -->
<template>
    <div class="portfolio-navigation" style="z-index: 2;">
        <NuxtLink :to="`/`">
            <v-btn color="primary" class="mb-4" elevation="0">
                <h1>Ariana Zeivald</h1>
            </v-btn>
        </NuxtLink>
        <NuxtLink to="/art">
            <v-btn color="primary" class="mb-2" :class="useRoute().path.startsWith( '/art') ? 'selected' : ''" elevation="0">
                🎨 Art
            </v-btn>
        </NuxtLink>
        <NuxtLink to="/code">
            <v-btn color="primary" :class="useRoute().path.startsWith( '/art') ? '' : 'selected'" elevation="0">
                💻 Code
            </v-btn>
        </NuxtLink>
    </div>
</template>