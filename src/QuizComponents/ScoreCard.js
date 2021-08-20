import { Link } from "react-router-dom"
export default function ScoreCard({ score, restartQuiz }) {
    return (
      <div>
        <div>Times up!</div>
        <div>Your Score: {score}</div>
        <button onClick={restartQuiz}>Retake Quiz!</button>
      </div>
    );
}