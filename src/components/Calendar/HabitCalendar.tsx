import Calendar from "react-calendar"
import { useState } from "react"
import style from './HabitCalendar.module.scss'
import 'react-calendar/dist/Calendar.css'

export const HabitCalendar = () => {
  const [activeData, setActiveData] = useState<Date | undefined>(new Date)
  
  return (
   <Calendar activeStartDate={activeData}/>
  )
}
