import React from 'react';
import { useParams } from 'react-router';
import auth from '../firebase/firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPass = () => {

    const { email } = useParams();

    const handleReset = (e) => {
        e.preventDefault();
        const formEmail = e.target.email.value;

        sendPasswordResetEmail(auth, formEmail)
            .then(() => {
               window.open('https://mail.google.com/mail/u/0/')
            })
            .catch((error) => {
                console.log(error);
                
            });
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-200 w-[350px] mx--w-sm my-23">
                <div className="card-body">

                    <form onSubmit={handleReset} className="fieldset text-[15px]">
                        <label className="label">Email</label>
                        <input defaultValue={email} name='email' type="email" className="input" placeholder="Email" />
                        <button className="btn btn-neutral mt-4">Send reset email</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;