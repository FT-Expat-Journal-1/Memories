import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegistorForm from './register-form';
import LoginForm from './login-form'

function App() {


  return (
    <div className="App">
      <Router>
      <Route exact path ="/">
      <RegistorForm/>
      </Route>
      
      <Route exact path ='/login-form'>
      <LoginForm/>
      </Route>
      </Router>

    </div>
  );
}

export default App;
