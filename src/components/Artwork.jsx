
export function Artwork({ artwork, onSelectArtwork }) {
  return (
    <li>
      <button 
        className="link-button"
        onClick={() => onSelectArtwork(artwork)}
      >
        {artwork.title}
      </button>
      <br />
      {`${artwork.artist_title ? artwork.artist_title : 'Unknown'}, ${artwork.date_display}`}
    </li>
  );
}
