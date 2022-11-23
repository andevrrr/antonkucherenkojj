import React from 'react';
import './projects.css'

function Projects() {  

 return (
        <div className='color'>
            <div className='container'>
                <div className='projects'>
                    <div className='background'>
                        <div className='text'>
                            <h3>My projects</h3>
                            <p>The portfolio mostly consists of small projects, and they can be seen on my GitHub.</p>
                        </div>
                        <div className='forecast_project'>
                            <div>
                                <div className='Illustration'>
                                    <img className='data' src={require("../../assets/forecast_project/data.png")} alt="" />
                                    <img className='graph' src={require("../../assets/forecast_project/graph.png")} alt="" />
                                    <img className='main_page' src={require("../../assets/forecast_project/main_page.png")} alt="" />
                                    {/* <img className='weather' src={require("../../assets/forecast_project/weather.png")} alt="" /> */}
                                </div>
                                <small>01</small>
                                <h3>Weather <br /> forecast</h3>
                                <div className='description'>
                                    <p>The program reads data from the weather station of Tampere University of Applied Sciences, and the data can be illustrated in different formats, such as the forecast for a week/ month, a change of wind speed every second. </p>
                                    <h4>Technologies used: </h4>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <h4><a href="https://github.com/andevrrr/repo/tree/main/course_assignment">GitHub</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
  )

  
}



export default Projects