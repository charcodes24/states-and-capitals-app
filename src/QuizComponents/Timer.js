import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Timer({ score }) {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    function renderRedirect() {
      if (timer === 0) {
        return <Redirect to="/retake_quiz" />;
      }
    }

    return (
      <div className="timer score">
        {renderRedirect()}
        <div>Time left:{timer}</div>
        <div></div>
        <div>Score: {score}</div>
      </div>
    );
}