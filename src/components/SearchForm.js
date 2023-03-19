import React from 'react'
import ArtList from './ArtList';
import { useState } from 'react'

const SearchForm = () => {

    const [artSearch, setArtSearch] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [searchError, setSearchError] = useState(false);

    const searchArt = async (e) => {
        const url = new URL (`https://www.rijksmuseum.nl/api/en/collection`);

        e.preventDefault();
        url.search = new URLSearchParams({
            key: `C1So9sXo`,
            format: 'json',
            imgonly: true,
            q: userInput,
        });

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setArtSearch(data.artObjects);
            if (data.artObjects.length === 0) {
                throw new Error()
            } else {
                setSearchError(false)
            }
        }
        catch (error){
            setSearchError(true);
        }
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

  return (
    <>
        <div>
            <form onSubmit={searchArt}>
                <label className="labelSearch" htmlFor="userSearch">Search for beautiful art from the Rijks Museum: </label>
                <p>Type into the search field below and then click the 'Search' button!</p>
                <input
                    onChange={handleChange}
                    type="text"
                    id="userSearch"
                    value={userInput}
                    placeholder={`e.g. "picasso"`}
                    className="input"
                    required
                />
                <button type="submit" className="button">Search</button>
                {searchError ? <p className="errorMessage">Sorry, your search didn't return any of our timeless works of art. Please try a different search.</p> : null}
            </form>
        </div>
        <div className='imageFlex'>
            <h2>Works of art</h2>
            <div>
                {artSearch.map((artwork) => {
                return (
                        <ArtList 
                            key={artwork.id}
                            id={artwork.id}
                            alt={artwork.title}
                            title={artwork.longTitle}
                            imagePath={artwork.webImage.url}
                            artist={artwork.principalOrFirstMaker}
                            productionPlaces = {artwork.productionPlaces}
                        />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default SearchForm;
