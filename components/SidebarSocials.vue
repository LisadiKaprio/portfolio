<script lang="ts" setup>

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

const hoverOverMail = ref(false);

const copyMailToClipboard = () => {
    navigator.clipboard.writeText(MAIL)
    // toast(`Copied to clipboard: ${MAIL}`)
}
</script>

<template>
    <div class="socials">
        <!-- v-no-ssr is needed, otherwise hydration mismatch bug happens -->
        <v-no-ssr>
            <SocialButton v-for="(item, idx) in socials" :key="idx" :item="item" />
            <div class="email-container">
                <v-btn icon variant="outlined" @mouseover="hoverOverMail = true" @mouseleave="hoverOverMail = false"
                    class="socials-button-round mb-0" @click="copyMailToClipboard()">
                    <v-icon>
                        {{ hoverOverMail ? `fa:fas fa-solid fa-copy` : `fa:fas fa-solid fa-envelope` }}
                    </v-icon>
                    <v-tooltip activator="parent" content-class='custom-tooltip'
                        :location="$vuetify.display.smAndDown ? 'bottom' : 'end'">Copy My Email</v-tooltip>
                </v-btn>
                <Transition>
                    <span v-if="hoverOverMail" class="email dark-transparent-5">{{ MAIL }}</span>
                </Transition>
            </div>
        </v-no-ssr>
    </div>
</template>
