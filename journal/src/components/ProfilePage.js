// Component - Fetch all travelers data and pass down to <ProfilePosts> component

import React, {useEffect} from 'react';
import { axiosWithAuth } from '../utils'
import { connect } from 'react-redux';


const ProfilePage = props => {
    console.log("Profile Page props", props);

    const id = props.travelerID;

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://expatjournal-api.herokuapp.com/api/users/${id}`)
        .then(response => {
            console.log('Profile Page GET', response);

        })
    },[])

        return (
            <div>
                hello travelerID: {props.travelerID}

            </div>
        )
    }

    const mapStateToProps = state => {
        return {
            travelerID: state.travelerID,
        }
    }
    
export default connect(mapStateToProps)(ProfilePage);