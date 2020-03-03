// Component - Traveler's login page

import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/';
import { NavLink } from 'react-router-dom';

export const Login = props => {
    const [userLogin, setUserLogin] = useState({
        name: '',
        email: '',
        password: ''
    })
  
    const handleChange = event => {
      setUserLogin({
        ...userLogin,
        [event.target.name]: event.target.value
    })}
    
    const submitLogin = event => {
      event.preventDefault();
      axiosWithAuth()
      //Check API Endpoint
      .post('api/login', userLogin)
      .then(res =>{
        console.log('User Login', res);
            window.localStorage.setItem('token', res.data.payload);
            props.history.push('/dashboard');
      })
      .catch(err=>{
          console.log('Login post error', err)
        });
    }
    
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={submitLogin}>
          <input name='name' type='text' placeholder='Name' value={userLogin.name} onChange={handleChange} /> 
          <input name='email' type='text' placeholder='Email' value={userLogin.email} onChange={handleChange} />
          <input name='password' type='password' placeholder='Password' value={userLogin.password} onChange={handleChange} />
          <button>Login</button>
          <label>Don’t have an account?</label>
          <button className='signUpBtn'><NavLink to='/'>Sign up</NavLink></button>
        </form>
      </div>
    );
  };