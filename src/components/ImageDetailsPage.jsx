import './ImageDetailsPage.css'

export function ImageDetailsPage({ artwork, onBack }) {
    const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

    return (
      <div className='details'>
        <button className='details-back--button' aria-label="Back to search results" onClick={onBack}>Back</button>
        <div className='details--image-container'>
            <img alt={artwork.thumbnail ? artwork.thumbnail.alt_text : artwork.title} src={imageUrl} />
        </div>
        
        <div className='details--text'>
            <p className='details--artist'>{artwork.artist_title ? artwork.artist_title : 'Unknown'}</p>
            <p className='details--title'>{artwork.title}</p>
            <p className='details--date'>{artwork.date_display}</p>
        </div>
        
      </div>
    );
}

