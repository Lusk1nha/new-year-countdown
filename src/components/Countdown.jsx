import { useEffect, useState } from "react";

export function Countdown() {
  const dateNow = new Date();

  const [totalDays, setTotalDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  useEffect(() => {
    transformInDays()
    getHour()
    getMinutes()
    getSeconds()
  }, [])
  
  const transformInDays = () => {
    const months = (dateNow.getMonth() - 1) * 31
    const restDays = (31 - dateNow.getDate())
    
    return setTotalDays(restDays + months)
  }

  const getHour = () => {
    const hour = 24 - dateNow.getHours()
    return setHours(hour < 10 ? `0${hour}` : hour)
  }

  const getMinutes = () => {
    const minutes = 59 - dateNow.getMinutes()
    return setMinutes(minutes < 10 ? `0${minutes}` : minutes)
  }

  const getSeconds = () => {
    const seconds = 59 - dateNow.getSeconds()
    return setSeconds(seconds < 10 ? `0${seconds}` : seconds)
  }

  return (
    <div className="countdown">
      <h1>{totalDays}</h1>
      <h1>{hours}</h1>
      <h1>{minutes}</h1>
      <h1 className="seconds">{seconds}</h1>
    </div>
  );
}