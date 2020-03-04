import React from 'react';


export const DashboardTravelerPosts = props => {
    console.log("DashboardTravelerPosts props", props)
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.body}</p>
            <img src={props.imgURL} />
        </div>
    )
}