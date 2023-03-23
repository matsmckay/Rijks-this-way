import React from 'react';
import { Link } from 'react-router-dom';

const ArtList = ({artSearch}) => {
    

  return (      
        <>
        <section className='section'>
            <h2 className='section-title'>Works of Art</h2>
            <div className="art-center">
                {artSearch.map((artwork) => {            
                return (
                <article key={artwork.id} className='art'>
                    <div className="img-container">
                        <img src={artwork.webImage.url} alt={artwork.alt} />
                    </div>
                    <div className="art-footer">
                        <h3>{artwork.title}</h3>
                        <h4>{artwork.productionPlaces[0]}</h4>
                        <Link to= {`/art/${artwork.objectNumber}`} state = {{from: artwork.webImage.url}} className='btn' >
                            details
                        </Link>
                    </div>
                </article>)
                })}
            </div>
        </section>
        </>
    )
}
// Figured out how to pass data through react-router-dom Link with the article: https://ui.dev/react-router-pass-props-to-link    

export default ArtList;
