import { Title } from "../../../components/Title/Title";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./Registration.module.scss";
import { USER_INFO } from "../../../Shared/Consts";
import { Button } from "../../../components/Button/Button";
import { AuthInput } from "../../../components/AuthInput/AuthInput";
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
        await fetch(USER_INFO, {
          method: "POST",
          body: JSON.stringify(dataToSend),
        });
      }
      else {
        alert('Пароли не совпадают')
      }
    } catch (error) {
    }
  };
  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Title>Создать аккаунт</Title>
        <AuthInput
          name="nickname"
          type="text"
          placeholder="nickname"
          register={register}
          validationRules={{
            required: "This field is required",
          }}
        />
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
        <AuthInput
          name="passwordAgain"
          type="password"
          placeholder="password again"
          register={register}
          validationRules={{
            required: "This field is required",
            min: 5,
          }}
        />

        <Button variants="default">Создать аккаунт</Button>
      </form>
    </div>
  );
};
