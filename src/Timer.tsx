import "./Timer.css";
import TimerCounter from "./TimerCounter";
import MeigenText from "./MeigenText";

export default function Timer() {
  return (
    <div className="timer-container">
      <div className="timer-left">
        <TimerCounter />
      </div>
      <div className="timer-right">
        <MeigenText />
      </div>
    </div>
  );
}
