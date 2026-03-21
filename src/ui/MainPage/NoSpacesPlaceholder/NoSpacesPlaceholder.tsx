import { useCreateSpace } from "../../../application/useCases/useCreateSpace"
import { Button } from "../../shared/components"
import styles from "./NoSpacesPlaceholder.module.css"

export const NoSpacesPlaceholder = () => {
  const { createSpace } = useCreateSpace()

  return (
    <div className={styles.container}>
      <img className={styles.img} src="app-logo.png" />
      <h1>Тут еще ничего нет!</h1>
      <p>
        Создайте пространство, в рамках которого будут храниться ваши файлы.
      </p>
      <Button onClick={createSpace}>Создать пространство</Button>
    </div>
  )
}
