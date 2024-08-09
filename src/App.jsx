import React from 'react'
import Post from './components/Post';

const App = () => {

  const name = ["Atharva", "Ishaan"];
  const chosenName = name[Math.floor(Math.random() * 2)];

  return (
    <>
      {chosenName}
      <Post />
    </>
  )
}

export default App