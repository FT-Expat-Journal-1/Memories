// import React, {useState} from 'react';



// const registorForm = props => {
//     const [state, setState] = useState({
//         name: "",
//         email: "",
//         password: "",
//     })

//     const handleChange = event => {
//         setState({...state, [event.target.name]: event.target.value});
//     }

//     const submitForm = event => {
//         event.preventDefault();
//         props.addNewPerson(state);
//         setState({
//             name:"",
//             email: "",
//             password: ""
// })
//     };

//     return (
//         <div className="register">
//             <form onSubmit={submitForm}>
//             <label>Name:<input 
//             type="text"
//             name="name"
//             onChange={event => handleChange(event)}
//             /></label>

// <label>Email:<input 
//             type="text"
//             name="email"
//             onChange={event => handleChange(event)}
//             /></label>

// <label>password:<input 
//             type="password"
//             name="password"
//             onChange={event => handleChange(event)}
//             /></label>

//             </form>
//         </div>

//     )
// }

// export default registorForm;

import React, { useState } from "react";
import "./App.css";

function registorForm() {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleNameChange = event => {
    setUser({ name: event.target.value });
  };

  const handlePasswordChange = event => {
    setUser({ password: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleNameChange(event)} />
        </label>
        <label>
          Password:
          <input type="text" onChange={event => handlePasswordChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default registorForm;