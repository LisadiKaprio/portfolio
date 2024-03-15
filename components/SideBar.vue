<script lang="ts" setup>
const route = useRoute()

const sidebarContentAtTop = ref(route.path !== '/')

const sidebarPositionClass = computed(() => {
    if (sidebarContentAtTop.value)
        return 'sidebar-top'

    return 'sidebar-center'
})

watch(() => route.path, () => {
    sidebarContentAtTop.value = (route.path !== '/')
}, { immediate: true, deep: true })
</script>

<template>
    <div class="sidebar" :class="sidebarPositionClass">
        <div class="portfolio-navigation">
            <NuxtLink :to="`/`">
                <v-btn color="primary" elevation="0">
                    <h1>Ariana Zeivald</h1>
                </v-btn>
            </NuxtLink>
            <NuxtLink to="/projects">
                <v-btn color="primary" elevation="0">
                    My Projects
                </v-btn>
            </NuxtLink>
        </div>
        <div class="socials">
            <v-btn variant="outlined" icon="fa:fas fa-brands fa-github" class="socials-button-round" height="42px"
                @click="console.log(sidebarContentAtTop.valueOf())" />
        </div>
    </div>
</template>
