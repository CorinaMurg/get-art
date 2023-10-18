import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Artwork } from './Artwork';
import { ImageDetailsPage } from './ImageDetailsPage';
import { Footer } from './Footer';

import './App.css';

export function App() {
    const [artworks, setArtworks] = useState([]);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    function onSearchSubmit(query) {
      if (!query.trim()) {
        setArtworks([]); 
        return;
      }
    
      searchArtworks(query).then((json) => {
        setArtworks(json);
      });
    }
	
    if (selectedArtwork) {
      return (
        <ImageDetailsPage artwork={selectedArtwork} onBack={() => setSelectedArtwork(null)} />
      );
    }
  
    return (
      <div className="App">
        <h1>TCL Career Lab Art Finder</h1>
        <SearchForm onSearchSubmit={onSearchSubmit} />
        <ul>
          {artworks.map((artwork) => (
            <Artwork artwork={artwork} onSelectArtwork={setSelectedArtwork} />
          ))}
        </ul>
        <Footer />
      </div>
    );
}
