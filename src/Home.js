import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>How many state capitals can you get right in 60 seconds?</h1>
            <Link to="/quiz">
                <button>Start Quiz</button>
            </Link>
        </div>
    )
}