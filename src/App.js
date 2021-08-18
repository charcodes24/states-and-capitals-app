import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar';
import QuizHome from './QuizComponents/QuizHome';

function App() {
  return (
    <div className="App">
      <NavBar />
      <QuizHome />
      <Switch>
        <Route path="/"></Route>
        <Route path="/funfacts"></Route>
      </Switch>
    </div>
  );
}

export default App;
