import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import{projects} from '../../Data';
import "./portfolio.css";
import shapeOne from '../../assets/shape-1.png';



const allNavList =new Set(projects.map((project)=> project.category));
console.log(allNavList);
const Portfolio = () => {
    const [projectItems, setMenuItems]=useState(projects);
  return (
  <section className='portfolio section' id='work'>
    <h2 className="section__title text-cs">Portfolio</h2>
    <p className="section__subtitle">
        My <span>Cases</span>
    </p>
    <List/>

    <div className="portfolio__container container grid" >
        <Items projectItems={projectItems}/>
    </div>


    <div className="section__deco deco__right">
            <img src={shapeOne} alt=""  className='shape'/>
        </div>
        
  </section>
  )
}

export default Portfolio
