import { useEffect, useState } from 'react';
import {
  fetchAllPosts,
  fetchPostById,
  updatePostById,
} from './services/posts.service';
import { Post } from './types';
import './App.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>();
  const [postId, setPostId] = useState('');

  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    fetchAllPosts().then((response) => setPosts(response.data));
  }

  function handleSearchSubmit() {
    fetchPostById(postId).then((response) => setPost(response.data));
  }

  function handleUpdateSubmit() {
    updatePostById(postId).then((response) => setPost(response.data));
  }

  // {
  //   id: 1;
  //   userId: 1;
  //   title: 'jowbd9voj';
  //   body: 'pkdnvojwdbv';
  // }

  // Object.values
  // [1, 1, 'jowbd9voj', 'pkdnvojwdbv'];
  // Object.keys
  // ['id', 'userId', 'title', 'body'];

  return (
    <div className="App">
      <h1>React Apis</h1>

      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleSearchSubmit}>Find</button>
      <button onClick={handleUpdateSubmit}>Update</button>
      <button onClick={getAllPosts}>Refresh</button>

      {post && Object.keys(post).length > 0 && (
        <ol>
          <li>Id: {post?.id}</li>
          <li>UserId: {post?.userId}</li>
          <li>Title: {post?.title}</li>
          <li>Body: {post?.body}</li>
        </ol>
      )}
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
