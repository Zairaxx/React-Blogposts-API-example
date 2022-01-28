import React, {useState} from 'react'
import UserInformation from './UserInformation'
import FakeUserInformation from './FakeUserInformation'
export const Post = ({title,body,userId,id}) => {

    const [user, setUser] = useState(null);

    const getUser = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let json = await response.json();
        setUser(json)
    }

    return (
        <div style={{border: "3px double white"}}>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <br/>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <br/>
            {user && <UserInformation {...user}/>}
            {/* {<FakeUserInformation/>} */}
            <button onClick={getUser}>Get user</button>
        </div>
    )
}

export default Post