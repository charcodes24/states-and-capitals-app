import { Link } from "react-router-dom"
export default function RetakeQuiz({ score, restartQuiz }) {
    return (
      <div className="retake">
        <h2 className="timesup">Times up!</h2>
        <h2 className="timesup">Your Score: {score}</h2>
        <button className="ui red basic button" onClick={restartQuiz}>
          Retake Quiz!
        </button>
      </div>
    );
}