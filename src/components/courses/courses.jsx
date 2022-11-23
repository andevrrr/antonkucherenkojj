import './courses.css'
import TagCloud from 'react3dtagcloud'
import React, { useEffect } from 'react';

function Courses() {  

    const tagName = [
        'JavaScript', 'CSS', 'HTML',
        'API', 'C++', 'React',
        'Python', 'Java', 'GitHub',
        'GitLab', 'Node.js', 'AWS',
        'Postgres', 'MySQL', 'Docker',
    ];


 return (
        <div className='container courses_container'>
            <div className='courses'>
                <div className='courses_text'>
                    <h3>Related completed courses:</h3>
                    <ul>
                        <li>Programing languages (C++, JAVA)</li>
                        <li>Web Development</li>
                        <li>DevOps</li>
                        <li>Data Systems and Analysis</li>
                        <li>AI and machine learning</li>
                    </ul>
                </div>
                <div className='sphere'>
                    <div>
                    <TagCloud tagName={tagName}></TagCloud>
                    </div>
                </div>
            </div>
        </div>
        
  )

  
}



export default Courses