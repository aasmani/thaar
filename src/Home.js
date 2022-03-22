import React from 'react'
import Index from './application/Index'
import "./Home.css"
import logo from "./Image/logos.png"


const Home = () => {
  return (
    <>
    <div id='header'>
    <nav className='navbar'>
        <img src={logo}></img>
        <h1>LogicBricks</h1>
       
    </nav>
   

    </div>
    <Index/>
    </>
  )
}

export default Home