import { Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function MovieDetail() {

    const location = useLocation()

    console.log(location)
  return (
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`,height:"100vh",backgroundSize:"cover", backgroundRepeat:"no-repeat",}}>

        </div>
        </Grid>
        <Grid item xs={4}>
        <div>
            <div>
                Add Review
            </div>
            <div>
                Show Review
            </div>
        </div>
        </Grid>
        </Grid>    
  )
}

export default MovieDetail