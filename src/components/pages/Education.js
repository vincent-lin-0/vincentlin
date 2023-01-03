import React from 'react';
import "../../App.css";

function Education() {
    return (
        <div className='education-page' id='education'>
            <h1 className='title'>EDUCATION</h1>
                <div className='education-bio'>
                    <img src={require('./berkeley.png')} alt='Berkeley' className='berkeley-pic' draggable="false"></img>
                    <p className='education-text'>University of California, Berkeley
                        <br/> 
                        <br/>
                        B.A. Computer Science
                        <br/> 
                        <br/>
                        Expected Graduation Date: May 2024
                        <br/> 
                        <br/>
                    </p>
                </div>
                <div className='education-container'>
                    <p>Relevant Coursework:</p>
                    <ul>
                        <li>
                            Structure and Interpretation of Computer Programs (CS 61A)
                        </li>
                        <li>
                            Data Structures (CS 61B)
                        </li>
                        <li>
                            Computer Architecture (CS 61C)
                        </li>
                        <li>
                            Discrete Mathematics and Probability Theory (CS 70)
                        </li>
                        <li>
                            Efficient Algorithms and Intractable Problems (CS 170)
                        </li>
                        <li>
                            Designing Information Devices and Systems I (EECS 16A)
                        </li>
                        <li>
                            Foundations of Data Science (Data 8)
                        </li>
                        <li>
                            Principles and Techniques of Data Science (Data 100)
                        </li>
                        <li>
                            Introduction to Full Stack Development (CS 198)
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Education;