import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTravelerPostData, deletePostData } from '../actions';
import './ProfilePosts.scss';

export const ProfilePosts = props => {
    console.log("ProfilePosts props", props)
    const dispatch = useDispatch();

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deletePostData(props.id));
        dispatch(getTravelerPostData());
    }
    return(
        <div className="post-cards-div">
            <p>{props.title}</p>
            <img src={props.imgURL} alt='Not found' className='postImg'/>
            <p>{props.body}</p>
            <div className='post-edit-delete-div'>
                <button className='post-btns'><NavLink to={`/update-post/${props.id}`} className='post-btns-nav'> Edit </NavLink></button>
                <button className='post-btns' onClick={handleDelete}><NavLink to='/dashboard' className='post-btns-nav'> Delete </NavLink></button>
            </div>
        </div>
    )
}