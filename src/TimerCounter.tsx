import { useState, useEffect } from "react";
import { ProgressCircle, Dialog, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TimerCounter() {
  const totalTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setIsRunning(false);
          setIsDialogOpen(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  const handleBackToTop = () => {
    navigate("/");
  };

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

      {isRunning ? (
        <div className="timer-buttons">
          <Button onClick={handleStop}>ストップ</Button>
        </div>
      ) : (
        <div className="timer-buttons">
          <Button onClick={handleStart}>スタート</Button>
        </div>
      )}

      <Dialog.Root open={isDialogOpen}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Header>
              <Dialog.Title>お疲れさまでした。少し休憩しましょう ☕！</Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer>
              <Button colorScheme="cyan" onClick={handleBackToTop}>
                トップ画面に戻る
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
}
