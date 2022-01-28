import React from 'react'

const UserInformation = (props) => {
    console.log(props);
    return (
        <div>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.address.city}</p>
        </div>
    )
}

export default UserInformation
