import style from "./Profile.module.scss";
import { Title } from "../../components/Title/Title";
import { Description } from "../../components/Description/Description";
export const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <Title>Ваш профиль</Title>
      </div>
      <div className={style.profile}>
        <div className={style.blockInfo}>
          <Description>Ваша почта</Description>
          <p>test@test.com</p>
        </div>
      </div>
    </div>
  );
};
