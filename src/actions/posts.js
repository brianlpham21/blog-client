import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_POSTS_DATA_SUCCESS = 'FETCH_POSTS_DATA_SUCCESS';
export const fetchPostsDataSuccess = posts => ({
    type: FETCH_POSTS_DATA_SUCCESS,
    posts
});

export const FETCH_POSTS_DATA_ERROR = 'FETCH_POSTS_DATA_ERROR';
export const fetchPostsDataError = error => ({
    type: FETCH_POSTS_DATA_ERROR,
    error
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
