import React, { useEffect, useState } from 'react'
import {Box, Card, CardContent, CardMedia, Grid} from "@mui/material"
import { Link } from 'react-router-dom'

function Home() {
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
     console.log(movies)

  return (
    <div style={{backgroundColor:"#171515"}}>
        <Grid container spacing={2} style={{paddingTop:"20px", paddingRight:"20px",paddingLeft:"20px"}}>
        {movies.map((movie)=>{
            return  <Grid item xs={3}>
            <Box>
                <Link to="/movieDetail" state={{movie:movie}}>
                    <Card>
                        <CardMedia
                        component="img"
                        height="140"
                        image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}>

                        </CardMedia>
                    </Card>
                </Link>
          </Box>
          </Grid>
        })}
        </Grid>
    </div>
  )
}

export default Home