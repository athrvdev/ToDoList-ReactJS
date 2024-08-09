import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import NewPost from './NewPost'

const PostList = () => {
  return (
    <>
    <NewPost />
    <ul className={styles.posts}>
        <Post author={"AK"} text={"Lorem ipsum"} />
        <Post author={"MK"} text={"Lorem ipsum"} />
        <Post author={"RK"} text={"Lorem ipsum"} />
        <Post author={"IK"} text={"Lorem ipsum"} />
        <Post author={"UK"} text={"Lorem ipsum"} />
    </ul>
    </>
  )
}

export default PostList