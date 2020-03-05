// Component - Render all traveler's posts

import React from 'react';
import './DashboardTravelerPosts.scss'

export const DashboardTravelerPosts = props => {
    console.log("DashboardTravelerPosts props", props)
    return(
        <div className="dash-cards-div">
            <p>{props.title}</p>
            <img src={props.imgURL} className='postImg' />
            <p>{props.body}</p>
        </div>
    )
}