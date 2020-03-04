// Component - Fetch all travelers data and pass down to <ProfilePosts> component
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../actions';
import { ProfilePosts } from '././ProfilePosts'


export const ProfilePage = props => {
    const dispatch = useDispatch();
    
    

    useEffect(() => {
        dispatch(getPostData());
    },[getPostData])

    const posts = useSelector(state => state.posts);
 
    return (
        <div>
            
            <div>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            
            <div>This is Dashboard</div>
            <button><NavLink to='/add-post'>Add Post</NavLink></button>
            {posts.map(posts=> {
                return <ProfilePosts key={posts.id} id={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url}/>
            })}

        </div>
    )
}