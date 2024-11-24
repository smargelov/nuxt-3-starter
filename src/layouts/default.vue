<template>
    <div class="main">
        <header class="main__header">there will be a header here</header>
        <main class="main__content">
            <pre>{{ tgUser }}</pre>
            <slot />
        </main>
        <footer class="main__footer">there will be a footer here</footer>
    </div>
</template>

<script setup lang="ts">
const tgData = useTgData()

const { tgUser } = storeToRefs(tgData)

tgData.init()
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    align-content: start;
    min-height: 100dvh;

    &__header {
        color: var(--accent-text-color);
        background-color: var(--header-bg-color);
    }
}
</style>
