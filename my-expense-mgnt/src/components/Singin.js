import React from 'react'
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { Button } from '@mui/material'
import netflix from "../images/Netflix.png"
import { auth, googleAuth } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Singin() {

    const navigate = useNavigate()

    const googleSignin = async()=>{
        try{
            await  signInWithPopup(auth,googleAuth)
            setTimeout(()=>{
                auth.currentUser?.emailVerified && navigate("/")
            },2000)
            toast.success("signedIn successfully")
        }catch(err){
            console.error(err)
        }
        
    }

    console.log(auth?.currentUser)
  return (
    <div style={{backgroundColor:"#171515",height:"100vh",padding:"20px",paddingTop:"20px"}}>
        <ToastContainer autoClose={2000}/>
        <img style={{width:"100px", height:"40px"}} src={netflix} alt='netflix'/>
        <div style={{position:"fixed", left:"45%", top:"35%"}}>
        <Button onClick={googleSignin} variant='contained' color='error'>Singin</Button>
        <br/>
        <div>
        <h2 style={{color:"white"}}>Let's start<br/> to expolre movies<br/> from here.</h2>
        </div>
        </div>
    </div>
  )
}

export default Singin