import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { motion } from "motion/react"
import logo from '../assets/logo.png'
import Cart from '../assets/cart.png'

const Nevbar = ({ cart }) => {





  const { user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-10 py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Home</Link ></li>
            <li><Link to='/About'>About Us</Link ></li>
            <li><Link to='/AllService'>Service</Link ></li>
            <li><Link to='/AddSevice'>Add Sevice</Link ></li>

            <li><Link to='/Profile'>My Profile</Link ></li>

          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold"><img src={logo} className='h-[80px] w-[80px]' alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[17px]">
          <li><Link to='/'>Home</Link ></li>
          <li><Link to='/About'>About Us</Link ></li>
          <li><Link to='/AllService'>Service</Link ></li>
          <li><Link to='/AddService'>Add Service</Link ></li>

          <li><Link to='/Profile'>My Profile</Link ></li>
        </ul>
      </div>
      {
        user && <div className="navbar-end">
          <div class=" activity1 flex items-center rounded-[25px]  px-8 max-sm:p-2 mr-5  ">
            <p >{cart}</p>
            <img src={Cart} alt="" class="h-[22px] w-[22px] mr-2" />
          </div>
          <btn onClick={handleSignOut} className="btn bg-[#ffffff] text-[#109937]  font-bold text-[15px]">Logout</btn>
        </div>
      }
      {
        !user && <motion.div end={{ scale: 0.5 }} animate={{ scale: 0.9 }}
          className="navbar-end">
          <Link to={'/Login'} className="btn bg-[#1a9b38] text-[#ffffff]  font-bold text-[15px] px-6 mr-3">Login</Link>
          <Link to={'/SignUp'} className="btn bg-[#b5b3b3] text-[#ffffff]  font-bold text-[15px] px-6">Sign Up</Link>

        </motion.div>
      }
    </div>
  );
};

export default Nevbar;