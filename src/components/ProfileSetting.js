import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { getTravelerData } from '../actions';
import { ProfileSettingCard } from './ProfileSettingCard';

export const ProfileSetting = props => {
    console.log('ProfileSetting props',props.user)

    const travelerID = window.localStorage.getItem('traveler_id');

    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
    }

    useEffect(()=> {
        props.getTravelerData(travelerID);
    },[getTravelerData])
 
        return (
            <div>
                <header>
                 <NavLink onClick={logOut} to='/login' >Log out</NavLink>
                </header> 
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