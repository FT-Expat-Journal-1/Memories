// Component - Traveler's dashboard, fetch posts from all traveler's in the API database and pass down to <TravelerPosts>

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../actions';
import { DashboardTravelerPosts } from './DashboardTravelerPosts'


export const Dashboard = () => {
    const dispatch = useDispatch();
    
    

    useEffect(() => {
        dispatch(getPostData());
    },[getPostData])

    const posts = useSelector(state => state.posts);
    console.log("dashboard posts", posts);
    return (
        <div>
            <div>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            <div>This is Dashboard</div>
            {posts.map(posts=> {
                return <DashboardTravelerPosts key={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url}/>
            })}

        </div>
    )
}
