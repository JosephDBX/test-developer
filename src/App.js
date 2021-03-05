import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';

const App = () => {
  return <BrowserRouter>
    <main className="container mx-auto">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>;
}

export default App;