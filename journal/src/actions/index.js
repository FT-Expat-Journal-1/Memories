// Component - Actions

import axios from 'axios';

export const FETCH_PROFILE_DATA = "GET_DATA_START"; //using loading spinners?
export const FETCH_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "GET_DATA_FAILURE";

export const fetchProfileData = data => dispatch => {
        dispatch({type: FETCH_PROFILE_DATA})
        axios.get('https://')
        .then(res => {
            console.log(res) // res.data
            dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})

        })
        .catch(err => {
            console.log(err)
            alert('Currency not recognize, please check and try again.')
        })
    }