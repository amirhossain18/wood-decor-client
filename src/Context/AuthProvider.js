import React, { createContext, useEffect, useState } from 'react';
import app from '../Components/Firebase/Firebase.config';
import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile} from 'firebase/auth';


export const AuthContext = createContext();
const auth= getAuth(app)


const AuthProvider = ({children}) => {
            const [user , setUser]= useState()
            const [loading, setLoading] = useState(true)
          
            const providerGoogle = (provider) => {
                setLoading(true);
                return signInWithPopup(auth , provider);
             }
          
            const createUser= (email, password)=>{
                setLoading(true);
                return createUserWithEmailAndPassword(auth, email, password)
            }
           const emailSignin=(email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
           }
           const updateUser = (userInfo) =>{
            return updateProfile(auth.currentUser, userInfo);
        }

           const logout = ()=>{
            setLoading(true);
            return signOut(auth)
        }

            useEffect( ()=>{
               const unsubscribe = onAuthStateChanged(auth, currentUser => {
                    console.log('user observing')
                    setUser(currentUser)
                    setLoading(false);
                  });

                  return ()=> {
                    unsubscribe();
                  }
                
            },[] )
            const authInfo={
                providerGoogle,
                createUser,
                emailSignin,
                user,
                loading,
                updateUser,
                logout
            }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;