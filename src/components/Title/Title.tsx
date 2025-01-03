import { ReactNode } from "react"
import style from "./Title.module.scss"
type Props = {
    children:ReactNode
}

export const Title = ({children}:Props) => {
  return (
    <h2 className={style.title}>{children}</h2>
  )
}
