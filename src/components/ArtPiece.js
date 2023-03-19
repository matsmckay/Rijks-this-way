import React from 'react';
import { Link } from 'react-router-dom';

const ArtPiece = ({id, alt, title, imagePath, artist, productionPlaces}) => {
  return (
    <article className='art-piece'>
        <div className="img-container">
            <h2>{title}</h2>
            <p>{productionPlaces}</p>
            <img src={imagePath} alt={alt} />
            <Link to={`/art/${id}`} className='btn'>
                details
            </Link>
        </div>
    </article>
  )
}

export default ArtPiece
