import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Youtube from 'react-youtube'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Trailer({location,movieId}) {

    const [trailerView,setTrailerView] = useState([])

    const showTrailer = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId ? movieId : location.state.movie.id}/videos?api_kay=be1c60a055d5852c0311db379d9b6df6&language=en-US`)
        .then(res => res.json())
        .then(json => setTrailerView(json[0]?.results))
    }

    useEffect(()=>{
        showTrailer()
    },[])


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    console.log(trailerView[0])

  return (
        <div>
          <Button variant='contained' sx={{color:"black",bgcolor:"white"}} onClick={openModal}>PLAY TRAILER</Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <Youtube videoId={trailerView?.key}/>
          </Modal>
        </div>
      );
  }

export default Trailer