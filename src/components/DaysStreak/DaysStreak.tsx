import { ReactNode } from "react";
import style from './DaysStreak.module.scss'
type Props = {
  children: ReactNode;
};

export const DaysStreak = ({ children }: Props) => {
  return <p className={style.streak}>{children}</p>;
};
