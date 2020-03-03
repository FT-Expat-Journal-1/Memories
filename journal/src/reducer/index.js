// Component - Reducers

import {
    FETCH_PROFILE_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';


const initialState = {
    isLoading: false,
    token: '',
    error: '',
    profilePosts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PROFILE_DATA: 
        return {
            ...state,
            isLoading: true,
            error: ''
        }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                profilePosts: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}