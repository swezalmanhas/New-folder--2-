import React from 'react';
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__social">
        <div className="home__social">
                <a href="https://www.linkedin.com/in/swezal-manhas-714095281" className="footer__social-link">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.instagram.com/swezal_manhas" className="footer__social-link">
                    <FaInstagram/>
                    
                </a>
                <a href="https://github.com/swezalmanhas" className="footer__social-link">
                    <FaGithub/>
                    
                </a>
                
            </div>
            </div>
          

            <p className="footer__copyright text-cs">Develpoed by <span>SWEZAL </span></p>
        </div>
    </footer>
  )
}

export default Footer
