import { useParams } from "react-router";
import { HabitsType } from "../../Shared/Types";
import style from "./HabitDetails.module.scss";
import { Title } from "../../components/Title/Title";
import { HabitCalendar } from "../../components/Calendar/HabitCalendar";
export const HabitDetails = () => {
  const { name } = useParams();
  const habitsData: HabitsType[] = JSON.parse(
    localStorage.getItem("habits") || "[]"
  );
  const habit = habitsData.find((habit) => habit.name === name);
  const completedDays = habit?.completeDays || [];

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Title>{habit?.name}</Title>
      </div>
      <div className={style.contentWrap}>
        {/* 1 */}
        <div>
          <div>
            <p>Календарь выполнения</p>
            <HabitCalendar completedDays={completedDays} />
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <p>Ударный режим</p>
            {habit?.streak}
          </div>
        </div>
        {/* 3 */}
        <div>3</div>
      </div>
    </div>
  );
};
