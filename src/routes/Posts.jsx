import React from 'react'
import PostList from '../components/PostList';
import { Outlet } from 'react-router-dom';

import { useState } from 'react';

const Posts = () => {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
        <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}
export default Posts

export async function loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}