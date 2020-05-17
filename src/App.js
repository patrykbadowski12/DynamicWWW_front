import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Books from './components/Books';
import Encyclopedia from './components/Encyclopedia';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/books" component={Books}/>
        <Route path="/encyclopedia" component={Encyclopedia}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
