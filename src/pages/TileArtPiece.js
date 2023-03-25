import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const TileArtPiece = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [imageTiles, setImageTiles] = useState(null);
    console.log(id);

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
                setImageTiles(data.levels[0].tiles)
                console.log(imageTiles)
                // if (data.artObject) {
                //     setArtPiece(data.artObject)
                // } else {
                //     setArtPiece(null)
                // }
                // setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        artTiles();
    },[id])

  return (
    <div>
      {imageTiles.map((tile) => {
        return (tile.url)
      })}
    </div>
  )
}

export default TileArtPiece
