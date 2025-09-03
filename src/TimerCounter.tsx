import { useState, useEffect } from "react";
import { ProgressCircle, Button } from "@chakra-ui/react";

export default function TimerCounter() {
  const totalTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressValue = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <>
      <ProgressCircle.Root value={progressValue} size="xl">
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range stroke="cyan.500" />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <div className="timer-time">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      <div className="timer-buttons">
        {isRunning ? (
          <Button onClick={stopTimer}>ストップ</Button>
        ) : (
          <Button onClick={startTimer}>スタート</Button>
        )}
      </div>
    </>
  )
}