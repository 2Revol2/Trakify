import { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import style from "./AllHabit.module.scss";
import { HabitsType } from "../../shared/Types";
import { HabitItem } from "../../components/HabitItem/HabitItem";
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

  function saveEditHabitHandler() {
    const updatedHabits = [...habits];
    if (editIndex === null) return;
    updatedHabits[editIndex] = editHabit;
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    setEditIndex(null);
    setEdit(false);
  }
  const [streak, setStreak] = useState<number>(0);

  function dayStreak(habitName: string) {
    const habitsData: HabitsType[] = JSON.parse(
      localStorage.getItem("habits") || "[]"
    );
    const today = new Date().toLocaleDateString("en-CA");
    const updatedHabits = habitsData.map((habit: HabitsType) => {
      if (habit.name === habitName) {
        if (habit.lastDay !== today) {
          habit.streak = (habit.streak || 0) + 1;
          const count = streak + 1;
          habit.lastDay = today;
          if (!habit.completeDays) {
            habit.completeDays = [];
          }
          habit.completeDays.push(today);
          setStreak(count);
        }
      }

      return habit;
    });
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    setHabits(updatedHabits);
  }
  return (
    <div className={style.wrapper}>
      <div>
        {habits.length === 0 ? (
          <Title>Добавьте привычку</Title>
        ) : (
          <Title>Список привычек</Title>
        )}
      </div>
      <div className={style.habitList}>
        {habits.map((habit, index) => {
          const isEditing = edit && editIndex === index;
          return (
            <HabitItem
              key={habit.name}
              habit={habit}
              index={index}
              isEditing={isEditing}
              editHabit={editHabit}
              editHabitHandler={editHabitHandler}
              saveEditHabitHandler={saveEditHabitHandler}
              deleteHandler={deleteHandler}
              dayStreak={dayStreak}
              setEditHabit={setEditHabit}
            />
          );
        })}
      </div>
    </div>
  );
};
