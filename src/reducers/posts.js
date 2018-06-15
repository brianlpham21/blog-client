import {
    FETCH_POSTS_DATA_SUCCESS,
    FETCH_POSTS_DATA_ERROR,
    FETCH_INDIVIDUAL_POST_DATA_SUCCESS,
    FETCH_INDIVIDUAL_POST_DATA_ERROR,
    FETCH_TRAVEL_POSTS_SUCCESS,
    FETCH_EXPERIENCES_POSTS_SUCCESS,
    FETCH_TECH_POSTS_SUCCESS
} from '../actions/posts';

const initialState = {
    post: '',
    posts: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_POSTS_DATA_SUCCESS) {
        return Object.assign({}, state, {
            posts: action.posts,
            error: null
        });
    } else if (action.type === FETCH_INDIVIDUAL_POST_DATA_SUCCESS) {
        return Object.assign({}, state, {
            post: action.post,
            error: action.error
        });
    } else if (action.type === FETCH_POSTS_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_INDIVIDUAL_POST_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_TRAVEL_POSTS_SUCCESS) {
        return Object.assign({}, state, {
            posts: action.posts,
            error: action.error
        });
    } else if (action.type === FETCH_EXPERIENCES_POSTS_SUCCESS) {
        return Object.assign({}, state, {
            posts: action.posts,
            error: action.error
        });
    } else if (action.type === FETCH_TECH_POSTS_SUCCESS) {
        return Object.assign({}, state, {
            posts: action.posts,
            error: action.error
        });
    }
    return state;
}
