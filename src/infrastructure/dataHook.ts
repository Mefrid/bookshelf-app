export type DataHook<T> = (id?: string) =>
  | {
      data: undefined
      error: undefined
      loading: true
    }
  | {
      data: T
      error: undefined
      loading: false
    }
  | {
      data: undefined
      error: Error
      loading: false
    }
