import React from 'react'
import Post from './Post'
const ListOfPosts = ({posts}) => {

    return (
        <div>
            List of posts:
            <ul>
                {posts.map((post,i) => {
                    return <Post key={i} {...post}/>
                })}
                {/* {posts.map(({title, body},i) => {
                    return <Post key={i} title={title} body={body}/>
                })} */}
            </ul>
        </div>
    )
}

export default ListOfPosts