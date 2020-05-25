import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Books from './components/Books';
import Encyclopedia from './components/Encyclopedia';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import EncyclopediaPage from './components/EncyclopediaPage';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      isLogged: localStorage.getItem('isLogged'),
    };
  }

  
  render() {
    return (
      <div>
        <HashRouter>
        {this.state.isLogged ? <Navbar></Navbar> : null}
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/books" component={Books} />
            <Route path="/encyclopedies" component={Encyclopedia} />
            <Route path="/admin" component={AdminPanel} />
            <Route path="/encyclopedia/:id" component={EncyclopediaPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
