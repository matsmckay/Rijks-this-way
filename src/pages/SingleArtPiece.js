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
    if (!artPiece ) {
        return <h2 className='section-title'>No priceless piece of art to display</h2>
    }
    return (
        <section className='section artPiece-section'>
            <Link to="/" className='btn btn-primary'>
                back home
            </Link>
            <h2 className='section-title'>{artPiece.longTitle}</h2>
            <div className="art-piece">
                <img src={from} alt={artPiece.title} />
            </div>

            <article className='art-info'>
                 <p>Quick description: {artPiece.scLabelLine}</p>
                 <p>Materials: {artPiece.materials.join(' ')}</p>
                 <p>The acquisition of this piece of art was: by method of {artPiece.acquisition.method} {artPiece.acquisition.creditLine} on {artPiece.acquisition.date.replace('T00:00:00', '')}</p>
                 <p>Physical medium: {artPiece.physicalMedium}</p>

            </article>
    </section>
  )
}

   

export default SingleArtPiece
