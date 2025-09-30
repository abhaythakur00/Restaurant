import React, { useState } from 'react'
// import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'


function Navbar() {
//   const [toggleBtn, setToggleBtn] = useState(false)

  return (
    <div>
      
        <nav class="nav">
<div id="logo">
        <h1>Restaurant</h1>
      </div>
  <div className="abb">
    <ul>
      <li>HOME</li>
        <li>MENU</li>
      <li>OUR PLACE</li>
      <li>RESERVATION</li>
      <li>CONTACT</li>


    </ul>
    </div>
    {/* <div className="icon">
      <Icon onClick={() => setToggleBtn(!toggleBtn)} icon="tdesign:format-vertical-align-right" />
    </div>
 {toggleBtn == true &&
    <div className="btn">
      <div id="ab">    
        <ul>

      <li>Demos</li>
      <li>Courses</li>
      <li>Pages</li>
      <li>Blog</li>
      <li>Contact</li>

    </ul>
    </div>

    </div>} */}

    <button>ORDER ONLINE</button>
  </nav>

  
    </div>
  )
}

export default Navbar