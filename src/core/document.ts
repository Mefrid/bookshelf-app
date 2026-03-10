import type { DateTimeString, UUID } from "./shared"

export type Document = {
  id: UUID
  createdDate: DateTimeString
  updatedDate: DateTimeString
  title: string
}

export type CreateDocumentDTO = Pick<Document, "title">
