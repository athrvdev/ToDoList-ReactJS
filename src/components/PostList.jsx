import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

const PostList = ({onHideForm, modalVisiblity}) => {

  const [enteredBody, setEnteredBody] = useState("");
  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  const [enteredAuthor, setEnteredAuthor] = useState("");
  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }  

  return (
    <>
    {modalVisiblity &&
    <Modal onClose={onHideForm} >
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    </Modal> 
    
    }
    <ul className={styles.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="AK" text="JFS" />
        
    </ul>
    </>
  )
}

export default PostList