import React from 'react'
import { useEffect, useState } from 'react'
import netflix from '../images/Netflix.png'
import { Button } from '@mui/material'
import Singin from './Singin'
import { useNavigate,  } from 'react-router-dom'
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'

function Navbar() {

    const logout = async()=>{
        try{
            await signOut(auth)
        }catch(err){
             console.error(err)
        }
        
    }

    const navigate = useNavigate()

    const [movies,setMovies] = useState([])
    const getMovie = ()=>{
        try{
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=be1c60a055d5852c0311db379d9b6df6")
        .then(res => res.json())
        .then(json => setMovies(json.results))
        }catch(err){
           console.error(err)
        }
    }

    const signinClick = ()=>{
        navigate("/signin")
    }

    useEffect(()=>{
        getMovie()
    },[])
    console.log(auth.currentUser?.email)


  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movies[10]?.poster_path})`,
    backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"500px",width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
            <img style={{width:"70px",height:"30px"}} src={netflix} alt='netflix'/>
        <div>
        {auth.currentUser?.emailVerified ? <Button onClick={logout} variant='contained' color="error" sx={{height:"40px",marginLeft:"10px"}}>Logout</Button> 
        :<Button onClick={signinClick} color='error' variant='contained' sx={{height:"40px"}}>Signin in with Google</Button>}
        </div>
        </div>
        <div style={{padding:"20px"}}>
            <h1 style={{color:"#D7DBDD",fontSize:"70px",fontFamily:"initial"}}>{movies[10]?.original_title}</h1>
            <h3 style={{color:"#D7DBDD"}}>{movies[10]?.overview}</h3>
            <Button variant='container' sx={{color:"black",bgcolor:"white",fontWeight:"bold"}}>View Trailer</Button>
        </div>
    </div>
  )
}

export default Navbar