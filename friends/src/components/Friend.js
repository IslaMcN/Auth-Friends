import React, {useState} from 'react';
import {connect} from 'react-redux';
import {deleteFriends, updateFriends} from '../utils/actions';

const Friend = ({friend, deleteFriends, updateFriends}) => {
    const [updateName, setUpdatedName] = useState('');
    const [updateAge, setUpdatedAge] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
    const handleUpdate = e => {
        e.preventDefault();
        const updateFriend = {
            name: updateName,
            age: updateAge,
            email: updateEmail
        };
        updateFriend(updatedFriend.id);

    };
    const handleDelete = e => {
        e.preventDefault();
        deleteFriends(friend.id);
    };
    return(
        <>
        <h4>{friend.name}</h4>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={handleUpdate}>Update Friend</button>
        <button onClick={handleDelete}>Delete Friend</button>
        </>
    );
}
export default connect(
    null,
    {deleteFriends, updateFriends}
)(Friend);