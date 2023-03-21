import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';



const SingleArtPiece = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [artPiece, setArtPiece] = useState(null);
    const location = useLocation();
    const {from} = location.state;
   
    
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
                    setArtPiece([])
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
    if (!artPiece ) {
        return <h2>No priceless piece of art to display</h2>
    }
    // if (artPiece.webImage === true) {
    //     return  
    
    return (
        <section className='section artpiece-section'>
            <Link to="/" className='btn'>
                back home
            </Link>
            <h2>{artPiece.longTitle}</h2>
            <div className="descImage">
                <img src={from} alt={artPiece.title} />
                {/* SOME ART WORKS' DETAILS LOOKED UP BY OBJECT-NUMBER WON'T RETURN AN IMAGE */}
            </div>
            <article>
                 <p>Quick description: {artPiece.scLabelLine}</p>
                 <p>Materials: {artPiece.materials.join(' ')}</p>
                 <p>The acquisition of this piece of art was: by method of {artPiece.acquisition.method} {artPiece.acquisition.creditLine} on {artPiece.acquisition.date.replace('T00:00:00', '')}</p>
                 <p>Physical medium: {artPiece.physicalMedium}</p>

            </article>
    </section>
  )
}

   

export default SingleArtPiece
