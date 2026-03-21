import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { BriefSpace } from "../../domain/entities/space"

type Store = {
  briefSpaces: BriefSpace[]
  currentSpaceId: BriefSpace["id"] | undefined
}

export const useBriefSpacesStore = create<Store>()(
  persist(
    () =>
      ({
        briefSpaces: [],
        currentSpaceId: undefined,
      }) as Store,
    {
      name: "brief-spaces-storage",
    }
  )
)

export const addBriefSpace = (briefSpace: BriefSpace) =>
  useBriefSpacesStore.setState((state) => ({
    briefSpaces: [...state.briefSpaces, briefSpace],
  }))

export const setCurrentSpaceId = (currentSpaceId: BriefSpace["id"]) =>
  useBriefSpacesStore.setState({ currentSpaceId })

export const persistBriefSpacesStore = () =>
  useBriefSpacesStore.persist.rehydrate()
