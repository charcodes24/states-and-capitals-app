import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="home">
        <h1>How well do you know your state capitals?</h1>
        <h3>Take the quiz and find out! See how many you can get right in 60 seconds.</h3>
        <Link to="/quiz">
          <button className="ui red basic button">Start Quiz</button>
        </Link>
      </div>
    );
}