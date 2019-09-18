import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getFriend} from '../utils/actions';
import Friend  from './Friend'

const FriendList = ({getFriend, friends}) => {
    useEffect(() => {
        getFriend();
    }, [getFriend]);
    return(
       <>
        <h3>Friends List</h3>
        <div>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend}/>;
            })}
        </div>
        </>
    );
}
const mapStateToProps = state => {
    return {
        friends: state.friends,
        isFetching:state.isFetching,
        error: state.error
    };
};
export default connect(
    mapStateToProps, 
    {getFriend}
)(FriendList);