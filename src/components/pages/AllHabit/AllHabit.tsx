import { useEffect, useState } from "react";
import { HText } from "../../Shared/HText/HText";
import style from "./AllHabit.module.scss";
import { ActionBtn } from "../../Shared/ActionBtn/ActionBtn";
type HabitsType = {
  name: string;
  motivation: string;
  streak?: number;
  lastDay?: number;
};

export const AllHabit = () => {
  const [habits, setHabits] = useState<HabitsType[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editHabit, setEditHabit] = useState<HabitsType>({
    name: "",
    motivation: "",
  });
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(data);
  }, []);

  function deleteHandler({ name, motivation }: HabitsType) {
    const data = JSON.parse(localStorage.getItem("habits") || "[]");

    for (let i = 0; i < data.length; i++) {
      if (name === habits[i].name && motivation === habits[i].motivation) {
        data.splice(i, 1);
        break;
      }
    }
    setHabits(data);
    localStorage.setItem("habits", JSON.stringify(data));
  }
  function editHabitHandler(index: number) {
    setEditIndex(index);
    setEditHabit(habits[index]);
    setEdit(!edit);
  }
  const updatedHabits = [...habits];

  function saveEditHabitHandler() {
    if (editIndex === null) return;
    updatedHabits[editIndex] = editHabit;
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    setEditIndex(null);
    setEdit(false);
  }
  const [streak, setStreak] = useState<number>(0);

  function dayStreack(index: number) {
    const today = new Date();
    const habit = updatedHabits[index]
    const currentDay = today.getDate();
    if (habit.lastDay !== currentDay) {
      habit.streak = (habit.streak || 0) + 1; 
      habit.lastDay = today.getDate(); 
      const count = streak + 1
      setStreak(count)
      setHabits(updatedHabits)
      localStorage.setItem("habits", JSON.stringify(updatedHabits))
    }
  }

  return (
    <div className={style.wrapper}>
      <div>
        {habits.length === 0 ? (
          <HText>Добавьте привычку</HText>
        ) : (
          <HText>Список привычек</HText>
        )}
      </div>
      <div className={style.habitList}>
        {habits.map((habit, index) => {
          const isEditing = edit && editIndex === index;
          return (
            <div key={index} className={style.habitWrapper}>
              <div className={style.habitHeader}>
                <p className={style.description}>Привычка</p>
                {isEditing ? (
                  <input
                    className={`${style.edit} ${style.editName}`}
                    value={editHabit.name}
                    onChange={(event) =>
                      setEditHabit({ ...editHabit, name: event.target.value })
                    }
                  />
                ) : (
                  <h3 className={style.habitName}>{habit.name}</h3>
                )}

                <p className={style.description}>Цель</p>
                {isEditing ? (
                  <input
                    className={style.edit}
                    value={editHabit.motivation}
                    onChange={(event) =>
                      setEditHabit({
                        ...editHabit,
                        motivation: event.target.value,
                      })
                    }
                  />
                ) : (
                  <p className={style.habitMotivation}>{habit.motivation}</p>
                )}
              </div>
              <p className={style.description}>
                Ударный режим(можно отметить только один раз в день)
              </p>
              <p className={style.streak}>{updatedHabits[index].streak}</p>
              <div className={style.habitBtn}>
                {isEditing ? (
                  <ActionBtn onClick={saveEditHabitHandler}>
                    Сохранить
                  </ActionBtn>
                ) : (
                  <ActionBtn onClick={() => dayStreack(index)}>
                    Отметить
                  </ActionBtn>
                )}
                {isEditing ? (
                  <button
                    className={style.editBtn}
                    onClick={() => editHabitHandler(index)}
                  >
                    Отменить
                  </button>
                ) : (
                  <button
                    className={style.editBtn}
                    onClick={() => editHabitHandler(index)}
                  >
                    Редактировать
                  </button>
                )}
                {isEditing ? null : (
                  <button
                    onClick={() => deleteHandler(habit)}
                    className={style.deleteBtn}
                  >
                    Удалить
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
