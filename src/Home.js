import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="home">
        <h1 className="title">States & Capitals Quiz</h1>
        <h3 className="instructions">How well do you know the states and capitals? Take the quiz and find out! See how many you can get right in 60 seconds...</h3>
        <Link to="/quiz">
          <button className="ui blue basic button">Start Quiz</button>
        </Link>
      </div>
    );
}