import { ReactNode } from "react";
import style from "./ActionBtn.module.scss";
type Props = {
  onClick?: () => void;
  children: ReactNode;
};

export const ActionBtn = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};
