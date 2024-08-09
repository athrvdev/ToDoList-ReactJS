import React from 'react'
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

const App = () => {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler(event){
    setModalIsVisible(false);
  }
  function showModalHandler(event){
    setModalIsVisible(true)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList modalVisiblity={modalIsVisible} onHideForm={hideModalHandler} />
      </main>
    </>
  )
}

export default App