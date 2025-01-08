import style from "./Welcome.module.scss";
import { Link } from "react-router";
import { Title } from "../../components/Title/Title";
import { paths } from "../../shared/config";
export const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcomeWrapper}>
        <div>
          <Title>Добро пожаловать!!!</Title>
        </div>
        <div>
          <Link to={paths.LOGIN} className={style.welcomeButton}>
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
};
