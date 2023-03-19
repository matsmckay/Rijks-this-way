import React from 'react'

const ArtList = ({alt, title, imagePath}) => {
    

  return (
    <article>
        <div className='img-container'>
            <img src={imagePath} alt={alt} />
        </div>
    </article>
  )
}

export default ArtList
