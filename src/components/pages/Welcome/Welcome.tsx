import style from "./Welcome.module.scss"
import { Link } from "react-router"
export const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcomeWrapper}>
        <div>
          <h2 className={style.welcomeTitle}>Добро пожаловать!!!</h2>
        </div>
        <div>
          <Link to='/login' className={style.welcomeButton}>Начать</Link>
        </div>
      </div>
    </div>
  )
}
