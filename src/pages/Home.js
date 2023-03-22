import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ArtList from '../components/ArtList';

const Home = () => {
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
        <main>
            <SearchForm
                searchArt={searchArt}
                handleChange={handleChange}
                userInput={userInput}
                searchError={searchError}
            />
            <ArtList
                artSearch={artSearch}
            />
        </main>
    )
}

export default Home;