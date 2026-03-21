export const useLocaleStorage = <ValueType>(storageKey: string) => ({
  get() {
    const rawStorage = localStorage.getItem(storageKey)
    if (!rawStorage) {
      return undefined
    }
    try {
      const storage = JSON.parse(rawStorage)
      return storage as ValueType
    } catch (e) {
      console.log(`Error while parsing localeStorage value: ${e}`)
      return undefined
    }
  },
  set(newValue: ValueType) {
    try {
      const serializedValue = JSON.stringify(newValue)
      localStorage.setItem(storageKey, serializedValue)
    } catch (e) {
      console.log(`Error while setting localeStorage value: ${e}`)
    }
  },
})
