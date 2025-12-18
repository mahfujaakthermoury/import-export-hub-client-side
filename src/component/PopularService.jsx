import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const PopularService = () => {
    const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('./skills.json')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log(err))
  }, [])

  //console.log(skills);

  return (
    
    <div className='pt-30 sm:px-10'>
      <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl text-center pb-20 '>Top Plant Collection</h3>

      <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
        {
          skills.slice(0,6).map(skill =>
            <motion.div initial={{ scale: 0.9 }}
              animate={{
                scale: 1,
                transition: { duration: 3}
              }} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img className='w-full h-[300px] object-cover'
                  src={skill?.image}
                  alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{skill?.skillName}</h2>
                <div className='flex justify-between py-5'>
                  <p>Rating: {skill?.rating} </p>
                  <p className='ml-50'>Price: {skill?.price}$ </p>
                </div> 
                <div className="card-actions justify-end">
                 <Link to={`/ProductDetails/${skill?.skillId}`}> <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} className="btn bg-[#1a9b38] text-[#ffffff]   mt-5">View Details</motion.button></Link>
                </div>
              </div>
            </motion.div>
          )
        }
      </div>
    </div>
  );
};


export default PopularService;