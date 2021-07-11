import { useEffect, useState } from "react";

export function Countdown() {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  useEffect(() => {
    const timerID = setInterval(() => {
      const dateNow = new Date()
      const newYearDate = new Date(`1 Jan ${dateNow.getFullYear() + 1}`);

      const totalSeconds = (newYearDate - dateNow) / 1000
      
      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)))
      setHours(formatTime(Math.floor(totalSeconds / 3600) % 24))
      setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60))
      setSeconds(formatTime(Math.floor(totalSeconds) % 60))
    }, 1000)

    return function cleanUp() {
      clearInterval(timerID)
    }
  }, [])

  const formatTime = (number) => {
    return number < 10 ? `0${number}` : number
  }

  return (
    <div className="countdown">
      <div>
        <h1>{days}</h1>
        <h5 className="sub-name">Dias</h5>
      </div>

      <div>
        <h1>{hours}</h1>
        <h5 className="sub-name">Horas</h5>
      </div>

      <div>
        <h1>{minutes}</h1>
        <h5 className="sub-name">Minutos</h5>
      </div>

      <div>
        <h3>{seconds}</h3>
        <h5 className="sub-name">Segundos</h5>
      </div>
    </div>
  );
}