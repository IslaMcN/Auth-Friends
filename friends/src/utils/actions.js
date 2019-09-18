import {axiosWithAuth} from './axiosWithAuth';

export const FRIEND_START = "FRIEND_START";
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FRIEND_FAILURE = 'FRIEND_FAILURE';
export const getFriend = () => {
    dispatch => {
        dispatch({type: FRIEND_START});
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            dispatch({type: FRIEND_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type:FRIENDS_FAILURE, payload:err});
        });
    };
};
    export const POST_START = "POST_START";
    export const POST_SUCCESS = 'POST_SUCCESS';
    export const POST_FAILURE = 'POST_FAILURE';
    export const postFriends = newFriends => dispatch => {
        dispatch({type: POST_START});
        axiosWithAuth()
        .post('/friends', newFriends)
        .then(res => {
            dispatch({type: POST_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: POST_FAILURE, payload: err});
        });
    };

    export const DELETE_START = 'DELETE_START';
    export const DELETE_SUCCESS = 'DELETE_SUCCESS';
    export const DELETE_FAILURE = 'DELETE_FAILURE';
    export const deleteFriends = friendsId => dispatch => {
        dispatch({type:DELETE_START, payload: res.data});
        axiosWithAuth()
        .put(`/friends/${friendsId}`)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type:DELETE_FAILURE, payload: err});
        });
    };

    export const UPDATE_START = 'UPDATE_START';
    export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
    export const UPDATE_FAILURE = 'UPDATE_FAILURE';
    export const updateFriend = friendsId => dispatch => {
        dispatch({type: UPDATE_START});
        axiosWithAuth()
        .put(`/friends/${friendId}`)
        .then(res => {
            dispatch({ type: UPDATE_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type:UPDATE_FAILURE, payload:err});
        });
    };
