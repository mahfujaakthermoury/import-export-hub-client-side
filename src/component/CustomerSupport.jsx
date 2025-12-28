import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"


const CustomerSupport = () => {
    const [topRated, settopRated] = useState([]);

    useEffect(() => {
        fetch('./topRating.json')
            .then(res => res.json())
            .then(data => settopRated(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='px-20 py-20'>
            <h3 className='animate__animated animate__pulse font-bold  text-3xl sm:text-4xl  text-center'>CustomerSupport</h3>
            <p className="text-gray-600 max-w-2xl mx-auto my-5 text-center">More than 100k+ customers have trusted and used our products. 
                Their customers appreciate the performance and user experience we are providing.</p>

            <div  className="md:flex justify-center gap-8 mt-15">
                {
                    topRated.map(rating =>
                        <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.1 }} className=" card bg-base-100 shadow-sm mb-5">
                            <div className='flex items-center justify-center mx-auto'>
                                <div className=' w-[300px]'><img className='h-[200px] w-[300px] rounded-l-xl '
                                    src={rating?.image}
                                    alt="image" /></div>
                                <div className="card-body text-[15px]">
                                    <h2 className="font-bold text-xl">{rating?.name}</h2>
                                    <p className='max-w-xl '> {rating?.description} </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};


export default CustomerSupport;