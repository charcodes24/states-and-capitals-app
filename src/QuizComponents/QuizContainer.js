import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import ScoreCard from "./ScoreCard";
import Timer from "./Timer";


export default function QuizContainer({ states }) {


    return (
        <div>
            Quiz Container
            <Timer />
        </div>
    )

}