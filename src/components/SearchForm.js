import React from 'react';

const SearchForm = ({searchArt, searchError, userInput, message, handleChange}) => {
    const searchValue = React.useRef('');
    React.useEffect(() => {
        searchValue.current.focus()
    },[])
  return (
        <section className="section search">
            <form className="search-form" onSubmit={searchArt}>
                <div className="form-control">
                    <label className="labelSearch" htmlFor="userSearch">Search for beautiful art from the Rijks Museum! </label>
                    <p>Type into the search field below and then click the 'Search' button!</p>
                    <input
                        onChange= {handleChange} 
                        type="text"
                        id="userSearch"
                        value={userInput}
                        placeholder={`e.g. "picasso"`}
                        className="input"
                        required
                        ref={searchValue}
                    />
                    <button type="submit" className="btn btn-search">Search</button>
                    {searchError ? <p className="error-message">Sorry, your search "{message}" didn't return any of our timeless works of art. Please try a different search.</p> : null}
                </div>
            </form>
        </section>
  )
}

export default SearchForm;
