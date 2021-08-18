import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/funfacts"></Route>
        <Route path="/quizhome"></Route>
      </Switch>
    </div>
  );
}

export default App;
