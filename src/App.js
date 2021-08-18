import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './NavBar';
import QuizHome from './QuizComponents/QuizHome';
import FunFactsContainer from './FunFactsComponents/FunFactsContainer';

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

  //function to update likes on individual state cards in FunFactsContainer.js
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
          <FunFactsContainer
            states={states}
            updateLikes={updateLikes}
          />
        </Route>
        <Route path="/">
          <QuizHome
            states={states}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
