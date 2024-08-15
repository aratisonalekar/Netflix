import React from 'react'
import { useEffect, useState } from 'react'
import netflix from '../images/Netflix.png'
import { Button } from '@mui/material'

function Navbar() {

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

    useEffect(()=>{
        getMovie()
    },[])
    console.log(movies[0])


  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movies[10]?.poster_path})`,
    backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"400px",width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
            <img style={{width:"70px",height:"30px"}} src={netflix} alt='netflix'/>
        <Button color='error' variant='contained' sx={{height:"40px"}}>SignIn</Button>
        </div>
        <div></div>
    </div>
  )
}

export default Navbar