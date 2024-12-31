import style from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";
import { URL_LINK } from "../../../Shared/Consts";
type loginForm = {
  email: string;
  password: string;
};
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>();
  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(URL_LINK);
      const users = await response.json();
      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );
      if (user) {
        console.log("Пользователь найден", user);
      } else {
        console.log("Неверный логин или пароль");
      }
    } catch (error) {}
  };
  return (
    <div className={style.wrapper}>
      <div>
        <p className={style.title}>Ввойти в аккаунт</p>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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
          />
          <Link className={style.link} to="/registration">
            Создать аккаунт
          </Link>
          <button type="submit">Ввойти</button>
        </form>
      </div>
    </div>
  );
};
