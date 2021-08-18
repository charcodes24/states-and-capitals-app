import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar';
import QuizHome from './QuizComponents/QuizHome';
import FunFactsContainer from './FunFactsComponents/FunFactsContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/funfacts" component={FunFactsContainer} />
        <Route path="/" component={QuizHome} />
      </Switch>
    </div>
  );
}

export default App;
