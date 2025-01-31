import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}> 
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
