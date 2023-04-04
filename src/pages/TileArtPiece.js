import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';


const TileArtPiece = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [imageTiles, setImageTiles] = useState(null);
    const [imageTileSize, setImageTileSize] = useState('');
    const [getTiles, setGetTiles] = useState([]);
    console.log(id);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    React.useEffect(() => {
    setLoading(true);
    const artTiles = async () => {
            try {
                const url = new URL(`https://www.rijksmuseum.nl/api/en/collection/${id}/tiles`);
                url.search = new URLSearchParams({
                    key: `C1So9sXo`,
                    format: "json",
                    imgonly: true,
                });
                const res = await fetch(url);
                const data = await res.json();
                console.log(data)
                const tiles = data;
                console.log(tiles)
                if (tiles) {
                    const {
                        levels:sizes,
                        
                    } = tiles;
                    const newTiles = {
                        sizes,
                        
                    }
                    setImageTiles(newTiles)
                } else {
                setImageTiles([])
            }
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    artTiles();
    },[id])   

    const handleSizeChange = (e) => {
        console.log(imageTileSize)
        setImageTileSize(e.target.value);
    }


    if (loading) {
        return <Loading />
    }

    if (!imageTiles) {
        return (
            <div className='btn-back'>
            <h2 className='section-title'>Sorry, no tiles to display for this piece</h2>
            <button className='btn btn-primary' onClick={goBack}>Back to Image Details</button>
            </div>

        )
    }

    const {sizes} = imageTiles;
    
    const rijksImageTiles = (e) => {
        e.preventDefault();

        const selectedSize = imageTileSize;
        console.log(selectedSize);

        sizes.forEach((size) => {
            const {name, tiles} = size;
            console.log(name, tiles)

            if (selectedSize === name) {
                const newTiles = tiles.map((tile) => tile);
                setGetTiles(newTiles);
                console.log(getTiles)
            }
        })

    }

  return (
    
    <section className='section artPiece-section'>
        <button className='btn btn-back' onClick={goBack}>Back to Image Details</button>
    <h2 className='section-title'>Select a tile size in the dropdown menu and then 'Go Get Your tiles!'</h2>
    <form className='tile-form' onSubmit={rijksImageTiles}>
        <label className="tile-page" htmlFor="rijksTiles"></label>
        <select 
            id="rijksTiles"
            name="rijksTiles" 
            onChange={handleSizeChange}  
            value={imageTileSize}
            className='select'
            required

            >
            <option value="" selected disabled >Select an image size</option>
            {sizes.map((size, index) =>  {
                const {name, width, height} = size;
                console.log(index)
                return (
                    <>  
                    <option key={index} value={name}>width: {width}px, height:  {height}px </option>
                    </>
                )
            })}
            </select>
            <button className='btn tile-btn' type='submit'>Get me my tiles!</button>
    </form>
        <div className='tiles'>
            {getTiles.map((getTile, index) => {
                const {url} = getTile;
                console.log(url, index)
                return (

                    <img key={index} src={url} alt="" />
                )
            })} 
            
        </div>

    </section>
  )
}

export default TileArtPiece
