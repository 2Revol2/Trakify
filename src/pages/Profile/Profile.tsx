import style from "./Profile.module.scss";
import { Title } from "../../components/Title/Title";
import { HabitsType } from "../../Shared/Types";
import { DaysStreak } from "../../components/DaysStreak/DaysStreak";
import { useNavigate } from "react-router";
import { Description } from "../../components/Description/Description";
export const Profile = () => {
  const data: HabitsType[] = JSON.parse(localStorage.getItem("habits") || "[]");
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div>
        <Title>Профиль</Title>
      </div>
      <div className={style.profile}>
        <div className={style.userInfo}>
          <div className={style.blockInfo}>
            <p>Ник</p>
            <p>Пользователь</p>
          </div>
          <div className={style.blockInfo}>
            <p>Почта</p>
            <p>test@test.com</p>
          </div>
        </div>
        
        <div className={style.habitWrapper}>
        <Description>Привычки</Description>
          {data.map((habit, index) => {
            return (
              <div
                className={style.habit}
                key={index}
                onClick={() => navigate(`/habit/${habit.name}`)}
              >
                <div>
                  <p className={style.info}>Привычка</p>
                  <Description>{habit?.name}</Description>
                </div>
                <div>
                  <p className={style.info}>Дни выполнения</p>
                  <DaysStreak>{habit.streak}</DaysStreak>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
