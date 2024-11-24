<template>
    <div class="main">
        <header class="main__header">there will be a header here</header>
        <main class="main__content">
            <slot />
        </main>
        <footer class="main__footer">there will be a footer here</footer>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    align-content: start;
    min-height: 100dvh;
}
</style>
