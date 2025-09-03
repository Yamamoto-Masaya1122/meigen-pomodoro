import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(25);
  return (
    <>
      <h1>タイマーページです</h1>
      <p>{time}</p>
    </>
  )
}