// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pages.scss'
import logo from "../assets/logo.png"

const HomePage = ({ user }) => {
  console.log("home", user);

  return (
    <div className="main-container">
      <div className="header">
        <img className='w-1/3 mx-auto' src={logo} />
        <h1 className='text-[#dd4b4b] text-6xl m-6 font-bold tracking-wider' data-aos="zoom-in">Quick Credit</h1>

        <p className='text-xl m-4' data-aos="fade-left" data-aos-delay="0">
Certainly! How about "QuickCredit: Fast Cash Solutions"?</p>
<p className='text-xl m-4' data-aos="fade-left" data-aos-delay="0">
What features are there in <Link to='/about'><span className='text-red-400 hover:text-red-700'>QuickCredit?</span></Link>  </p>
      </div>
      <div className="btn-cntnr" data-aos="zoom-in" data-dos-delay='10'>
      </div >
    </div>

  );
};

export default HomePage;
