import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variants: "delete" | "edit" | "default";
}

export const Button= ({ onClick, children, variants='default' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${style.button} ${style[variants]}`}>
      {children}
    </button>
  );
};
