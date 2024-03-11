<template>
    <div class="page-with-sidebar">
        <div class="sidebar-container">
            <side-bar />
        </div>
        <v-divider vertical />
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/main";
</style>
