import style from "./Welcome.module.scss"
import { Link } from "react-router"
import { HText } from "../../Shared/HText/HText"
export const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcomeWrapper}>
        <div>
          <HText>Добро пожаловать!!!</HText>
        </div>
        <div>
          <Link to='/login' className={style.welcomeButton}>Начать</Link>
        </div>
      </div>
    </div>
  )
}
