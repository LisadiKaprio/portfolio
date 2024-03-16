<script lang="ts" setup>
const route = useRoute()

const sidebarContentAtTop = ref(route.path !== '/')

const sidebarPositionClass = computed(() => {
    if (sidebarContentAtTop.value)
        return 'sidebar-top'

    return 'sidebar-center'
})

const socials = [
    {
        iconName: 'github',
        tooltipLabel: 'Github',
        url: 'https://github.com/LisadiKaprio/',
    },
    {
        iconName: 'itch-io',
        tooltipLabel: 'Itch.io',
        url: 'https://lisadikaprio.itch.io/',
    },
    {
        iconName: 'artstation',
        tooltipLabel: 'Artstation',
        url: 'https://www.artstation.com/lisadikaprio',
    },
    {
        iconName: 'linkedin',
        tooltipLabel: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ariana-zeivald/',
    }
]

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
            <v-tooltip v-for="(item, idx) in socials" :key="idx" :text="item.tooltipLabel">
                <template v-slot:activator="{ props }">
                    <NuxtLink :to="`${item.url}`" target="_blank" v-bind="props">
                        <v-btn variant="outlined" :icon="`fa:fas fa-brands fa-${item.iconName}`"
                            class="socials-button-round" />
                    </NuxtLink>
                </template>
            </v-tooltip>
        </div>
    </div>
</template>
