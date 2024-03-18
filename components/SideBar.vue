<script lang="ts" setup>
const route = useRoute()

const isHomepage = ref(route.path === '/')

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

const MAIL = `lisadikaprio@gmail.com`

const sidebarPositionClass = computed(() => {
    if (isHomepage.value)
        return 'sidebar-center'

    return 'sidebar-top'
})

const hoverOverMail = ref(false);

const copyMailToClipboard = () => {
    navigator.clipboard.writeText(MAIL)
    // toast(`Copied to clipboard: ${MAIL}`)
}


watch(() => route.path, () => {
    isHomepage.value = (route.path === '/')
}, { immediate: true, deep: true })
</script>

<template>
    <div class="sidebar" :class="sidebarPositionClass">
        <Transition>
            <div v-if="isHomepage" class="socials">
                <NuxtLink v-for="(item, idx) in socials" :key="idx" :to="`${item.url}`" target="_blank">
                    <v-btn icon variant="outlined" class="socials-button-round">
                        <v-icon>
                            {{ `fa:fas fa-brands fa-${item.iconName}` }}
                        </v-icon>
                        <v-tooltip activator="parent" content-class='custom-tooltip'>{{ item.tooltipLabel }}</v-tooltip>
                    </v-btn>
                </NuxtLink>
                <div class="d-flex flex-row-reverse align-center justify-center">
                    <v-btn icon variant="outlined" @mouseover="hoverOverMail = true" @mouseleave="hoverOverMail = false"
                        class="socials-button-round mb-0" @click="copyMailToClipboard()">
                        <v-icon>
                            {{ hoverOverMail ? `fa:fas fa-solid fa-copy` : `fa:fas fa-solid fa-envelope` }}
                        </v-icon>
                        <v-tooltip activator="parent" content-class='custom-tooltip'>Copy My Email</v-tooltip>
                    </v-btn>
                    <Transition>
                        <span v-if="hoverOverMail" class="mr-2 dark-transparent-5">{{ MAIL }}</span>
                    </Transition>
                </div>
            </div>
        </Transition>
        <Transition>
            <div v-if="!isHomepage" class="portfolio-navigation">
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
        </Transition>
    </div>
</template>
