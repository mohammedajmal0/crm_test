import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {auth} from '../firebase'
const userAuthContext=createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser]= useState("");
    function SignUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        console.log("email" , email)
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    function googleSignIn(){
        const googleAuthProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }
    useEffect(
        ()=>{
           const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
            });
            return ()=>{
                unsubscribe();
            }
        },
    [] );
    return(
        <userAuthContext.Provider value={{user,SignUp,login,logOut,googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}