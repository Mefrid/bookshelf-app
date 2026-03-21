import type { DetailedHTMLProps, FC, PropsWithChildren } from "react"

import styles from "./Button.module.css"

type Props = PropsWithChildren<
  Omit<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "className"
  >
>

export const Button: FC<Props> = ({ children, ...htmlProps }) => {
  return (
    <button className={styles.button} {...htmlProps}>
      {children}
    </button>
  )
}
