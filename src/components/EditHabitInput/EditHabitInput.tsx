import { InputHTMLAttributes } from "react";
import style from "./EditHabitInput.module.scss";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variants: "editHabitName" | "editHabitMotivation";
}

export const EditHabitInput = ({value, onChange, variants }: Props) => {
  return (
    <input
      className={`${style.edit} ${style[variants]}`}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
