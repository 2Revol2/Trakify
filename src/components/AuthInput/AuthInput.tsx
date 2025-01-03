import { UseFormRegister } from "react-hook-form";
import style from "./AuthInput.module.scss";
interface Props {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validationRules?: object;
}

export const AuthInput = ({
  name,
  type,
  placeholder,
  register,
  validationRules,
}: Props) => {
  return (
    <input
      className={style.authInput}
      type={type}
      placeholder={placeholder}
      {...register(name, validationRules)}
    />
  );
};
