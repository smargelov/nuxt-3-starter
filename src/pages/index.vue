<template>
    <div class="index">
        <img v-if="tgUser?.photo_url" :src="tgUser.photo_url" />
        <main-button @click="removeCloudData" />
        <pre>{{ tgUser }}</pre>
        <el-button type="success" @click="toggleDark()">Toggle Dark Mode</el-button>
    </div>
</template>

<script setup lang="ts">
import { MainButton } from 'vue-tg'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
})

const toggleDark = useToggle(isDark)

const tgData = useTgData()

const { tgUser } = storeToRefs(tgData)

const removeCloudData = () => {
    // eslint-disable-next-line no-console
    console.log('removeCloudData')
}
</script>

<style lang="scss" scoped>
.index {
    display: grid;
    gap: 9px;
    justify-content: start;
}
</style>
