import React,{ useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/';
import { NavLink } from 'react-router-dom'
import { InternalUserTestCard } from './InternalUserTestCard';

export const InternalUserTest = () =>{

    const [testUsers, setTestUsers] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/users')
        .then(response => {
            console.log('InternalUserTest GET response', response);
            setTestUsers(response.data);
        })
        .catch(error=> console('InternalUserTest GET response', error));
    },[]);

    console.log('testUsers', testUsers);
    return (
        <div>
            <h1>User Database</h1>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/setting'>Setting</NavLink>
            {testUsers.map(users => {
                return <InternalUserTestCard 
                    key={users.id} 
                    id={users.id}
                    username={users.username}
                    password={users.password}
                    first_name={users.first_name}
                    last_name={users.last_name}
                    email={users.email}
                    />
            })}
        </div>
    )
}