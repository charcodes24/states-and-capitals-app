import { useState } from "react";

import Timer from "./Timer";
import QuestionItem from "./QuestionItem";


export default function QuizContainer({ states, score, updateScore }) {
    const [answer, setAnswer] = useState("")
    const [questionIndex, setQuestionIndex] = useState(0)

    function handleInput(e) {
      setAnswer(e.target.value);
    }

    function nextQuestion(e) {
    if (answer === "") {
      alert(`Please select an answer!`)
    } else if (answer === states[questionIndex].capital && questionIndex < 51) {
        setQuestionIndex(questionIndex + 1)
        updateScore(score);
        setAnswer(e.target.value)
    } else {
      setQuestionIndex(questionIndex + 1)
        setAnswer(e.target.value)
        return score
    }
  }


    return (
      <div className="question-container">
        <Timer score={score} />
        <QuestionItem
          state={states[questionIndex]}
          nextQuestion={nextQuestion}
          handleInput={handleInput}
          score={score}
          answer={answer}
        />
      </div>
    );

}