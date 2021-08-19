import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import ScoreCard from "./ScoreCard";


export default function QuizContainer({ states }) {
    const [timer, setTimer] = useState(5);
    const [score, setScore] = useState(0);

    useEffect(() => {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    function renderRedirect() {
        if (timer === 0) {
            return <Redirect to="/scorecard" />
        }
    }

    return (
        <div>
            {renderRedirect()}
            <hi>THIS IS A TEST</hi>
        </div>
    )

}