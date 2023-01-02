import React from 'react';
//import { Button } from './Button';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='text'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("Howdy!").pauseFor(500).deleteAll().typeString("Heyyyyy").deleteAll().typeString("Hi").pauseFor(500).typeString(", I'm Vincent!").start();
                }}
            />
        </div>
            <div className='text2'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.pauseFor(8000).typeString("I'm a college student and an aspiring ").pauseFor(500).typeString("software_engineer").start();
                }}
            />
            {/* <h1 className='fade-in-text'>Hi! <span id='fade-in-text2'>I'm Vincent </span></h1>
                <p className='fade-in-text3'>I'm a college student and an aspiring <span id='fade-in-text4'>software_engineer</span></p> */}
        </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT ME
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT ME
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;