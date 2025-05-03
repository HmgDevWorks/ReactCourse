import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);

        }, 10);
    }

    function handleStop() {
        clearInterval(timerRef.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                {timeRemaining <= 0 && <p>You lost!</p>}
                <p className="clallenege-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={!timerIsActive ? handleStart : handleStop}>
                        {(!timerIsActive ? "Start" : "Stop")} Challenge
                    </button>
                </p>
                {/* <button>Reset</button> */}
                <p>{timerIsActive ? "Time is running..." : "Timer inactive"}</p>
                {/* <p>Time: 0</p> */}
            </section>
        </>
    );
}