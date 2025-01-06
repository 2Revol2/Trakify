import { ReactNode } from "react";
import style from "./Description.module.scss";
type Props = {
  children: ReactNode;
};
export const Description = ({ children }: Props) => {
  return <p className={style.subtitles}>{children}</p>;
};
