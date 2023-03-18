import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleArtPiece from './pages/SingleArtPiece';
import Error from './pages/Error';
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/art/:id" element={<SingleArtPiece/>}/>         */}
          <Route path="*" element={<Error/>}/>
        </Routes>
      
    </div>
  )
}

export default App;