// Component - Traveler's dashboard, fetch posts from all traveler's in the API database and pass down to <DashboardTravelerPosts>

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../actions';
import { DashboardTravelerPosts } from './DashboardTravelerPosts';
import './Dashboard.scss';

export const Dashboard = () => {
    const dispatch = useDispatch();
    
    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
      }
    
    useEffect(() => {
        dispatch(getPostData());
    },[getPostData])

    const posts = useSelector(state => state.posts);

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
            <div>Welcome</div>
            {posts.map(posts=> {
                return <DashboardTravelerPosts key={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url}/>
            })}
        </div>
    )
}
