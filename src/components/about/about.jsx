import React from 'react';
import './about.css'
import Draggable from 'react-draggable';




function About() {  

 return (
        <div className='about'>
          <div className='about_container'>
          <Draggable handle='#handle'>
            <div className="terminal">
              <div className='terminal_'>
                <div id='handle' className="terminal-header ">
                  <div className='terminal_top_bar'>
                    <button className='terminal_buttons dot_background'><img className='ter_buns dot' src={require("../../assets/icons8-multiply-50.png")} alt="" /></button>
                    <button className='terminal_buttons dash_background'><img className='ter_buns dash' src={require("../../assets/icons8-minus-67.png")} alt="" /></button>
                    <button className='terminal_buttons fullscreen_background'><img className='ter_buns fullscreen' src={require("../../assets/icons8-arrows-64.png")} alt="" /></button>
                    <img className='folder' src={require("../../assets/icons8-folder-80.png")} alt="" />
                    <p className='terminal_top_bar_text' >my_web_page -- node npm start </p>
                  </div>
                  <div>
                  </div>
                </div>
                <div className="terminal-text">
                  <p>
                    &#62; Hi there 
                    <br />&#62; Anton's here
                    <br />&#62; I am a second year student of Tampere University of Applied Sciences
                    <br />&#62; I major in software engineering. 
                    <br />&#62; I've been identifying myself as a full-stack developer for a year now, <br /> though i also studied web development in high school.
                    <br />&#62; Mostly i do frontend job and i am more experienced in it than in backend.
                    <br />&#62; By the way, you can move this terminal and the picture window <br />  by dragging the topbars.
                    <br />&#62; Creating web pages is always fun for me.<br />  With the related technologies you can create whatever you desire
                    <br />      and I find that a kind of brainstorming exercises.
                    <br />&#62; Keep scrolling the page to get to know more about me!
                    <br />&#62;
                    <br />&#62;
                  </p>
                  <p>
                    (base) antonkucerenko@MacBook-Pro ~ % 
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable handle='#handle'>
            <div className="my_photo">
                <div>
                  <div id='handle' className="terminal_top_bar my_photo_header">
                      <div>
                        <button className='terminal_buttons dot_background'><img className='ter_buns dot' src={require("../../assets/icons8-multiply-50.png")} alt="" /></button>
                        <button className='terminal_buttons dash_background'><img className='ter_buns dash' src={require("../../assets/icons8-minus-67.png")} alt="" /></button>
                        <button className='terminal_buttons fullscreen_background'><img className='ter_buns fullscreen' src={require("../../assets/icons8-arrows-64.png")} alt="" /></button>
                        <img className='folder' src={require("../../assets/icons8-folder-80.png")} alt="" />
                        <p className='terminal_top_bar_text' >photo.jpg </p>
                      </div>
                      <div className='my_photo_header_icons'>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/information.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/zoom-out.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/zoom-in.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/share.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/highlighter.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/rotate.png")} alt="" /></button>
                          <button className='icon-back'><img className='icon' src={require("../../assets/icons_photo/search.png")} alt="" /></button>
                        </div>
                  </div>
                  <div>
                    <img className='photo_of_me' src={require("../../assets/photo.jpg")} alt="" />
                  </div>
                </div>
            </div>
          </Draggable>
          </div>
        </div>
        
  )

  
}



export default About