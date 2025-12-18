import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const AllProducts = () => {
    const [skills, setSkills] = useState([]);
      
        useEffect(() => {
          fetch('./skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.log(err))
        }, [])
      
        return (
          <div className='pt-20 sm:px-10 py-20'>
            <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl  text-center pb-15'>All Plant Collection</h3>
      
            <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
              {
                skills.map(skill =>
                  <motion.div initial={{ scale: 0.9 }}
                    animate={{
                      scale: 1,
                      transition: { duration: 1 }
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
                        <p>Price: {skill?.price}$ </p>
                      </div>
                      <div className="card-actions justify-end">
                        <Link to={`/ServiceDetails/${skill?.skillId}`}> <motion.button whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn bg-[#1a9b38] text-[#ffffff]  mt-5">View Details</motion.button></Link>
                      </div>
                    </div>
                  </motion.div>
                )
              }
            </div>
          </div>
        );
      };
      

export default AllProducts;