// Component - Traveler's sign up page

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Signup = props => {
    const [userSignUp, setUserSignUp] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = event => {
        setUserSignUp({
          ...userSignUp,
          [event.target.name]: event.target.value
      })}

    const submitForm = event => {
        event.preventDefault();

        axios
        .post('http://localhost:5000/api/login', userSignUp)
        .then(response => {
            console.log('signup response', response)
            props.history.push('/login');
            
        })
        .catch(error => {
            console.log(error);
        })

        setUserSignUp({
            name: '',
            username: '',
            password: ''
        })
    }

    return (
        <div className='signup-container'>
                <h1>Sign Up Page</h1>
                <form onSubmit={submitForm}>
                    <input name='name' type='text' placeholder='Name' value={userSignUp.name} onChange={handleChange} /> 
                    <input name='email' type='text' placeholder='Email' value={userSignUp.email} onChange={handleChange} />
                    <input name='password' type='password' placeholder='Password' value={userSignUp.password} onChange={handleChange} />
                    <button>Sign Up</button>
                    <label>Already have an account?</label>
                    <button><NavLink to='/login'>Log in</NavLink></button>
                </form>
        </div>
    )
}