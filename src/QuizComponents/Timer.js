import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Timer() {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    function renderRedirect() {
      if (timer === 0) {
        return <Redirect to="/scorecard" />;
      }
    }

    return (
        <div>
            {renderRedirect()}
            <div>{timer}</div>
        </div>
    )
}