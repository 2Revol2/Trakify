import { ReactNode } from "react"
import style from "./ActionBtn.module.scss"
type Props = {
    children: ReactNode
}

export const ActionBtn = ({children}:Props) => {
  return (
    <button className={style.button}>{children}</button>
  )
}
