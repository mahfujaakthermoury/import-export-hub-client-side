import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const SignUp = () => {

    const { setUser, handleGoogleSignin, signupWithEmailPass } = useContext(AuthContext);
    const navigate = useNavigate();
        const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        const uppercase = /[A-Z]/;
        const lowerase = /[a-z]/;

        if(password.length < 6){
            return toast.error('Password must be at least 6 character')
        }
        if(!uppercase.test(password)){
            return toast.error('Need an Uppercase letter')
        }
        if(!lowerase.test(password)){
            return toast.error('Need a Lowercase letter')
        }

        signupWithEmailPass(email, password)
            .then(userCredential => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)
                    navigate('/');


                }).catch((error) => {
                    console.log(error)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    const googleSignup = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user
                setUser(user)
                navigate('/');
            })
            .catch(err =>
                console.log(err)
            )
    }

    return (
        <div className="hero bg-base-200 py-20 w-[500px] mx-auto my-20 rounded-2xl">
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
                <div className="card bg-base-100 w-[350px] shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset text-[15px]">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Photo URL" />
                             <div>
                                                            <label className="label">Password</label>
                                                            <div className="relative">
                                                                <input name="password" type={showPassword ? "text" : "password"}
                                                                    className="input w-full pr-12" placeholder="Password" />
                                                                <button type="button" onClick={() => setShowPassword(!showPassword)}
                                                                    className="absolute right-3 top-3 text-2xl">
                                                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                                                </button>
                                                            </div>
                                                        </div>
                            <div><span>Already have an account? </span><Link to={'/login'} className="link link-hover text-[#00ccff]">Login</Link></div>
                            <button onClick={googleSignup} className="btn mt-5"><span className='text-xl'>
                                <FcGoogle /></span><span>Signup with Google </span>
                            </button>
                            <button className="btn btn-neutral mt-4">Register</button>  <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;