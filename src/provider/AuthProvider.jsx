import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signupWithEmailPass = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignin = ()=>{
        return signInWithPopup (auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authData={
        signupWithEmailPass,
        setUser,
        user,
        handleGoogleSignin,
        loading
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;