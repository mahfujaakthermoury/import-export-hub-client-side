import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const AllProducts = () => {
    const [products, setProducts] = useState([]);
      
        useEffect(() => {
          fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
        }, [])
      
        return (
          <div className='pt-20 sm:px-10 py-20'>
            <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl  text-center pb-15'>All Plant Collection</h3>
      
            <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
              {
                products.map(product =>
                  <motion.div initial={{ scale: 0.9 }}
                    animate={{
                      scale: 1,
                      transition: { duration: 1 }
                    }} className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img className='w-full h-[300px] object-cover'
                        src={product?.imageUrl}
                        alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product?.name}</h2>
                      <div className='flex justify-between py-5'>
                        <p>Rating: {product?.rating} </p>
                        <p>Price: {product?.price}$ </p>
                      </div>
                      <div className="card-actions justify-end">
                        <Link to={`/ProductDetails/${product?._id}`}> <motion.button whileHover={{ scale: 1.1 }}
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