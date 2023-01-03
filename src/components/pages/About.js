import React from 'react'
import'../../App.css';

function About() {
    return (
        <div className='about-page' id='about'>
            <h1 className='title'>ABOUT ME</h1>
            <p className='about-me-text'>My name is Vincent Lin. I'm an undergraduate computer science major at UC Berkeley. I am interested in pursuing software engineering and I am actively looking for ways to develop my technical skills.</p>
            <div className='bio'>
                <img src={require('./vincentlin.jpg')} alt='Vincent' className='vincent-pic' draggable="false"></img>
                <p class="bio-text">Why hello there~
                    <br/>
                    <br/>
                    A little more about me, I was born in Taipei, Taiwan and moved to the Bay Area when I was 12 years old. Ever since I was a kid, my dream was to attend UC Berkeley. And now, I'm living the dream! GO BEARS~
                    <br/>
                    <br/>
                    Besides coding, I enjoy playing music, badminton, poker, and mahjong. I love to go on adventures and try new things, especially new food places around Berkeley.
                    <br/>
                    <br/>
                    Feel free to reach out to me. I'm always excited to meet new people!
                </p>
            </div>             
        </div>
    );
};

export default About;