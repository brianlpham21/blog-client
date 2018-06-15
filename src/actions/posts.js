import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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
