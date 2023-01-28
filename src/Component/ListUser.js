import React from 'react';
import User from './User';

const UsersList = (props) => {
    const { users } = props;
    return (
        <div className="user-list">
        {
            users && 
            users.map((user) => <User key={user.login.uuid || Math.random() } dataUser={user} />)
        }
        </div>
    );
};

export default UsersList;