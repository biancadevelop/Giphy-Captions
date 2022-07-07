import React from 'react'
import Generator from './components/Generator/Generator';
import Header from './components/Header/Header'
import './App.css';


const App = () => {
  return (
    <div className='main-container'>
      <Header></Header>
      <Generator></Generator>
    </div>
  )
}

export default App
