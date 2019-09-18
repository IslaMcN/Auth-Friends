import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postFriends} from '../utils/actions';

const AddFriend = ({postFriends}) => {
    const [addName, setAddName] = useState('');
    const [addAge, setAddAge] = useState('');
    const [addEmail, setAddEmail] = useState('');
    const addFriend = e => {
        e.preventDefault();
        const addFriends = {
            name: addName,
            age: addAge,
            email: addEmail
        };
        postFriends(addFriend);
    };
    return(
        <form onSubmit={addFriend}>
            <input
            type="text"
            name="name"
            value={addName}
            placeholder="Name"
            onChange={e => {
                setAddName(e.target.value);
            }}
            />
            <input
            type="text"
            name="age"
            value={addAge}
            placeholder="Age"
            onChange={e => {
                setAddAge(e.target.value);
            }}
            />
            <input
            type="email"
            name="email"
            value={addEmail}
            placeholder="Email"
            onChange={e => {
                setAddEmail(e.target.value);
            }}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

const mapStateToProps = state => {
    return{
        friends: state.friends,
        isFetching: state.isFetching,
        error:state.error
    };
};

export default connect(
    mapStateToProps,{postFriends}
)(AddFriend);