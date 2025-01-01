import { useEffect, useState } from "react";
import { HText } from "../../Shared/HText/HText";
import style from "./AllHabit.module.scss";
import { ActionBtn } from "../../Shared/ActionBtn/ActionBtn";
type HabitsType = {
  name: string;
  motivation: string;
};

export const AllHabit = () => {

  const [habits, setHabits] = useState<HabitsType[]>([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(data);
  }, []);

  function deleteHandler({name, motivation}:HabitsType) {
    const data = JSON.parse(localStorage.getItem("habits") || "[]");

    for(let i = 0; i < data.length; i++) {
      if(name === habits[i].name  && motivation === habits[i].motivation) {
        data.splice(i, 1)
        break
      }
    }
    setHabits(data)
    localStorage.setItem('habits', JSON.stringify(data))
  }
  return (
    <div className={style.wrapper}>
      <div>
      {habits.length === 0 ? <HText>Добавьте привычку</HText> : <HText>Список привычек</HText>}
      </div>
      <div className={style.habitList}>
      
        {habits.map((habit, index) => {
          return (
            <div key={index} className={style.habitWrapper}>
              <div className={style.habitHeader}>
                <p className={style.description}>Привычка</p>
                <h3 className={style.habitName}>{habit.name}</h3>
                <p className={style.description}>Цель</p>
                <p className={style.habitMotivation}>{habit.motivation}</p>
              </div>
              <div className={style.habitBtn}>
                <ActionBtn>Отметить</ActionBtn>
                <button className={style.editBtn}>Редактировать</button>
                <button onClick={()=>deleteHandler(habit)} className={style.deleteBtn}>Удалить</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
