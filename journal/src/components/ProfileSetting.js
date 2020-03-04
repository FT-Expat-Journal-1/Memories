import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom'
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
                <div>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/setting'>Setting</NavLink>
                </div>
                Hello {props.firstName}
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
            firstName: state.user.first_name,
            isLoading: state.isLoading
        }
    }
    
export default connect(mapStateToProps,{getTravelerData})(ProfileSetting);