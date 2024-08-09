import React from 'react'
import {MdPostAdd, MdMessage} from 'react-icons/md'
import styles from '../styles/MainHeader.module.css'

const MainHeader = ({onCreatePost}) => {
  return (
    <header className={styles.header}>
        <h1 className={styles.logo}>
            <MdMessage />
            React Poster
        </h1>
        <p>
            <button className={styles.button} onClick={onCreatePost} >
                <MdPostAdd size={18} />
            </button>
        </p>
    </header>
  )
}

export default MainHeader