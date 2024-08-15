import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Singin from './components/Singin';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/signin" element={<Singin/>}/>
        <Route path="/movieDetail" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
