import React from 'react'
import Generator from './components/Generator/Generator'
import Header from './components/Header/Header'
import SocialShare from './components/Social Share/SocialShare';
import './App.css';


const App = () => {
  return (
    <div className='main-container'>
      <Header></Header>
      <Generator></Generator>
      <SocialShare></SocialShare>
    </div>
  )
}

export default App
