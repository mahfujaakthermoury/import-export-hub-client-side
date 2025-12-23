import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { motion } from "motion/react"
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
    //   const { name } = useParams();
    // const { email } = useParams();


    const [product, setProduct] = useState([]); 
    const { myId } = useParams();
    const [loading, setLoading] = useState();


    useEffect(() => {
        fetch(`http://localhost:3000/products/${myId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [myId])

    const notify = () => toast.success('Tree donation successful.');
    const formRef = useRef(null);


    const handleBooking = () => {
        notify();

        if (formRef.current) {
            formRef.current.reset();
        }
    };


    if(loading){
        return <p>Loading....</p>
    }
    
    return (
        <div className='my-20'>
            <div className="flex justify-center ">
                <div className=" card w-full max-w-[700px] bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-full h-[400px] lg:object-cover'
                            src={product?.imageUrl}
                            alt="image" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center py-5 '>
                            <h2 className="card-title">{product?.name}</h2>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className=' py-5 '>
                                <p className='font-bold'>Price: {product?.price}$ </p>
                                <p>Rating: {product?.rating} </p>

                            </div>
                            <div className=' font-bold py-5'>
                               <button className="btn bg-[#1a9b38] text-[#ffffff] px-5">Import Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-20">
                <div className=" mx-auto card w-[700px] bg-base-100 shadow-sm py-8">
                    <h3 className='font-bold text-4xl text-center py-7 text-[#038b27] '>Donate the Tree   </h3>
                    <div className="card-body">
                        <form ref={formRef} className="fieldset mx-auto text-[15px]">
                            <label className="label">Name</label>
                            <input  name='name' type="text" className="input" placeholder="Type Your Name" required />
                            <label className="label">Email</label>
                            <input  name='email' type="text" className="input" placeholder="Type your Email" required />
                            <label className="label"> Tree</label>
                            <input  name='tree' type="text" className="input" placeholder="Type Tree Name" required />
                            <button onClick={handleBooking} type='submit' className="btn btn-neutral mt-4 w-[320px]">Donate</button> <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;