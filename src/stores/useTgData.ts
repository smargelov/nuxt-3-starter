import { defineStore } from 'pinia'
import { useWebApp, useWebAppCloudStorage, useWebAppRequests } from 'vue-tg'
import type { DataUnsafeType, TgContactType, TgUserType, WebAppType } from '@/types/tgWebApp.type'
import { WEB_APP_MINIMAL_VERSION } from '@/utils/constants'

interface IUseTgDataReturn {
    tgUser: ComputedRef<TgUserType>
    init: () => Promise<void>
    isTgLoading: Ref<boolean>
    tgContact: Ref<Nullable<TgContactType>>
    tgError: Ref<Nullable<Error>>
    clearError: () => void
    removeFromCloudStorage: (title: string) => Promise<void>
}

export const useTgData = defineStore('tgData', (): IUseTgDataReturn => {
    const webAppData = ref<Nullable<WebAppType>>(null)
    const dataUnsafe = ref<Nullable<DataUnsafeType>>(null)
    const tgContact = ref<Nullable<TgContactType>>(null)
    const isTgLoading = ref(false)
    const tgError = ref<Nullable<Error>>(null)
    const storage = useWebAppCloudStorage()

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

            await getTgContact()
        } catch (error) {
            tgError.value = error as Error
        } finally {
            isTgLoading.value = false
        }
    }

    const saveToCloudStorage = async <T>(title: string, data: T) => {
        await useWebAppCloudStorage().setStorageItem(title, JSON.stringify(data))
    }

    const removeFromCloudStorage = async (title: string) => {
        await useWebAppCloudStorage().removeStorageItem(title)
    }

    const clearError = () => (tgError.value = null)

    const getInitDataUnsafe = async () => {
        try {
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

    const getTgContact = async () => {
        useWebAppRequests().requestContact((ok: boolean, response) => {
            if (ok) {
                // eslint-disable-next-line no-console
                console.log(ok, response.responseUnsafe)
            }
        })
    }

    return {
        isTgLoading,
        tgError,
        tgUser,
        tgContact,
        clearError,
        init,
        removeFromCloudStorage,
    }
})
