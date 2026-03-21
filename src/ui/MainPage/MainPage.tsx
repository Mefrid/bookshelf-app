import { useBriefSpaces } from "../../application/useCases/useBriefSpaces"
import { LoadingIndicator } from "../shared/components"
import { NoSpacesPlaceholder } from "./NoSpacesPlaceholder"

export const MainPage = () => {
  const { data, loading, error } = useBriefSpaces()

  if (loading || error) {
    return <LoadingIndicator size={64} />
  }

  const { briefSpaces } = data

  if (briefSpaces.length === 0) {
    return <NoSpacesPlaceholder />
  }

  return (
    <ul>
      {briefSpaces.map((space) => (
        <li key={space.id}>{space.title}</li>
      ))}
    </ul>
  )
}
