import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Artwork } from './Artwork';
import { Footer } from './Footer';

import './App.css';

export function App() {
	const [artworks, setArtworks] = useState([]);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setArtworks(json);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
          		{artworks.map((artwork, index) => (
            		<Artwork key={index} artwork={artwork}/>
          		))}
        	</ul>

			<Footer />
		</div>
	);
}
