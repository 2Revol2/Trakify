import { QUOTES } from "../../Shared/Data";
import { useState } from "react";
import style from './Quotes.module.scss'
import { Button } from "../Button/Button";
export const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(Math.floor(Math.random()*QUOTES.length));
  function handlePrevClick() {
    setCurrentIndex((currentIndex + QUOTES.length - 1)%QUOTES.length)
  }
  function handleNextClick() {
    setCurrentIndex((currentIndex+1)%QUOTES.length)
  }
  return (
    <div className={style.quoteContainer}>
      <div className={style.quoteText}>{QUOTES[currentIndex]}</div>
      <div  className={style.buttonContainer}>
        <Button variants="default" onClick={handlePrevClick}>Преведущая</Button>
        <Button variants="default" onClick={handleNextClick}>Следующая</Button>
      </div>
    </div>
  );
};
