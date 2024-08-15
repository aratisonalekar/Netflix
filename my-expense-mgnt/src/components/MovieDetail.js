import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function MovieDetail() {

    const location = useLocation()

    console.log(location)
  return (
    <Grid container >
        <Grid item xs={8}>
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`,
        height:"100vh",backgroundSize:"cover", backgroundRepeat:"no-repeat",}}>
            <div style={{paddingTop:"150px", paddingLeft:"30px",paddingRight:"10px"}}>
            <Grid container>
            <h1 style={{color:"red", fontSize:"50px"}}>{location.state.movie?.original_title}</h1>
            </Grid>
            <div style={{display:"flex"}}>
            <h4 style={{color:"white"}}>Language : {location.state.movie?.original_language} &nbsp; - &nbsp; </h4>
            <h4 style={{color:"white"}}>Release date : {location.state.movie?.release_date}</h4>
            </div>
            <Grid container>
            <h4 style={{color:"white",fontWeight:"100"}}>{location.state.movie?.overview}</h4>
            <Button variant='contained' sx={{color:"black",bgcolor:"white"}}>Play trailer</Button>
            </Grid>
            </div>
           
        </div>
        </Grid>
        <Grid item xs={4}>
        <div style={{backgroundColor:"black ",height:"100vh", padding:"20px"}}>
            <Grid container>
            <div>
                <h5 style={{color:"#aeb6bf", fontWeight:"100"}}>ADD REVIEW</h5>
                <TextField size='small' label="Review" variant='outlined' style={{backgroundColor:"white",borderRadius:"5px"}}/>
                <Button sx={{ml:"10px", bgcolor:"red",color:"white"}} variant='contained'>Submit</Button>
            </div>
            </Grid>
            <Grid container>
            <div>
            <h5 style={{color:"#aeb6bf", fontWeight:"100"}}>REVIEW</h5>
            </div>
            </Grid>
        </div>
        </Grid>
        </Grid>    
  )
}

export default MovieDetail