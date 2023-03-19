import React from 'react';
import ArtPiece from '../components/ArtPiece';

const ArtList = ({id, alt, title, imagePath, artist, productionPlaces}) => {
    

  return (
    <article>
        <div className='list-container'>
            <ArtPiece 
                id={id}
                alt={alt}
                title={title}
                imagePath={imagePath}
                artist={artist}
                productionPlaces={productionPlaces}

            />
        </div>
    </article>
  )
}

export default ArtList;
