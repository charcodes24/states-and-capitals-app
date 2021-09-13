import { Link } from "react-router-dom"
export default function RetakeQuiz({ score, restartQuiz }) {
    return (
      <div className="timesup">
        <div>Times up!</div>
        <div>Your Score: {score}</div>
        <button className="ui red basic button tu-button" onClick={restartQuiz}>
          Retake Quiz!
        </button>
      </div>
    );
}