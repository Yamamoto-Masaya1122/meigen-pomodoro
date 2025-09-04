import { useState, useEffect } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import TimerProgress from "@/components/TimerProgress";
import TimerModal from "@/components/TimerModal";

export default function TimerCounter() {
  const POMO_TIME = 25 * 60; // 25分
  const REST_TIME = 5 * 60;  // 5分

  const [timer, setTimer] = useState(POMO_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mode, setMode] = useState("pomo"); 
  const [pomoCount, setPomoCount] = useState(0); 

  useEffect(() => {
    if (!isRunning || timer <= 0) return;

    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setIsRunning(false);

          if (mode === "pomo") {
            // 作業モードが終わったら休憩へ
            setMode("rest");
            setTimer(REST_TIME);
            setIsRunning(true); // 自動で休憩を開始
            setIsDialogOpen(true); // ダイアログ表示
            setPomoCount((c) => c + 1); // ポモドーロ数を更新
          } else {
            // 休憩が終わったら再び作業へ
            setMode("pomo");
            setTimer(POMO_TIME);
            setIsRunning(true); // 自動で作業を開始
          }

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning, mode]);

  const handleStart = () => setIsRunning(true);
  const handleReset = () => {
    setIsRunning(false);
    setMode("pomo");
    setTimer(POMO_TIME);
  };
  const handlePause = () => setIsRunning(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const totalTime = mode === "pomo" ? POMO_TIME : REST_TIME;
  const progressValue = ((totalTime - timer) / totalTime) * 100;

  return (
    <>
      <TimerProgress progressValue={progressValue} />
      <div className="timer-time">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      {isRunning ? (
        <div className="timer-buttons">
          <button onClick={handlePause}>
            <FaRegPauseCircle style={{ fontSize: "3rem", color: "white" }} />
          </button>
        </div>
      ) : (
        <div className="timer-buttons">
          <button onClick={handleStart}>
            <FaRegCirclePlay style={{ fontSize: "3rem", color: "white" }} />
          </button>
          <button onClick={handleReset}>
            <FaRegStopCircle style={{ fontSize: "3rem", color: "white" }} />
          </button>
        </div>
      )}

      {/* <div className="pomo-count">
        現在 <strong>{pomoCount}</strong> ポモドーロ
      </div> */}

      <TimerModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
    </>
  );
}
