<script lang="ts" setup>
</script>

<template>
    <div class="page-with-sidebar">
        <div class="sidebar">
            <v-btn :href="`/`" class="mb-4">
                Lisa DJKapurio
            </v-btn>
            <v-btn :href="`/projects`">
                My Projects
            </v-btn>
        </div>
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.page-with-sidebar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .sidebar {
        min-height: 100vh;
        background-color: #bdadad;
        display: flex;
        padding: 24px 24px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        flex: 2;
        max-width: 800px;
        max-height: 100vh;
        overflow: auto;
    }
}
</style>
