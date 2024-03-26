import React, { useEffect, useState } from 'react';
import {links} from '../../Data' ;
import {FaLinkedin,FaInstagram,FaGithub} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import shapeOne from '../../assets/shape-1.png';
import './header.css';
import {Link} from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

import { animateScroll } from 'react-scroll';

 


const Header = () => {
    const[showMenu,setShowMenu]=useState(false);
    const[scrollNav,setScrollNav]=useState(false);
    const [theme,setTheme] = useState('dark-theme');
    

    const scrollTop = ()=>{
        animateScroll.scrollToTop
    };

    const changeNav=()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    };

    const toggleTheme = ()=>
    {
        if(theme === 'dark-theme'){
            setTheme('light-theme')
        }
        else{
            setTheme('dark-theme');
        }
    };

    

    useEffect(()=> {
        window.addEventListener('scroll',changeNav)
    },[]);

    useEffect(()=>{
        document.body.classList.toggle('no-scroll',showMenu);
    },[showMenu]);

    useEffect(() =>
    {
       document.documentElement.className = theme;
    }, [theme]);

   

  return (
   <header className={`${scrollNav ? 'scroll-header ' : ''} header`}>
    <nav className="nav">
        <Link to='home' onClick={scrollTop} className="nav__logo text-cs">MANHAS</Link>

        <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu' }`}>
            <div className="nav__data">
                <ul className="nav__list">
                    {links.map(({name,path}, index) =>{
                        return(
                            <li className="nav__item" key={index}>
                                 <Link activeClass="nav__link text-cs" to={path} spy={true} hashSpy={true} smooth={true} offset={-150} duration={500} onClick={()=>setShowMenu(!showMenu)}>
          {name}
        </Link>
                            </li>
                        );
                    })}
                </ul>


                <div className="header__social">
                <a href="https://www.linkedin.com/in/swezal-manhas-714095281" className="header__social-link">
                    <FaLinkedin/>
                    </a>
                    <a href="https://www.instagram.com/swezal_manhas" className="header__social-link">
                    <FaInstagram/>
                    
                </a>
                <a href="https://github.com/swezalmanhas" className="header__social-link">
                    <FaGithub/>
                    
                </a>
                
            </div>
            </div>

            <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt=""  className='shape'/>
        </div>
        </div>

        <div className="nav__btns">
            <div className='theme__toggler' onClick={toggleTheme}>
              {theme ==='dark-theme' ? <BsSun/> : <BsMoon/>}
            </div>
            <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle' }`} onClick={()=>setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
   </header>
  )
}

export default Header
