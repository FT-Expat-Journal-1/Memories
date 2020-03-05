import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTravelerData } from '../actions';
import styled from 'styled-components'

const Button1 = styled.button`
background: #38A1DE;
border-radius: 5px;
width: 400px;
height: 35px;
`
const Button2 = styled.button`
background: #37B1DE;
border-radius: 5px;
width: 400px;
height: 35px;
`
const FormBack = styled.div`
background-color: #F4F5F7;
width: 690px;
height: 50vh;
margin: 0 auto;`

const Per = styled.p`
font-family: SF Pro Text;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`

const Headinfo = styled.h1`
font-family: SF Pro Text;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
`

export const ProfileSettingCard = props => {
    console.log('ProfileSettingCard props', props)
    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();

    const handleEdit = event => {
        event.preventDefault();
    }

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteTravelerData(travelerID));
    }

    return (
        <FormBack>
            <Headinfo>Personal Information</Headinfo>
            <Per>User Name: {props.user.username}</Per>
            <Per>First Name: {props.user.first_name}</Per>
            <Per>Last Name: {props.user.last_name}</Per>
            <Per>E-mail: {props.user.email}</Per>
            <Button1 onClick={handleEdit}><NavLink to='/update-setting'> Edit </NavLink></Button1>
            <br/>
            <Button2 onClick={handleDelete}><NavLink to='/login' > Delete </NavLink></Button2>
        </FormBack>
    )
}