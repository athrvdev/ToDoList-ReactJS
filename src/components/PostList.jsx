import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

const PostList = ({onHideForm, modalVisiblity}) => {

  const [posts, setPosts] = useState([]);

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
    {modalVisiblity &&
      <Modal onClose={onHideForm} >
        <NewPost onCancel={onHideForm} onAddPost={addPostHandler} />
      </Modal> }

    <ul className={styles.posts}>
            {
              posts.length > 0 &&
              posts.map((post, index)=> (
                <Post key={index} author={post.author} text={post.body} />
              ))  
              
            }
   </ul>
   {
    !posts.length && 
    <div style={{textAlign: 'center'}}>
    <h2>No posts yet!!</h2>
    <p>Try adding some.</p>  
  </div>
   }
    </>
  )
}

export default PostList