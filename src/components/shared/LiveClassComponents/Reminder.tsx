
import React from "react"
import { Calendar } from "../../ui/calendar"
 const Reminder = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-fit"
    />
  )
}

export default Reminder