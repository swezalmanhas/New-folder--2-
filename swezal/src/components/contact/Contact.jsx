import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser,FaRegMap } from 'react-icons/fa';
import './contact.css';
import shapeOne from '../../assets/shape-1.png';

const Contact = () => {
    const[form, setForm]=useState({name:'',email:'',subject:'',message:''});
    const handleChange=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        setForm({ ...form, [name]: value  });
    };
  return (
    <section className='contact section' id='contact'>

        
       <h2 className="section__title text-cs">Contact Me</h2>
    <p className="section__subtitle">Let's
         <span>Talk About Ideas</span>
    </p>  

    <div className="contact__container container grid">
        <div className="contact__content">
            <div className="contact__card">
           <span className='contact__card-icon'>
            <FaRegUser/>
           </span>
           <h3 className="contact__card-title">Freelance
            <p className="contact__card-data">
                Available Right Now
            </p>
           </h3>
            </div>

            <div className="contact__card">
           <span className='contact__card-icon'>
            <FaRegEnvelope/>
           </span>
           <h3 className="contact__card-title">Email
            <p className="contact__card-data">swezalmanhas@gmail.com</p>
           </h3>
            </div>

            <div className="contact__card">
           <span className='contact__card-icon'>
            <FaRegMap/>
           </span>
           <h3 className="contact__card-title">
            Address
            <p className="contact__card-data"> Model Town Pathankot , Punjab</p>
           </h3>
            </div>

            <div className="contact__card">
           <span className='contact__card-icon'>
            <FaRegAddressBook/>
           </span>
           <h3 className="contact__card-title">Phone
            <p className="contact__card-data">+91-9103064945</p>
           </h3>
            </div>
        </div>
        <form className='contact__form'>
            <div className="contact__form-group grid">
                <div className="contact__form-div">
                    <label  className="contact__form-tag text-cs">Your full Name <b>*</b></label>
                    <input type="text" name='name'  onchange={handleChange} value={form.name} className="contact__form-input" />
                </div>

                <div className="contact__form-div">
                    <label  className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                    <input type="email" name='email'  onchange={handleChange} value={form.email} className="contact__form-input" />
                </div>

            </div>

            <div className="contact__form-div">
                    <label  className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                    <input type="text" name='subject'  onchange={handleChange} value={form.subject} className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label  className="contact__form-tag text-cs">Message <b>*</b></label>
                   <textarea  name='message'  onchange={handleChange} value={form.message}
                   className='contact__form-input'></textarea>
                </div>
                <div className="contact__submit">
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
        </form>
        
       
    </div>


    <div className="section__deco deco__left">
            <img src={shapeOne} alt=""  className='shape'/>
        </div>


        
    </section>
  )
}

export default Contact
