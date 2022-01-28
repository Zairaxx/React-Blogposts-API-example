import React, {useEffect, useState} from 'react'

const FakeUserInformation = () => {
    const [user,setUser] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json())
        .then((json) => setUser(json));
    }, [])

    return (
        <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
    {/* Om vi inte har datat första gången komponenten renderas, behöver vi kolla om datat finns. */}
            <p>City: {user.address && user.address.city}</p>
        </div>
    )
}

export default FakeUserInformation
