import React, {useState} from 'react'
import Header from './components/Header/Header'
import Generator from './components/Generator/Generator'
import SocialShare from './components/Social Share/SocialShare';

import './App.css';


const App = () => {
  const [giphy, setGiphy] = useState("")
  const [title, setTitle] = useState("")

  return (
    <div className='main-container'>
      <Header></Header>
      <Generator 
      giphy={giphy}
      setGiphy={setGiphy}
      title={title}
      setTitle={setTitle}
       ></Generator>
     <SocialShare
      giphy={giphy}
     title={title}
     ></SocialShare>
    </div>
  )
}

export default App
