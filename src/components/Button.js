import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

function Button() {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }
    
      return <button className='btn--outline' type="button" onClick={handleScroll}>Contact</button>;
}

export default Button;