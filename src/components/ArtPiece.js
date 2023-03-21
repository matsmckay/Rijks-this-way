import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ArtPiece = ({id, alt, title, imagePath, productionPlaces}) => {
  return (
    <article className='art-piece'>
        <div className="img-container">
            <h2>{title}</h2>
            <p>{productionPlaces}</p>
            <img src={imagePath} alt={alt} />
            <Link to= {`/art/${id}`} state = {{from: imagePath}} className='btn' >
                details
            </Link>
        </div>
    </article>
  )
}

export default ArtPiece
