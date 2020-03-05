import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTravelerPostData, deletePostData } from '../actions';

export const ProfilePosts = props => {
    console.log("ProfilePosts props", props)
    const dispatch = useDispatch();

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deletePostData(props.id));
        dispatch(getTravelerPostData());
    }
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.body}</p>
            <img src={props.imgURL} alt='Not found' />
            <button><NavLink to={`/update-post/${props.id}`}> Edit </NavLink></button>
            <button onClick={handleDelete}><NavLink to='/dashboard' > Delete </NavLink></button>
        </div>
    )
}