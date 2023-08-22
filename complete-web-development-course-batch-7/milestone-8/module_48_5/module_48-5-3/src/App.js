import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <LoadPosts></LoadPosts>
    </div>
  );
}
function LoadPosts () {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post (props) {
  return (
    <div style={{backgroundColor: 'lightgray', margin: '20px', border: '4px solid salmon'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;