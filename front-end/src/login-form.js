import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const FormBack = styled.div`
background-color: #F4F5F7;
width: 25%;
margin: 0 auto;
padding: 1%;
`



const LoginForm = props => {
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewPerson(state);
        setState({
            email: "",
            password: ""
})
    };

    return (
        <FormBack>
        <form onSubmit={submitForm}>
            <br/>
<div>
<label><input 
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={event => handleChange(event)}
            /></label>
</div>
            <br/>
<div>
<label><input 
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={event => handleChange(event)}
            /></label>

            
</div>
<br/>
 <button>Sign In</button>
            </form>

        <p>Don't have an account? Create one  <Link to ="/">here</Link></p>
        </FormBack>

    )
}

export default LoginForm;
