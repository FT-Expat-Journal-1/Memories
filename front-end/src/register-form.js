import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";

const FormBack = styled.div`
background-color: #F4F5F7;
width: 25%;
margin: 0 auto;
`



const RegistorForm = props => {
    const [state, setState] = useState({
        name: "",
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
            name:"",
            email: "",
            password: ""
})
    };

//function Registorformic({errors, touched}){
    return (
        <FormBack>
            <form onSubmit={submitForm}>
                <br/>
                <div>
                {/* {touched.name && errors.name && <p>{errors.name}</p>} */}
            <label><input 
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={event => handleChange(event)}
            /></label>
</div>
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
            placeholder="Creat a password"
            onChange={event => handleChange(event)}
            /></label>
</div>
            <br/>

 <button>Sign Up</button>
            </form>

            <p>Already have an account? Login <Link to ="/login-form">here</Link></p>
        </FormBack>

    )
//}(Registorformic)
}

export default RegistorForm;

