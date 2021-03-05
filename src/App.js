import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import GithubUser from './pages/GithubUser';
import Home from './pages/Home';

const App = () => {
  return <BrowserRouter>
    <main className="container mx-auto">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:name">
          <GithubUser />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>;
}

export default App;