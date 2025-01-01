import { HText } from "../../../Shared/HText/HText";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./Registration.module.scss";
import { USER_INFO } from "../../../Shared/Consts";
type loginForm = {
  nickname: string;
  email: string;
  password: string;
  passwordAgain: string;
};
export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>();
  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    try {
      if (data.password === data.passwordAgain) {
        const { passwordAgain, ...dataToSend } = data;
        const response = await fetch(USER_INFO, {
          method: "POST",
          body: JSON.stringify(dataToSend),
        });
      }
    } catch (error) {}
  };
  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <HText>Создать аккаунт</HText>
        <input
          type="text"
          placeholder="nickname"
          {...register("nickname", {
            required: "This field is required",
          })}
        />
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: "This field is required",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className={style.warning}>
            {errors.email.type === "pattern" && "Invalid email addres."}
          </p>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "This field is required",
            min: 5,
          })}
        />{" "}
        <input
          type="password"
          placeholder="password again"
          {...register("passwordAgain", {
            required: "This field is required",
            min: 5,
          })}
        />
        <button type="submit">Создать аккаунт</button>
      </form>
    </div>
  );
};
