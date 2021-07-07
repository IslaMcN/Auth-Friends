import {FRIEND_FAILURE, FRIEND_START, FRIEND_SUCCESS, POST_START, POST_FAILURE, POST_SUCCESS, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE} from './actions';


const initialState = {
    friends: [],
    isFetching: false,
    error: ''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FRIEND_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            
            };
        case FRIEND_SUCCESS:
            return{
                ...state,
                isFetching: false,
                friends: action.payload
            };
        case FRIEND_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: 'Nope.'
            };
        case POST_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: 'No.'
            };
        case POST_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
        case POST_SUCCESS:
            return{
                ...state,
                isFetching: false,
                friends: action.payload
            };
        case DELETE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: 'Nu-uh.'
            };
        case DELETE_START:
            return{
                ...state,
                isFetching:true,
                error: ''
            };
        case DELETE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                friends: action.payload
            };
        default:
            return state;
    }
};