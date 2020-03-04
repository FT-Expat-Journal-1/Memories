import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils'
import { connect } from 'react-redux';
import { getTravelerData } from '../actions';
import { ProfileSettingCard } from './ProfileSettingCard';

export const ProfileSetting = props => {
    console.log('ProfileSetting props',props.user)

    const travelerID = window.localStorage.getItem('traveler_id');

    useEffect(()=> {
        props.getTravelerData(travelerID);
    },[getTravelerData])
 
        return (
            <div>
                hello travelerID: {travelerID}
                {!props.isLoading && (
                    <ProfileSettingCard user={props.user}/>
                )}
            </div>
        )
    }

    const mapStateToProps = state => {
        return {
            travelerID: state.travelerID,
            user: state.user,
            isLoading: state.isLoading
        }
    }
    
export default connect(mapStateToProps,{getTravelerData})(ProfileSetting);