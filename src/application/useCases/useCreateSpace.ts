import { nanoid } from "nanoid"

import { createBriefSpace, createSpace } from "../../domain/entities/space"
import { pickRandom } from "../../shared/pickRandom"
import {
  addBriefSpace,
  persistBriefSpacesStore,
  setCurrentSpaceId,
  useBriefSpacesStore,
} from "../stores/useBriefSpacesStore"

const DEFAULT_SPACE_NAMES = [
  "Крутой носорог",
  "Изящная цапля",
  "Быстрая белка",
  "Вальяжный кот",
  "Одинокий волк",
]

export const useCreateSpace = () => {
  const briefSpaces = useBriefSpacesStore((state) => state.briefSpaces)
  return {
    createSpace: () => {
      const title = pickRandom(DEFAULT_SPACE_NAMES)

      const space = createSpace(nanoid(), title)
      const briefSpace = createBriefSpace(space.id, space.title)

      addBriefSpace(briefSpace)
      const isOnlyOne = briefSpaces.length === 1
      if (isOnlyOne) {
        setCurrentSpaceId(briefSpace.id)
      }
      persistBriefSpacesStore()
    },
  }
}
