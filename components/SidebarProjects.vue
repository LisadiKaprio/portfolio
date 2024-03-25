<template>
    <div class="portfolio-navigation">
        <NuxtLink :to="`/`">
            <v-btn color="primary mb-2" elevation="0">
                <h1>Ariana Zeivald</h1>
            </v-btn>
        </NuxtLink>
        <NuxtLink to="/projects">
            <v-btn color="primary" elevation="0">
                My Projects
            </v-btn>
        </NuxtLink>
    </div>
</template>