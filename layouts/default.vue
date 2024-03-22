<script lang="ts" setup>
const route = useRoute()

const isHomepage = ref(route.path === '/')
const mainContent = ref<HTMLDivElement>()

watch(() => route.path, () => {
    if (mainContent.value) {
        mainContent.value.scrollTop = 0
    }
    isHomepage.value = (route.path === '/')
}, { immediate: true, deep: true })
</script>

<template>
    <div class="page-with-sidebar">
        <div class="sidebar-container">
            <div class="sidebar">
                <Transition name="slide-fade">
                    <sidebar-socials v-if="isHomepage" />
                </Transition>
                <Transition name="slide-fade">
                    <sidebar-projects v-if="!isHomepage" />
                </Transition>
            </div>
        </div>
        <v-divider vertical />
        <div class="main-content" ref="mainContent">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/main";
</style>
