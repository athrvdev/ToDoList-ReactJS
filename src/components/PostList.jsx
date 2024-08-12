import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import { useState, useEffect } from 'react'

const PostList = ({}) => {

  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(()=>{
    async function fetchPosts(){
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData){
    fetch('http://localhost:8080/posts' , {
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
   
    <ul className={styles.posts}>
      {
        posts.length > 0 &&
        posts.map((post, index)=> (
          <Post key={index} author={post.author} text={post.body} />
        ))  
        
      }
   </ul>
   {!isFetching &&
    !posts.length && 
    (<div style={{textAlign: 'center'}}>
    <h2>No posts yet!!</h2>
    <p>Try adding some.</p>  
  </div>)}

   {isFetching && 
   (<div style={{textAlign:'center', color: 'white'}}>
      <p>Loading posts...</p>
   </div>)}
    </>
  )
}

export default PostList