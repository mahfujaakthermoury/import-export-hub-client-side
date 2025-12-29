import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import useTitle from '../hooks/useTitle';

const AllProducts = () => {

  useTitle('All Products');

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://import-export-hub-gules.vercel.app/products?search=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [search])

  // Search filtering logic  
  const filteredProducts = products.filter(product => {
  const searchText = search.toLowerCase();

  const matchesName =
    product?.name?.toLowerCase().includes(searchText);

  const matchesCountry =
    product?.originCountry?.toLowerCase().includes(searchText);

  const matchesPrice =
    product?.price?.toString().includes(searchText);

  return matchesName || matchesCountry || matchesPrice;
});


  return (

    <div className='pt-20 sm:px-10 py-20'>

      <h3 className='font-bold text-3xl sm:text-4xl  text-center'>All Service Category</h3>
       <p className="text-gray-600 max-w-2xl mx-auto my-5 text-center">
    Explore our complete range of import and export services designed to simplify
    global trade. From product sourcing to international delivery, we ensure
    reliable and efficient solutions for your business needs.
  </p>

      {/* Search Option */}
      <div className="join flex justify-end mb-20">
        <div>
          <label className="input validator join-item ">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" value={search}
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search your product" required />
          </label>
          <div className="validator-hint hidden">Enter Product Title</div>
        </div>
        <button className="btn btn-neutral join-item px-7 text-[#e3e9f1] bg-[#074799]">Search</button>
      </div>

      {/* All Product */}
      <div className="sm:px-[100px] sm:grid grid-cols-3 gap-10">
        {
          filteredProducts.map(product =>
            <motion.div initial={{ scale: 0.9 }}
              animate={{
                scale: 1,
                transition: { duration: 1 }
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
                    whileTap={{ scale: 0.95 }}
                    className="btn text-[#074799] hover:bg-[#4DA8DA] bg-[#dadada] mt-5">View Details</motion.button></Link>
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