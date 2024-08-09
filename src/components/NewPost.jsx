import React from 'react'
import styles from '../styles/NewPost.module.css'
import { useState } from 'react';

const NewPost = () => {

  const [enteredBody, setEnteredBody] = useState("");
  function changeBodyHandler(event){
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <form className={styles.form}>
          <label htmlFor='body' >Text</label>
          <textarea id='body' required rows={3} onChange={changeBodyHandler} />
          <p>{enteredBody}</p>
          <label htmlFor='name' >Text</label>
          <input type='text' id='name' required />
        
      </form>
    </>
  )
}

export default NewPost