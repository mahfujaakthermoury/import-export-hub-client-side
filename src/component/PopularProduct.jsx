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
   
       <div className='pt-30 sm:px-10'>
         <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl text-center pb-20 '>Top Plant Collection</h3>
   
         <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
           {
             products.slice(0, 6).map(product=>
               <motion.div initial={{ scale: 0.9 }}
                 animate={{
                   scale: 1,
                   transition: { duration: 3 }
                 }} className="card bg-base-100 w-96 shadow-sm">
                 <figure>
                   <img className='w-full h-[300px] object-cover'
                     src={product?.imageUrl}
                     alt="image" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{product?.name}</h2>
                   <div className='flex justify-between'>
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
                       whileTap={{ scale: 0.95 }} className="btn bg-[#1a9b38] text-[#ffffff]   mt-5">See Details</motion.button></Link>
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