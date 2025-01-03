import { Title } from "../../components/Title/Title";
import style from "./AddHabit.module.scss";
import { Button } from "../../components/Button/Button";
export const AddHabit = () => {
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const habitName = (form.elements[0] as HTMLInputElement).value;
    const habitMotivation = (form.elements[1] as HTMLInputElement).value;
    console.log(form.elements);
    if (habitName.length === 0) {
      alert("Введите привычку");
      return;
    }
    const currentHabits = JSON.parse(localStorage.getItem("habits") || "[]");

    const updatedHabits = [
      ...currentHabits,
      { name: habitName, motivation: habitMotivation, streak: 0, lastDay: 0 },
    ];
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    form.reset();
  }

  return (
    <div className={style.wrapper}>
      <div>
        <Title>Добавить привычку</Title>
      </div>
      <div className={style.habbitWrapper}>
        <form className={style.form} onSubmit={(event) => submitHandler(event)}>
          <p>Введите привычку</p>
          <input type="text" />
          <p>Цель</p>
          <textarea cols={50} rows={10} />
          <Button variants="default">Создать привычку</Button>
        </form>
      </div>
    </div>
  );
};
