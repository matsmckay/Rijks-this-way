import React from 'react';
import { Link } from 'react-router-dom';


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

// Figured out how to pass data through react-router-dom Link with the article: https://ui.dev/react-router-pass-props-to-link