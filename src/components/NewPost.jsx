import React from 'react'
import styles from '../styles/NewPost.module.css'
import { useState } from 'react';

const NewPost = ({onBodyChange, onAuthorChange}) => {

  return (
    <>
      <form className={styles.form}>
          <label htmlFor='body' >Text</label>
          <textarea id='body' required rows={3} onChange={onBodyChange} />
          
          <label htmlFor='name' >Text</label>
          <input type='text' id='name' required onChange={onAuthorChange} />
        
      </form>
    </>
  )
}

export default NewPost