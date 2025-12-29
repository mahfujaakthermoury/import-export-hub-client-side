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
            <h3 className='animate__animated animate__pulse font-bold  text-3xl sm:text-4xl  text-center'>Customer Support</h3>
            <p className="text-gray-600 max-w-2xl mx-auto my-5 text-center">More than 100k+ customers have trusted and used our products. 
                Their customers appreciate the performance and user experience we are providing.</p>

            <div  className="md:flex justify-center gap-8 mt-15">
                {
                    topRated.map(rating =>
                        <div  className=" card bg-base-100 shadow-sm mb-5 w-full max-w-4xl">
                            <div className='flex flex-col md:flex-row items-center md:items-start mx-auto'>
                                <motion.div whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.1 }} className=' w-[300px]'><img className='h-[200px] w-[300px] rounded-l-xl '
                                    src={rating?.image}
                                    alt="image" /></motion.div>
                                <div className="card-body text-[15px]">
                                    <h2 className="font-bold text-xl">{rating?.name}</h2>
                                    <p className='max-w-xl '> {rating?.description} </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


export default CustomerSupport;