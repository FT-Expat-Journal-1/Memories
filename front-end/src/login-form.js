// import React, {useState} from 'react';



// const registorForm = props => {
//     const [state, setState] = useState({
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
//             email: "",
//             password: ""
// })
//     };

//     return (
//         <div className="register">
//             <form onSubmit={submitForm}>
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