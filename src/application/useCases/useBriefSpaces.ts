import { useEffect, useState } from "react"

import type { BriefSpace } from "../../domain/entities/space"
import type { DataHook } from "../../infrastructure/dataHook"
import { useBriefSpacesStore } from "../stores/useBriefSpacesStore"

export const useBriefSpaces: DataHook<{
  briefSpaces: BriefSpace[]
  currentSpaceId?: BriefSpace["id"]
}> = () => {
  const [isLoading, setIsLoading] = useState(true)
  const store = useBriefSpacesStore()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  if (isLoading) {
    return {
      loading: true,
      error: undefined,
    }
  }

  return {
    data: store,
    loading: false,
  }
}
