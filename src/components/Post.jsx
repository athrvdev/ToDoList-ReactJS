import styles from '../styles/Post.module.css'

import React from 'react'

const Post = ({author, body}) => {
  return (
    <>
        <div className={styles.post}>
            <h1 className={styles.author}>{author}</h1>
            <p className={styles.text}>{body}</p>
        </div>
    </>
  )
}

export default Post