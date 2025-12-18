import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {

    const { user } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenForm = () => {
        setIsOpen(!isOpen)
    }

        const notify = () => toast.success('Volunteer Registration Successfull');


    const handleSubmit = (e) => {
        e.preventDefault();
    notify();
};



    return (
        <div className='flex-col justify-center items-center bg-[#ffffff] w-full pt-10 '>
            <div className='grid grid-cols-2 space-y-2 pb-10'>
                <div className="flex-col items-center justify-center text-center">
                    <h1 className='font-bold text-2xl text-center py-8 '>My Profile</h1>
                    <div className="avatar  rounded-2xl mb-5 border">
                        <div className="w-20 rounded-2xl">
                            <img src={user?.photoURL || "fallback-image-url"} alt="User" />
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-center '>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div>
                    <h3 className=' text-3xl py-8 '>You can join with us as a volunteer!</h3>
                    <p>Join us as a volunteer and be a part of a meaningful journey to create positive change in the community. 
                        Your time, skills, and passion can help make a real difference while gaining valuable experience and connections along the way.</p>
                    <button onClick={handleOpenForm} className="btn my-10 bg-[#1a9b38] text-[#ffffff]    font-bold">Volunteer Registration</button>

                </div>
            </div>
            {
                isOpen && (
                    <div className='bg-[#f5fff8] max-w-full py-20 px-[500px]'>
                        <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl  text-center pb-15'>Volunteer Registration Form</h3>
                        <form className=" fieldset text-[15px] bg-[#ffffff] space-y-2 py-10 px-20 w-[500px] rounded-2xl shadow-sm">
                            <label className="label">Name</label>
                            <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder=" Name" />
                            <label className="label">Photo URL</label>
                            <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input" placeholder=" Photo URL" />
                            <label className="label">Email</label>
                            <input defaultValue={user?.email} name='email' type="email" className="input" placeholder=" Email" />
                            <label className="label">Phone</label>
                            <input name='phone' type="number" className="input" placeholder=" Phone Number" required />
                            <label className="label">Address</label>
                            <input name='address' type="text" className="input" placeholder=" Address" required />
                            <button type='submit' onClick={handleSubmit} className="btn flex ml-25  w-30 mt-5">Submit</button> <Toaster />
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default Profile;