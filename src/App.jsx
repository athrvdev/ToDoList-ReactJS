import React from 'react'
import Post from './components/Post';

const App = () => {

  const name = ["Atharva", "Ishaan"];
  const chosenName = name[Math.floor(Math.random() * 2)];

  return (
    <>
      <p><Post author={chosenName} body={"lorem ipsum"} /></p>
    </>
  )
}

export default App