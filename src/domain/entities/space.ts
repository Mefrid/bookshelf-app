import type { UUID } from "../../shared/shared"
import type { SpaceElement } from "./spaceElement"

export type Space = {
  id: UUID
  title: string
  content: SpaceElement[]
}

export type BriefSpace = Pick<Space, "id" | "title">

export const createSpace = (id: string, title: string): Space => ({
  id,
  title,
  content: [],
})

export const createBriefSpace = (id: string, title: string): BriefSpace => ({
  id,
  title,
})
