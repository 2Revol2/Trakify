import Calendar from "react-calendar";
import style from "./HabitCalendar.module.scss";
import "react-calendar/dist/Calendar.css";

type Props = {
  completedDays: string[];
};
export const HabitCalendar = ({ completedDays }: Props) => {

  
  return (
    <Calendar
      tileClassName={({ date }) => {
        const dateString = date.toLocaleDateString("en-CA"); 
        return completedDays.includes(dateString) ? style.markDays : "";
      }}
    />
  );
};
