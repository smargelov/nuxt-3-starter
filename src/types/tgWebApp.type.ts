import type { useWebApp, useWebAppRequests } from 'vue-tg'

export type WebAppType = ReturnType<typeof useWebApp>
export type DataUnsafeType = WebAppType['initDataUnsafe']
export type TgUserType = DataUnsafeType['user']
export type WebAppRequestsType = ReturnType<typeof useWebAppRequests>
export type TgContactType = ReturnType<ReturnType<typeof useWebAppRequests>['requestContact']>
