import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const SingleArtPiece = () => {
    const { id } = useParams();
    const [artPiece, setArtPiece] = useState(null);
    
    const artInfo = async () => {
        const url = new URL(`https://www.rijksmuseum.nl/api/en/collection/${id}`);
        url.search = new URLSearchParams({
            key: `C1So9sXo`,
            format: "json",
            imgonly: true,
        });
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        // if (data.artObject) {
        //    setArtPiece(data.artObject)
        // } else {
        //     setArtPiece(null)
        // }
    }
    artInfo();
    return (
        <section className='section artpiece-section'>
            <h2></h2>
    </section>
  )
}

export default SingleArtPiece
