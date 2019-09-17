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
        .get('/data')
        .then(res => {
            this.setState({
                friendsList: res.data.data.filter(
                    list => 
                    list.type === 'Friends' && 
                    (list.friend === 'Friend' || list.friend === "Not Friend")
                )
            });
        })
        .catch(err => console.log(err));
    };
    formatData = () => {
        const formattedData = [];
        console.log(this.state.friendsList);
        this.state.friendsList.forEach((list) => {
            if (list.friend === 'Friend') {
                formattedData.push({
                    date:moment(list.date).format('MMM'),
                });
            }
        });
        return formattedData;
    };
    render() {
        const friendsList = this.formatData();
        console.log(friendsList);
        return(
            <div>Info</div>
        )
    }
}

export default FriendsList;