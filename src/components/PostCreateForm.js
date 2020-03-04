import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostData, addPostData } from '../actions';

export const PostCreateForm = props => {

    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();

    const [addPost, setAddPost] = useState({
        user_id: parseInt(travelerID),
        title: '',
        body: '',
        img_url: '',
    })

    const handleChanges = event => {
        setAddPost({
            ...addPost,
            [event.target.name]: event.target.value
        })
    }

    console.log(addPost);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addPostData(addPost));
        props.history.push('/profile');
    }

    return(
        <div>
            Add Post
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' name='title' value={addPost.title} onChange={handleChanges}/>
                <input type='text' placeholder='Your story' name='body' value={addPost.body} onChange={handleChanges}/>
                <input type='text' placeholder='Add image link' name='img_url' value={addPost.img_url} onChange={handleChanges}/>
                <button>Add Story</button>
            </form>
        </div>
    )
}

// {
//     "user_id": 1,
//     "title": "My Second Post",
//     "body": "This is one of my very first trips shared on Capture!",
//     "img_url": "https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// }