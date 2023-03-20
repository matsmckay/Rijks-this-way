import React from 'react';
import ArtPiece from '../components/ArtPiece';

const ArtList = ({id, alt, title, imagePath, productionPlaces}) => {
    

  return (      
            <ArtPiece 
                id={id}
                alt={alt}
                title={title}
                imagePath={imagePath}
                productionPlaces={productionPlaces}
            />
      )
}

export default ArtList;
