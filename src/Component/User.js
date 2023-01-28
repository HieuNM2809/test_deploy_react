import React from "react";

const User = (props) => {
    const { dataUser } = props;
    return (
        <div className="random-user">
            <div className="user-image">
                <img src={dataUser.picture.medium} alt={dataUser.name.first} />
            </div>
            <div className="user-details">
                <div>
                    <strong>Name:</strong> {dataUser.name.first} {dataUser.name.last}
                </div>
                <div>
                    <strong>Country:</strong> {dataUser.location.country}
                </div>
                <div>
                    <strong>Email:</strong> {dataUser.email}
                </div>
            </div>
        </div>
    );
};

export default User;