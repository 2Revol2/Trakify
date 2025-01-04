import { useParams } from "react-router";
import { HabitsType } from "../../Shared/Types";
import style from "./HabitDetails.module.scss";
import { Title } from "../../components/Title/Title";
import { HabitCalendar } from "../../components/Calendar/HabitCalendar";
import { DaysStreak } from "../../components/DaysStreak/DaysStreak";
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
        <div className={style.calendarBlock}>
          <div>
            <p className={style.subtitles}>Календарь выполнения</p>
            <HabitCalendar completedDays={completedDays} />
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className={style.habitInfo}>
            <p className={style.subtitles}>Ударный режим</p>
            <DaysStreak>{habit?.streak}</DaysStreak>
          </div>
          <div className={style.habitInfo}>
            <p className={style.subtitles}>Цель</p>
            <p>{habit?.motivation}</p>
          </div>
        </div>
        {/* 3 */}
        <div>3</div>
      </div>
    </div>
  );
};
