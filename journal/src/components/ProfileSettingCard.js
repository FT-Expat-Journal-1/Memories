import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTravelerData } from '../actions';

export const ProfileSettingCard = props => {
    console.log('ProfileSettingCard props', props)
    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();

    const handleEdit = event => {
        event.preventDefault();

    }

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteTravelerData(travelerID));
    }

    return (
        <div>
        <p>User Name: {props.user.username}</p>
        <p>First Name: {props.user.first_name}</p>
        <p>Last Name: {props.user.last_name}</p>
        <p>E-mail: {props.user.email}</p>
        <button onClick={handleEdit}><NavLink to='/update-setting'> Edit </NavLink></button>
        <button onClick={handleDelete}><NavLink to='/login' > Delete </NavLink></button>
        </div>
    )
}