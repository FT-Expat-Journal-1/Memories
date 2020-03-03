import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import './App.css';

function App() {

  const logOut = () => {
    window.localStorage.removeItem('token');
  }


  return (
    <div className="App">
      <header>
      <NavLink to='/' >Sign Up</NavLink>
      <NavLink onClick={logOut} to='/login' >Log out</NavLink>
      </header>

      <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          {/* <Route path='/profileForm/:id'><ListingForm /></Route> */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
