import React from 'react';
import profileImg from '../../assets/IMG_0808.jpeg.jpg';

import shapeOne from '../../assets/shape-1.png';
import shapeTwo from "../../assets/shape-2.png";
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import './home.css';
import CV from "../../assets/cv.pdf";



const Home = () => {
  return (
  
    <section className='home' id='home'>
        
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello,<span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs">
                <span>SWEZAL</span> MANHAS
            </h1>
            <p className="home__job">
                <span className='text-cs'> I Am</span>
                <b>Web Developer</b>
            </p>
           
            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt=""  className='home__profile'/>
                </div>
                <p className="home__data home__data-one">
                    <span className='text-lg'>3</span>
                    <span className='text-sm text-cs'> year <span>STUDENT TIET</span></span>
                </p>
                <p className="home__data home__data-two">
                    <span className='text-lg'> 5</span>
                    <span className='text-sm text-cs'> completed <span> Projects</span></span>
                </p>
                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" /> 
                <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className="home__text">
            As a computer science student in Thapar Institute of Engineering and Technology with a passion for innovation and problem solving, I have developed a good foundation in programming
 languages and Web development methodologies. I am a self driven, self-assured individual who enjoys a difficult setting since
  it brings out the best in me. I love technology and learning new things. To work in an environment which encourages me to succeed and grow professionally where i can utilize my skill and
 knowledge appropriately. 

            </p>
            <div className="home__social">
                <a href="https://www.linkedin.com/in/swezal-manhas-714095281" className="home__social-link">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.instagram.com/swezal_manhas" className="home__social-link">
                    <FaInstagram/>
                    
                </a>
                <a href="https://github.com/swezalmanhas" className="home__social-link">
                    <FaGithub/>
                    
                </a>
                
            </div>
            <div className="home__btns">
                <a  download='' href={CV} className="btn text-cs">
                    Download CV
                </a>
                <a href='#skills' className="hero__link text-cs">
                    My Skills
                </a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt=""  className='shape'/>
        </div>
        </div>
        
    </section>
  )
}

export default Home
