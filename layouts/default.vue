<script lang="ts" setup>
const { path } = useRoute()

</script>

<template>
    <div class="page-with-sidebar">
        <div class="sidebar-container">
            <div class="sidebar">
                <div class="portfolio-navigation">
                    <NuxtLink :to="`/`">
                        <v-btn color="primary" elevation="0">
                            <h1>Lisa DJKapurio</h1>
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink to="/projects">
                        <v-btn color="primary" elevation="0">
                            My Projects
                        </v-btn>
                    </NuxtLink>
                </div>
                <div class="socials">
                    <v-btn variant="outlined" icon="fa:fas fa-brands fa-github" />
                </div>
            </div>
        </div>
        <v-divider vertical />
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/main";

.page-with-sidebar {
    background: $background;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .sidebar-container {
        min-height: 100vh;
        display: flex;

        .sidebar {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            max-width: 720px;
            padding: 24px 24px;

            .portfolio-navigation {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }

            .v-btn {
                margin-bottom: 16px;
            }

            .socials {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .v-btn {
                    border-radius: 99px !important;
                }
            }
        }

        .main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 2;
            max-width: 800px;
            max-height: 100vh;
            overflow: auto;
            padding: 24px 36px;
        }
    }
}
</style>
