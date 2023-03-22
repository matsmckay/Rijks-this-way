import { Link } from 'react-router-dom';


const ArtPiece = ({artSearch}) => {
    

    return (
        <>
        <div className='list-container'>
            {artSearch.map((artwork) => {            
            return (
            <article className='art-piece'>
                <div className="img-container">
                    <h2>{artwork.title}</h2>
                    <p>{artwork.productionPlaces}</p>
                    <img src={artwork.webImage.url} alt={artwork.alt} />
                    <Link to= {`/art/${artwork.objectNumber}`} state = {{from: artwork.webImage.url}} className='btn' >
                        details
                    </Link>
                </div>
            </article>)
            })}
        </div>
        {/* <SearchForm
            
        /> */}
        </>
    )
}

export default ArtPiece

// Figured out how to pass data through react-router-dom Link with the article: https://ui.dev/react-router-pass-props-to-link