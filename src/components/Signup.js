// Component - Traveler's sign up page

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const FormBack = styled.div`
background-color: #F4F5F7;
width: 25%;
margin: 0 auto;`

export const Signup = props => {
    const [userSignUp, setUserSignUp] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    })

    const handleChange = event => {
        setUserSignUp({
          ...userSignUp,
          [event.target.name]: event.target.value
      })}

    const submitForm = event => {
        event.preventDefault();

        axios
        .post('https://expatjournal-api.herokuapp.com/api/auth/register', userSignUp)
        .then(response => {
            console.log('signup response', response)
            props.history.push('/login');
            
        })
        .catch(error => {
            console.log(error);
        })

        setUserSignUp({
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        })
    }

    return (
        <div className='signup-container'>
                <h1>Sign Up Page</h1>
                <FormBack>
                <form onSubmit={submitForm}>
                    <input name='username' type='text' placeholder='User Name' value={userSignUp.username} onChange={handleChange} /> 
                    <input name='password' type='password' placeholder='Password' value={userSignUp.password} onChange={handleChange} />
                    <input name='first_name' type='text' placeholder='First Name' value={userSignUp.first_name} onChange={handleChange} />
                    <input name='last_name' type='text' placeholder='Last Name' value={userSignUp.last_name} onChange={handleChange} />
                    <input name='email' type='text' placeholder='Email' value={userSignUp.email} onChange={handleChange} />
                    <button>Sign Up</button>
                    <label>Already have an account?</label>
                    <button><NavLink to="/login">Log in</NavLink></button>
                </form>
                </FormBack>
        </div>
    )
}