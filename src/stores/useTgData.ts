import { defineStore } from 'pinia'
import { useWebApp, useWebAppCloudStorage } from 'vue-tg'
import type { DataUnsafeType, TgUserType, WebAppType } from '@/types/tgWebApp.type'
import { WEB_APP_MINIMAL_VERSION } from '@/utils/constants'

interface IUseTgDataReturn {
    tgUser: ComputedRef<TgUserType>
    init: () => Promise<void>
    isTgLoading: Ref<boolean>
    tgError: Ref<Nullable<Error>>
}

export const useTgData = defineStore('tgData', (): IUseTgDataReturn => {
    const webAppData = ref<Nullable<WebAppType>>(null)
    const dataUnsafe = ref<Nullable<DataUnsafeType>>(null)
    const isTgLoading = ref(false)
    const tgError = ref<Nullable<Error>>(null)

    const tgUser = computed<TgUserType>(() => dataUnsafe.value?.user)

    const init = async () => {
        try {
            isTgLoading.value = true
            webAppData.value = useWebApp()

            if (
                typeof webAppData.value?.version === 'string' &&
                webAppData.value.version > WEB_APP_MINIMAL_VERSION
            ) {
                await getInitDataUnsafe()
            }
        } catch (error) {
            tgError.value = error as Error
        } finally {
            isTgLoading.value = false
        }
    }

    const saveToCloudStorage = async <T>(title: string, data: T) => {
        await useWebAppCloudStorage().setStorageItem(title, JSON.stringify(data))
    }

    const getInitDataUnsafe = async () => {
        try {
            const storage = useWebAppCloudStorage()

            const cloudInitDataUnsafe = await storage.getStorageItem(
                INIT_DATA_UNSAFE_CLOUD_STORAGE_KEY
            )

            if (!cloudInitDataUnsafe) {
                dataUnsafe.value = webAppData.value?.initDataUnsafe
                await saveToCloudStorage<DataUnsafeType>(
                    INIT_DATA_UNSAFE_CLOUD_STORAGE_KEY,
                    dataUnsafe.value
                )
            } else {
                dataUnsafe.value = JSON.parse(cloudInitDataUnsafe) as DataUnsafeType
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Error during getInitDataUnsafe', e)
            throw new Error(`Error retrieving initDataUnsafe: ${(e as Error).message}`)
        }
    }

    return {
        isTgLoading,
        tgError,
        tgUser,
        init,
    }
})
