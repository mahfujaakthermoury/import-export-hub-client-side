import React, { useEffect, useState } from 'react';
import icon from '../assets/Rating.png'

const TopVolunteers = () => {
   const [topRated, settopRated] = useState([]);
  
      useEffect(() => {
          fetch('./topRating.json')
              .then(res => res.json())
              .then(data => settopRated(data))
              .catch(err => console.log(err))
      }, [])
  
      return (
          <div className='px-5 py-20'>
              <h3 className='animate__animated animate__pulse font-bold text-[#076a21]  text-3xl sm:text-4xl  text-center pb-12'>Volunteers of the Year</h3>
  
              <div className="md:flex gap-5">
                  {
                      topRated.map(rating =>
                          <div className=" card bg-base-100 shadow-sm mb-5">
                             <div className='flex'>
                                   <div className='ml-2  mt-4 w-[180px]'><img className=' mt-5 h-[100px] w-[100px] rounded-full '
                                      src={rating?.image}
                                      alt="image" /></div>
                              <div className="card-body">
                                  <h2 className="card-title">{rating?.name}</h2>
                                  <p> {rating?.description} </p>
                                  <div className='flex py-3'>
                                      <p>Rating: {rating?.rating}</p> 
                                      <div className='flex'>
                                          <img src={icon} className='h-5 w-5' alt="" /> 
                                          <img src={icon} className='h-5 w-5' alt="" /> 
                                          <img src={icon} className='h-5 w-5' alt="" /> 
                                          <img src={icon} className='h-5 w-5' alt="" /> 
                                          <img src={icon} className='h-5 w-5' alt="" /> 
                                      </div>
                                  </div>
                              </div>
                             </div>
                          </div>
                      )
                  }
              </div>
          </div>
      );
  };
  

export default TopVolunteers;