<template>
    <div class="main content-grid">
        <header class="main__header content-grid full-width">
            <p>there will be a header here</p>
        </header>
        <main class="main__content">
            <slot />
        </main>
        <footer class="main__footer content-grid full-width">
            <p>there will be a footer here</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
const tgData = useTgData()

tgData.init()
</script>

<style lang="scss" scoped>
.main {
    --el-color-primary: var(--color-primary);
    --el-color-success: var(--color-success);
    --el-color-warning: var(--color-warning);
    --el-color-danger: var(--color-danger);
    --el-color-error: var(--color-danger);
    --el-color-info: var(--color-info);

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
