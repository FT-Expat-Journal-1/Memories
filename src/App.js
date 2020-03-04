import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { ProfilePage } from './components/ProfilePage';
import { ProfilePostsForm } from './components/ProfilePostsForm';
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
          <Route path='/profile' component={ProfilePage} />
          <Route path='/setting' component={ProfileSetting}/>
          <Route path='/update-setting' component={ProfileSettingCardForm} />
          <Route path='/update-post/:id' component={ProfilePostsForm} />
          <Route path="/login" component={Login}/>
          <Route path="/" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
