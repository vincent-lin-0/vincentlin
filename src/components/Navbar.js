import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleTopScroll = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
      });
  };

  const handleAboutScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEducationScroll = () => {
    const element = document.getElementById('education');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsScroll = () => {
    const element = document.getElementById('projects');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-logo" onClick={handleTopScroll}>
                Vincent
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleTopScroll}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleAboutScroll}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleEducationScroll}>
                        Education
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleProjectsScroll}>
                        Projects
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar