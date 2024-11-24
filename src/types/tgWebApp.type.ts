import type { useWebApp } from 'vue-tg'

export type WebAppType = ReturnType<typeof useWebApp>
export type DataUnsafeType = WebAppType['initDataUnsafe']
export type TgUserType = DataUnsafeType['user']
