export function Countdown() {
  const dateNow = new Date();
  
  const transformInDays = () => {
    const months = dateNow.getMonth()
    let totalDays = 0

    for ( let i = 1; i !== months; i++ ) {
      totalDays += 31
    }

    return (31 - dateNow.getDate()) + totalDays
  }

  return (
    <>
      <h1>{transformInDays()}</h1>
      <h1>{12 - (dateNow.getMonth() + 1) }</h1>
      <h1>{dateNow.getFullYear()}</h1>
    </>
  );
}