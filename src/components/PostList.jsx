import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

const PostList = ({onHideForm, modalVisiblity}) => {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
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
              posts.map((post, index)=> (
                <Post author={post.author} text={post.body} />
              ))
            }
   </ul>
    </>
  )
}

export default PostList