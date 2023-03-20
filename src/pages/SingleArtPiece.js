import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';


const SingleArtPiece = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [artPiece, setArtPiece] = useState(null);
    
    React.useEffect(() => {
        setLoading(true);
        const artInfo = async () => {
            try {
                const url = new URL(`https://www.rijksmuseum.nl/api/en/collection/${id}`);
                url.search = new URLSearchParams({
                    key: `C1So9sXo`,
                    format: "json",
                    imgonly: true,
                });
                const res = await fetch(url);
                const data = await res.json();
                console.log(data.artObject)
                if (data.artObject) {
                    setArtPiece(data.artObject)
                } else {
                    setArtPiece(null)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            }
        artInfo();
    },[id])

    if (loading) {
        return <Loading />
    }
    if (!artPiece) {
        return <h2>No priceless piece of art to display</h2>
    }
   console.log(artPiece.materials)
    return (
        <section className='section artpiece-section'>
            <article>
                 <p>{artPiece.materials}</p>
                 <p>{JSON.stringify(artPiece.acquisition)}</p>
            </article>
    </section>
  )
}

export default SingleArtPiece
