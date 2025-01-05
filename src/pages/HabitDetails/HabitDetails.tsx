import { useParams } from "react-router";
import { HabitsType } from "../../Shared/Types";
import style from "./HabitDetails.module.scss";
import { Title } from "../../components/Title/Title";
import { HabitCalendar } from "../../components/Calendar/HabitCalendar";
import { DaysStreak } from "../../components/DaysStreak/DaysStreak";
import { Quotes } from "../../components/Quotes/Quotes";

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
          <div className={style.calendarBlock}>
            <p className={style.subtitles}>Календарь выполнения</p>
            <HabitCalendar completedDays={completedDays} />
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className={style.habitInfo}>
            <p className={style.subtitles}>Дни выполнения</p>
            <DaysStreak>{habit?.streak}</DaysStreak>
          </div>
          <div className={style.habitInfo}>
            <p className={style.subtitles}>Цель</p>
            <p className={style.motivation}>{habit?.motivation}</p>
          </div>
        </div>
        {/* 3 */}
        <div className={style.moreInfo}>
          <div>
            <p className={style.subtitles}>Мотивационные цитаты</p>
            <p><Quotes/></p>
          </div>
        </div>
      </div>
    </div>
  );
};
