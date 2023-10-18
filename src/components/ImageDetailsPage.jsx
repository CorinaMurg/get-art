
export function ImageDetailsPage({ artwork }) {
    const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

    return (
      <div>
        <img alt={artwork.thumbnail ? artwork.thumbnail.alt_text : artwork.title} src={imageUrl} />
        <p>{artwork.artist_title ? artwork.artist_title : 'Unknown'}</p>
        <p>{artwork.title}</p>
        <p>{artwork.date_display}</p>
      </div>
    );
}
