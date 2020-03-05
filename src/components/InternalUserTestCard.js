import React from 'react';
import './InternalUserTestCard.scss';

export const InternalUserTestCard = props => {
    console.log('InternalUserTestCard props', props)
    return(
        <div className="userCard">
            <p>id: {props.id}</p>
            <p>Username: {props.username}</p>
            <p>Password: {props.password}</p>
            <p>First Name: {props.first_name}</p>
            <p>Last Name: {props.last_name}</p>
            <p>E-mail: {props.email}</p>
        </div>
    )
}