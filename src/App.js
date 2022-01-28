
import './App.css';
import {useState, useEffect} from 'react'

import ListOfPosts from './components/ListOfPosts'
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
    console.log("Data has been fetched!")
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Posts</h1>
        <ListOfPosts posts={posts}/>
      </header>
    </div>
  );
}

export default App;
