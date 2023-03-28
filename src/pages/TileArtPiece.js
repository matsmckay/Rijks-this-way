import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading';


const TileArtPiece = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [imageTiles, setImageTiles] = useState(null);
    const [imageTileSize, setImageTileSize] = useState('Select a size');
    console.log(id);

    const handleSizeChange = (e) => {
        setImageTileSize(e.target.value);
        console.log(imageTileSize)
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

    if (loading) {
        return <Loading />
    }

    if (!imageTiles) {
        return <h2 className='section-title'>Sorry, no tiles to display for this piece</h2>
    }

    const {sizes} = imageTiles;
  return (
    
    <section className='section artPiece-section'>
        <Link to="/" className='btn btn-primary'>
            back home
        </Link>
    <form onSubmit={tiles.map((tile) => {
        const {url} = tile
        return (
            <div>{url}</div>
        )
    })}>

    <select 
        onChange={handleSizeChange}  
        value={imageTileSize}
        required
        name="" 
        id="">
        <option value="Select a size. ">Select an image size</option>
        {sizes.map((size, index) =>  {
            const {name, tiles} = size;
            return (
                <>  
                <option key={index} value={name}>{name}</option>
                <div>{tiles.url}</div>
                </>
            )
        })}
        </select>
    </form>
        <div>
            {/* {pieces.map((piece, index) => {
                const {url} = piece;
            return (
            <article key={index}>

                <img src={url} alt="" />
            </article>
            )
            })} */}
        </div>

    </section>
  )
}

export default TileArtPiece
