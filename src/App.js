import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './NavBar';
import QuizContainer from './QuizComponents/QuizContainer';
import FunFactsContainer from './FunFactsComponents/FunFactsContainer';
import ScoreCard from './QuizComponents/ScoreCard';
import Home from './Home';

function App() {
  const [states, setStates] = useState([])

  //Initial GET fetch for all states
  useEffect(() => {
    fetch("http://localhost:3004/states")
      .then((res) => res.json())
      .then((states) => {
        const shuffledArray = states.sort((a, b) => 0.5 - Math.random());
        setStates(shuffledArray);
      });
  }, []);

  //function to update likes on individual state cards in
  function updateLikes(updatedState) {
    setStates((states) => 
      states.map((state) => {
        return state.id === updatedState.id ? updatedState : state;
      }))
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/funfacts">
          <FunFactsContainer states={states} updateLikes={updateLikes} />
        </Route>
        <Route path="/quiz">
          <QuizContainer states={states} />
        </Route>
        <Route path="/scorecard">
          <ScoreCard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
