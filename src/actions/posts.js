import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const addPostSuccess = addPostData => ({
    type: ADD_POST_SUCCESS,
    addPostData
});

export const ADD_POST_ERROR = 'ADD_POST_ERROR';
export const addPostError = error => ({
    type: ADD_POST_ERROR,
    error
});

export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const editPostSuccess = editPostData => ({
    type: EDIT_POST_SUCCESS,
    editPostData
});

export const EDIT_POST_ERROR = 'EDIT_POST_ERROR';
export const editPostError = error => ({
    type: EDIT_POST_ERROR,
    error
});

export const FETCH_POSTS_DATA_SUCCESS = 'FETCH_POSTS_DATA_SUCCESS';
export const fetchPostsDataSuccess = posts => ({
    type: FETCH_POSTS_DATA_SUCCESS,
    posts
});

export const FETCH_INDIVIDUAL_POST_DATA_SUCCESS = 'FETCH_INDIVIDUAL_POST_DATA_SUCCESS';
export const fetchIndividualPostDataSuccess = post => ({
    type: FETCH_INDIVIDUAL_POST_DATA_SUCCESS,
    post
});

export const FETCH_POSTS_DATA_ERROR = 'FETCH_POSTS_DATA_ERROR';
export const fetchPostsDataError = error => ({
    type: FETCH_POSTS_DATA_ERROR,
    error
});

export const FETCH_INDIVIDUAL_POST_DATA_ERROR = 'FETCH_INDIVIDUAL_POST_DATA_ERROR';
export const fetchIndividualPostDataError = error => ({
    type: FETCH_INDIVIDUAL_POST_DATA_ERROR,
    error
});

export const FETCH_TRAVEL_POSTS_SUCCESS = 'FETCH_TRAVEL_POSTS_SUCCESS';
export const fetchTravelPostsDataSuccess = posts => ({
    type: FETCH_TRAVEL_POSTS_SUCCESS,
    posts
});

export const FETCH_EXPERIENCES_POSTS_SUCCESS = 'FETCH_EXPERIENCES_POSTS_SUCCESS';
export const fetchExperiencesPostsDataSuccess = posts => ({
    type: FETCH_EXPERIENCES_POSTS_SUCCESS,
    posts
});

export const FETCH_TECH_POSTS_SUCCESS = 'FETCH_TECH_POSTS_SUCCESS';
export const fetchTechPostsDataSuccess = posts => ({
    type: FETCH_TECH_POSTS_SUCCESS,
    posts
});

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const deletePostSuccess = error => ({
    type: DELETE_POST_SUCCESS,
    error
});

export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';
export const deletePostError = error => ({
    type: DELETE_POST_ERROR,
    error
});

export const addPost = (title, subtext, category, photoLink, photoCaption, text) => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': `application/json`
        },
        body: JSON.stringify({title: title, titleSubtext: subtext, category: category, photoLink: photoLink, photoCaption: photoCaption, text: text})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addPostSuccess(data)))
        .catch(err => {
            dispatch(addPostError(err));
        });
};

export const editPost = (id, title, subtext, category, photoLink, photoCaption, text) => (dispatch, getState) => {
    const url = `${API_BASE_URL}/posts/` + id;

    return fetch(`${url}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': `application/json`
        },
        body: JSON.stringify({title: title, titleSubtext: subtext, category: category, photoLink: photoLink, photoCaption: photoCaption, text: text})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(editPostSuccess(data)))
        .catch(err => {
            dispatch(editPostError(err));
        });
};

export const fetchPostsData = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/posts`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((posts) => dispatch(fetchPostsDataSuccess(posts)))
        .catch(err => {
            dispatch(fetchPostsDataError(err));
        });
};

export const fetchIndividualPostData = (post_id) => (dispatch, getState) => {
    const url = `${API_BASE_URL}/posts/` + post_id;

    return fetch(`${url}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((post) => dispatch(fetchIndividualPostDataSuccess(post)))
        .catch(err => {
            dispatch(fetchIndividualPostDataError(err));
        });
};

export const fetchTravelPostsData = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/posts/category/travel`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((posts) => dispatch(fetchTravelPostsDataSuccess(posts)))
        .catch(err => {
            dispatch(fetchPostsDataError(err));
        });
};

export const fetchExperiencesPostsData = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/posts/category/experiences`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((posts) => dispatch(fetchExperiencesPostsDataSuccess(posts)))
        .catch(err => {
            dispatch(fetchPostsDataError(err));
        });
};

export const fetchTechPostsData = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/posts/category/tech`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((posts) => dispatch(fetchTechPostsDataSuccess(posts)))
        .catch(err => {
            dispatch(fetchPostsDataError(err));
        });
};

export const deleteIndividualPost = (post_id) => (dispatch, getState) => {
    const url = `${API_BASE_URL}/posts/` + post_id;

    return fetch(`${url}`, {
        method: 'DELETE'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(deletePostSuccess(data)))
        .catch(err => {
            dispatch(deletePostError(err));
        });
}
