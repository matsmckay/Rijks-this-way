import React from 'react';
import SearchForm from '../components/SearchForm';
import ArtList from '../components/ArtList';

const Home = () => {
    return (
        <main>
          <SearchForm />
          <ArtList />
        </main>
    )
}

export default Home;