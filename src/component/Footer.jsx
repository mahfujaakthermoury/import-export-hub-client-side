import React from 'react';
import logo from '../assets/logo.png'
import { motion } from "motion/react"
import { Link } from 'react-router';


const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-[#dadada]  px-20 py-10">
        <aside className='flex items-center h-full'>
          <Link to='/' className="cursor-pointer"><motion.img whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} src={logo} className='h-[85px] w-[78px]' alt="" /></Link>
          <h1 className='text-3xl font-bold text-[#074799]'>Import Export <span className='text-[#4DA8DA]'>Hub</span></h1>
        </aside>
        <nav className='text-[17px]'>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Phone: +082715904</a>
          <a className="link link-hover">E-mail: naturebloomtrust@info.com</a>
          <a className="link link-hover">Address: Dhaka, Bangladesh</a>
        </nav>
        <nav className='text-[17px]'>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className='flex-col items-center mx-auto'>
          <h6 className="footer-title text-[17px]">Social Link</h6>
          <div className="grid grid-flow-col gap-4 text-[#4DA8DA] cursor-pointer">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.846h-7.406l-5.8-7.584-6.636 7.584H.472l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.29 19.43h2.04L6.51 3.286H4.32l13.29 17.297z" />
              </svg>

            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7H12v2.5h.06c.63-1.2 2.18-2.46 4.48-2.46 4.8 0 5.68 3.16 5.68 7.28V24h-5v-8.18c0-1.95-.04-4.46-2.72-4.46-2.72 0-3.14 2.12-3.14 4.32V24h-5V7z" />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <hr className='text-[#f4f4f4] mx-10' />


      <div className='bg-[#dadada]  px-20 py-5 text-center flex justify-around'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Import Export Hub</p>
        <p>Develop by <span className=" text-[#074799]">Mahfuja Akther</span> </p>

      </div>
    </>

  );
};

export default Footer;