import style from "./Welcome.module.scss";
import { Link } from "react-router";
import { Title } from "../../components/Title/Title";
export const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcomeWrapper}>
        <div>
          <Title>Добро пожаловать!!!</Title>
        </div>
        <div>
          <Link to="/login" className={style.welcomeButton}>
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
};
