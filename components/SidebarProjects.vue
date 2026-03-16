<template>
    <div class="portfolio-navigation" style="z-index: 2;">
        <NuxtLink :to="`/`">
            <v-btn color="primary" class="mb-4" elevation="0">
                <h1>Ariana Zeivald</h1>
            </v-btn>
        </NuxtLink>
        <NuxtLink to="/art">
            <v-btn color="primary" class="mb-2" elevation="0">
                🎨 Art
            </v-btn>
        </NuxtLink>
        <NuxtLink to="/code">
            <v-btn color="primary" elevation="0">
                💻 Code
            </v-btn>
        </NuxtLink>
    </div>
</template>