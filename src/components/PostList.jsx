import React from 'react'
import Post from './Post'
import styles from '../styles/PostList.module.css'
import { useLoaderData } from 'react-router-dom'

const PostList = ({}) => {

const posts = useLoaderData();

  return (
    <>
    <ul className={styles.posts}>
      {
        posts.length > 0 &&
        posts.map((post, index)=> (
          <Post key={index} author={post.author} text={post.body} />
        ))}
   </ul>
   
   {
    !posts.length && 
    (<div style={{textAlign: 'center'}}>
    <h2>No posts yet!!</h2>
    <p>Try adding some.</p>  
  </div>)}

    </>
  )
}

export default PostList