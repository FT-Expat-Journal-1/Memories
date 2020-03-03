// Component - Fetch all travelers data and pass down to <ProfilePosts> component

import React from 'react';
import { connect } from 'react=redux';
import { ProfilePosts } from './ProfilePosts';
import { fetchProfileData } from '../actions';


export const Profile = props => {
    console.log("Profile Page props", props);

        return (
            <div>
                {props.profilePosts && !props.isLoading && (
                    <div>
                        <ProfilePosts rates = {props.profilePosts.rates}/*Pass props from API*//>
                    </div>
                )}
            </div>
        )
    }


    const mapStateToProps = state => {
        return {
        profilePosts: state.profilePosts,
        isLoading: state.isLoading,
        error: state.error,
        amount: state.amount,
        }
    }

export default connect(mapStateToProps, {fetchProfileData})(ExchangeRateTable);