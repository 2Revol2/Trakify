import style from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router";
import { USER_INFO } from "../../../Shared/Consts";
import { Title } from "../../../components/Title/Title";
import { Button } from "../../../components/Button/Button";
import { AuthInput } from "../../../components/AuthInput/AuthInput";
import { useState } from "react";
type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
type loginForm = {
  email: string;
  password: string;
};

export const Login = ({ setIsAuth }: Props) => {
  const [isAuth, setIsLocaleAuth] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    defaultValues: {
      email: "test@test.com",
      password: "password123",
    },
  });

  const onSubmit: SubmitHandler<loginForm> = async (data) => {
    setIsAuth(true)
    setIsLocaleAuth(true)
    const { email, password } = data;
 
    try {
      const response = await fetch(USER_INFO);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.wrapper}>
      <div>
        <Title>Ввойти в аккаунт</Title>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <AuthInput
            name="email"
            type="text"
            placeholder="email"
            register={register}
            validationRules={{
              required: "This field is required",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
          />
          {errors.email && (
            <p className={style.warning}>
              {errors.email.type === "pattern" && "Invalid email addres."}
            </p>
          )}
          <AuthInput
            name="password"
            type="password"
            placeholder="password"
            register={register}
            validationRules={{
              required: "This field is required",
              min: 5,
            }}
          />
          <Link className={style.link} to="/registration">
            Создать аккаунт
          </Link>
          <Button variants="default">Ввойти</Button>
          {isAuth && <Navigate to={'/add-habbit'}/>}
        </form>
      </div>
    </div>
  );
};
