// Component - Fetch all travelers data and pass down to <ProfilePosts> component
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData, getTravelerPostData } from '../actions';
import { ProfilePosts } from '././ProfilePosts';
import './ProfilePage.scss';

export const ProfilePage = props => {
    const dispatch = useDispatch();
    const travelerID = window.localStorage.getItem('traveler_id');

    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
      }
    
    useEffect(() => {
        dispatch(getTravelerPostData(travelerID));
    },[getTravelerPostData])

    const posts = useSelector(state => state.travelerPosts);
    const firstName = useSelector(state => state.user.first_name);
    console.log("first name", firstName);

    return (
        <div>
            <header>
                <div class="navDiv">
                    <a href='https://ft-expat-journal-1.github.io/Expat-Journal-Marketing-Page/' className='captureLogo'>Capture</a>
                    <NavLink className='logOut' onClick={logOut} to='/login' >Log Out</NavLink>
                </div>
            </header> 
            <div>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            <div>What's on your mind {firstName}? </div>
            <button><NavLink to='/add-post'>Add Post</NavLink></button>
            {posts.map(posts=> {
                return <ProfilePosts key={posts.id} id={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url}/>
            })}

        </div>
    )
}