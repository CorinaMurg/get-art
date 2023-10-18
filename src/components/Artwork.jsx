import './Artwork.css';

export function Artwork({ artwork, onSelectArtwork }) {
  return (
    <li className='artwork'>
      
        <p>{artwork.artist_title ? artwork.artist_title : 'Unknown'}</p>

        <button 
          className="artwork--button"
          aria-label={`${artwork.title} by {artwork.artist_title}}`}
          onClick={() => onSelectArtwork(artwork)}
        >
          {artwork.title}
        </button>
      
      
      <p>{artwork.date_display}</p>
    </li>
  );
}

