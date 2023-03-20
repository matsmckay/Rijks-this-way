import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';


const SingleArtPiece = () => {
    const { id } = useParams();
    
    const artInfo = async () => {
        const url = new URL(`https://www.rijksmuseum.nl/api/en/collection/${id}`);
        url.search = new URLSearchParams({
            key: `C1So9sXo`,
            format: "json",
            imgonly: true,
        });
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }

    artInfo();
    return (
        <div>
      poops
    </div>
  )
}

export default SingleArtPiece
