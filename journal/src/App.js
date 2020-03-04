import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import ProfileSetting from './components/ProfileSetting';
import { ProfileSettingCardForm } from './components/ProfileSettingCardForm';

import './App.css';

function App() {

  const logOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('traveler_id');
  }


  return (
    <div className="App">
      <header>
      <NavLink to='/' >Sign Up</NavLink>
      <NavLink onClick={logOut} to='/login' >Log out</NavLink>
      </header>

      <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route exact path='/profile/' component={ProfilePage} />
          <Route exact path='/setting/' component={ProfileSetting}/>
          <Route exact path='update-setting/:id' component={ProfileSettingCardForm} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
