import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div class='footer-subscription'>
            <p className='footer-subscription-heading'>Thanks for visiting!</p>
            <p className='footer-supscription-text'> Contact and connect with me through Email, Linkedin, or Instagram. Have a great day~</p>
        </div>
      <section class='social-media'>
        <div>
          <div class='social-icons'>
            <a class='social-icon-link email' href='mailto:vincentlin83@berkeley.edu' target='_new'><i class='fa fa-envelope' /></a>
            <a class='social-icon-link linkedin' href='https://www.linkedin.com/in/vincent-lin-15169a186/' target='_new'><i class='fab fa-linkedin' /></a>
            <a class='social-icon-link Instagram' href='https://www.instagram.com/vincent_lin83' target="_new"><i class='fab fa-instagram' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;