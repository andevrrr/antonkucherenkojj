import React from 'react'
import './header.css'




function Header() {  
  
  return (
    <header>
      <div className="container header_container">
        <div className='header_header'>
          <div>
            <div>
            <div className="button1">
                <a className="kbc-button" href='https://www.linkedin.com/in/anton-kucherenko-347b6a222/'>LinkedIn</a>
            </div>
            <div className="button1">
                <a className="kbc-button" href='https://github.com/andevrrr'>GitHub</a>
            </div>
          </div>
          </div>
          <div className='my_name'>
            <h5>Hello I'm</h5>
            <h1>Anton Kucherenko</h1>
            <h5>Fullstack Developer</h5>
          </div>
          <div>
            <div className="button2">
                <a className="kbc-button" href="#popup2" >resume</a>
            </div>
            <div className="button2">
                <a className="kbc-button" href="#popup1">contact me</a>
            </div>
          </div>
        </div>
    </div>
    <div id="popup1" className="overlay">
      <div className="popup">
        <div className='close_button'>
          <a className="close" href="#">&times;</a>
        </div>
        <div className="popup_text">
          <p>
            $ Contact me 
            <br />&#62; anton.kucherenko@tuni.fi 
            <br />&#62; +358 41 169 4688
          </p>
        </div>
      </div>
    </div>
    <div id="popup2" className="overlay">
      <div className="popup popup2">
        <div className='close_button'>
          <a className="close" href="#">&times;</a>
        </div>
        <img src={require("../../assets/resume.jpg")} alt="" />
      </div>
    </div>


      
      
    </header>
  )

  
}



export default Header



          {/* <div className='icons'>
            <img className='image image-one' src={require("../../assets/icons8-linkedin-circled-90.png")} alt="" /> 
            <img className='image image-two' src={require("../../assets/icons8-linkedin-circled.gif")} alt="" /> 
            <img className='image' src={require("../../assets/github_icon.png")} alt="" /> 
          </div> */}