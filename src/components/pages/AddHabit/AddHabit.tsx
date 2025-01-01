import { HText } from "../../Shared/HText/HText";
import style from "./AddHabit.module.scss";
import { ActionBtn } from "../../Shared/ActionBtn/ActionBtn";
export const AddHabit = () => {
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const habitName = (form.elements[0] as HTMLInputElement).value;
    const habitMotivation = (form.elements[1] as HTMLInputElement).value;
    console.log(form.elements);
    
    const currentHabits = JSON.parse(localStorage.getItem("habits") || "[]");

    const updatedHabits = [
      ...currentHabits,
      { name: habitName, motivation: habitMotivation },
    ];
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    form.reset();
  }

  return (
    <div className={style.wrapper}>
      <div>
        <HText>Добавить привычку</HText>
      </div>
      <div className={style.habbitWrapper}>
        <form onSubmit={(event) => submitHandler(event)}>
          <p>Введите название привычки</p>
          <input type="text" />
          <p>Мотивация выполнения для себя в будущем</p>
          <textarea cols={50} rows={10} />
          <ActionBtn>Создать привычку</ActionBtn>
        </form>
      </div>
    </div>
  );
};
