import React from 'react'
import styles from '../styles/NewPost.module.css'
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const NewPost = ({ onCancel, onAddPost}) => {
  const [enteredBody, setEnteredBody] = useState("");
  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  const [enteredAuthor, setEnteredAuthor] = useState("");
  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }  

  function submitHandler(event){
    event.preventDefault();
    const postData={
      body : enteredBody,
      author : enteredAuthor
    }
    onAddPost(postData);
    onCancel();
    }

  return (
    <>
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
        </p> 
        <p> 
          <label htmlFor='name' >Author</label>
          <input type='text' id='name' required onChange={authorChangeHandler} />
        </p>
        <p className={styles.actions} >
          <Link to='..' type='button' onClick={onCancel}>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </Modal>
    </>
  )
}

export default NewPost