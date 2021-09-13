import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import './App.css';

import NavBar from './NavBar';
import QuizContainer from './QuizComponents/QuizContainer';
import FunFactsContainer from './FunFactsComponents/FunFactsContainer';
import ScoreCard from './QuizComponents/RetakeQuiz';
import Home from './Home';

function App() {
  const [states, setStates] = useState([])
  const [score, setScore] = useState(0)

  let history = useHistory();

  //Initial GET fetch for all states
  useEffect(() => {
    fetch("http://localhost:3004/states")
      .then((res) => res.json())
      .then((states) => {
        const shuffledArray = states.sort((a, b) => 0.5 - Math.random());
        setStates(shuffledArray);
      });
  }, []);

  console.log(states)

  //function to update likes on individual state cards in
  function updateLikes(updatedState) {
    setStates((states) => 
      states.map((state) => {
        return state.id === updatedState.id ? updatedState : state;
      }))
  };

  //function to update score
  function updateScore(score) {
    setScore(score + 1)
  }

  //function to reset score and start quiz
  function restartQuiz() {
    setScore(0)
    history.push("/quiz")
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/funfacts">
          <FunFactsContainer states={states} updateLikes={updateLikes} />
        </Route>
        <Route path="/quiz">
          <QuizContainer states={states} score={score} updateScore={updateScore} />
        </Route>
        <Route path="/retake_quiz">
          <ScoreCard score={score} restartQuiz={restartQuiz}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// json-server --watch db.json --port 3004
