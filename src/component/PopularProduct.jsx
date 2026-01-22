import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const PopularProduct = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://import-export-hub-gules.vercel.app/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])

  console.log(products);

  return (

    <div className='pt-20 sm:px-10'>
      <h3 className='font-bold text-4xl text-center pb-5 '>Our Top Services</h3>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">
        We connect businesses across the world through reliable import and export
        solutions. Our growing numbers reflect trust, efficiency, and successful
        global partnerships built over time.
      </p>

      <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
        {
          products.slice(0, 6).map(product =>
            <motion.div initial={{ scale: 0.9 }}
              animate={{
                scale: 1,
                transition: { duration: 3 }
              }} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img className='w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105'
                  src={product?.imageUrl}
                  alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#074799]">{product?.name}</h2>
                <div className='flex justify-between text-[15px]'>
                  <div className='py-5'>
                    <p>Origin Country: {product?.originCountry}</p>
                    <p className=''>Available Quantity: {product?.quantity} </p>
                  </div>
                  <div className='py-5'>
                    <p>Rating: {product?.rating} </p>
                    <p className=''>Price: {product?.price}$ </p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/ProductDetails/${product?._id}`}> <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} className="btn text-[#074799] hover:bg-[#4DA8DA] bg-[#dadada]  mt-5">
                    See Details</motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        }
      </div>
    </div>
  );
};


export default PopularProduct;