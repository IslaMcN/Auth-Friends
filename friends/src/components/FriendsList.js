import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            this.setState({
                friendsList: res.data.map(list => {
                    return list.name === "Dustin"
                })
            });
        })
        .catch(err => console.log(err));
    };
    formatData = () => {
        const formattedData = [];
        console.log(this.state.friendsList);
        friendsList.map((list) => {
            if (list.friend === 'Friend') {
                formattedData.push({
                    id: Date.now(),
                    
                });
            }
        });
        return formattedData;
    };
    render() {
        const friendsList = this.formatData();
        
        return(
                friendsList.map(list => {
                    return(
                <>
                <h1>Friends</h1>
                <h2>{list.name}</h2>
                <h3>{list.age}</h3>
                <h4>{list.email}</h4>
                </>
                  )}) 
        )
    }
}

export default FriendsList;