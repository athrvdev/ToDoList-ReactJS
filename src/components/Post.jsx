import styles from '../styles/Post.module.css'

import React from 'react'

const Post = ({author, text}) => {
  return (
    <>
        <div className={styles.post}>
            <h1 className={styles.author}>{author}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    </>
  )
}

export default Post