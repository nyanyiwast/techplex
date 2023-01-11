import React from 'react'
import './style.css'
// import logo from "./logo.png"

const TransparentNavbar = () => {
  return(
    <>
<div style={
    {
        position: 'sticky'
    }
}>
  <header>
    <div className="container">
      {/* <i id="logo" className="fa fa-apple" aria-hidden="true" /> */}
      {/* <a href><img id="logo" src={logo} alt='logo'/></a> */}
      <nav>
        <a href="#header03-0">Home</a>
        <a href="#features011-6">About</a>
        <a href="#features09-5">Services</a>
        <a href="#clients01-d">Partners</a>
        <a href="#team02-8">Values</a>
        <a href="#footer01-e">Contact</a>
      </nav>
      {/* <div className="right">
        <span><img id="search" src="http://mateen.kurdzman.net/search.png" /></span>
        <span><img id="lock" src="http://mateen.kurdzman.net/padlock.png" /></span>
      </div> */}
    </div>
  </header>
  <div className="banner">
  </div>
</div>


    </>
  )
}

export default TransparentNavbar;
