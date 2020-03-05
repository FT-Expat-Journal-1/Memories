import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { ProfilePage } from './components/ProfilePage';
import { PostCreateForm } from './components/PostCreateForm';
import { ProfilePostsForm } from './components/ProfilePostsForm';
import { InternalUserTest } from './components/InternalUserTest';
import ProfileSetting from './components/ProfileSetting';
import { ProfileSettingCardForm } from './components/ProfileSettingCardForm';
import './App.css';

function App() {



  return (
    <div className="App">
      

      <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/setting' component={ProfileSetting} />
          <Route path='/update-setting' component={ProfileSettingCardForm} />
          <Route path='/add-post' component={PostCreateForm} />
          <Route path='/update-post/:id' component={ProfilePostsForm} />
          <Route path ='/internal-test' component={InternalUserTest} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
