import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router';
import { motion } from "motion/react"
import toast, { Toaster } from 'react-hot-toast';

const ServiceDetails = () => {
     const { name } = useParams();
    const { email } = useParams();


    const [skills, setSkills] = useState([]); 
     const { cart, setCart } = useOutletContext(); 
    const { myId } = useParams();

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.log(err))
    }, [])

    const findResult = skills.find(skill => skill.skillId == myId);
    console.log(findResult);

    const notify = () => toast.success('Tree donation successful.');
    const formRef = useRef(null);


    const handleBooking = () => {
        notify();

        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleCart = () => {
    setCart(cart + 1);
    toast.success("Added to cart!");
  };


    return (
        <div className='my-20'>
            <div className="flex justify-center ">
                <div className=" card w-full max-w-[700px] bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-full h-[400px] lg:object-cover'
                            src={findResult?.image}
                            alt="image" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center py-5 '>
                            <h2 className="card-title">{findResult?.skillName}</h2>
                        </div>
                        <p className='my-5 w-auto sm:text-justify'>{findResult?.description}</p>
                        <div className="flex justify-between items-center">
                            <div className=' py-5 '>
                                <p className='font-bold'>Price: {findResult?.price}$ </p>
                                <p>Rating: {findResult?.rating} </p>

                            </div>
                            <div className=' font-bold py-5'>
                               <button onClick={handleCart} className="btn bg-[#1a9b38] text-[#ffffff] px-5">Add Cart</button>
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
                            <input defaultValue={name} name='name' type="text" className="input" placeholder="Type Your Name" required />
                            <label className="label">Email</label>
                            <input defaultValue={email} name='email' type="text" className="input" placeholder="Type your Email" required />
                            <label className="label"> Tree</label>
                            <input defaultValue={name} name='name' type="text" className="input" placeholder="Type Tree Name" required />
                            <button onClick={handleBooking} type='button' className="btn btn-neutral mt-4 w-[320px]">Donate</button> <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;