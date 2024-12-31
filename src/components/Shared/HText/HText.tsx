import { ReactNode } from "react"
import style from "./HText.module.scss"
type Props = {
    children:ReactNode
}

export const HText = ({children}:Props) => {
  return (
    <h2 className={style.title}>{children}</h2>
  )
}
