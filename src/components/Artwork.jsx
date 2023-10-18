export function Artwork({ artwork }) {
    return (
      <li>
        {artwork.artist_title ? artwork.artist_title : 'Unknown'}
        {artwork.title}
        {artwork.date_display}
      </li>
    );
}
