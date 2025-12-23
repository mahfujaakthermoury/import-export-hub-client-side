import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { motion } from "motion/react"
import logo from '../assets/logo.png'
import Cart from '../assets/cart.png'

const Nevbar = () => {

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
            <li><Link to='/AllProducts'>All Products</Link ></li>
            <li><Link to='/MyExport'>My Export</Link ></li>
            <li><Link to='/MyImport'>My Import</Link ></li>
            <li><Link to='/AddExport'>Add Export</Link ></li>
          </ul>
        </div>
        <Link  to='/' className="btn btn-ghost"><img src={logo} className='h-[80px] w-[80px]' alt="" /></Link>
        <ul className="menu menu-horizontal px-1 text-[17px] hidden lg:flex">
          <li><Link to='/'>Home</Link ></li>
          <li><Link to='/AllProducts'>All Products</Link ></li>
          <li><Link to='/MyExport'>My Export</Link ></li>
          <li><Link to='/MyImport'>My Import</Link ></li>
          <li><Link to='/AddExport'>Add Export</Link ></li>
        </ul>
      </div>
      {
        user && <div className="navbar-end">
            <div className="avatar  rounded-full mr-5 border">
                        <div className="w-14 rounded-full">
                            <img src={user?.photoURL || "fallback-image-url"} alt="User" />
                        </div>
                    </div>
          <button onClick={handleSignOut} className="btn bg-[#ffffff] text-[#109937]  font-bold text-[15px]">Logout</button>
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