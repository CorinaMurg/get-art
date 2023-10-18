/**
 * Throughout this file are blocks of comments containing keywords
 * prefixed with `@`. These are JSDoc comments, and they help us
 * describe variables, functions, and other aspects of our code.
 * @see: https://jsdoc.app/
 */

/**
 * An individual piece of artwork found at the `/artworks/search/` endpoint.
 * @typedef {Object} Artwork
 * @property {number} _score
 * @property {string | null} artist_title
 * @property {string} date_display
 * @property {string} image_id
 * @property {{alt_text: string, height: number, width: number}} thumbnail
 * @property {string} title
 */

/**
 * The response from the `/artworks/search/` endpoint. Includes an array of
 * artworks, as well as some `config`, `info`, and `pagination` metadata.
 * @typedef {Object} AICSearchResponse
 * @property {Object} config
 * @property {Array<Artwork>} data
 * @property {Object} info
 * @property {Object} pagination
 * @property {null} preference
 */

/**
 * Search the Chicago Institute of Art's `/artworks/search/` endpoint
 * and get a Promise containing the JSON-encoded response.
 * @param {string} query
 * @returns {Promise<AICSearchResponse>}
 */
export function searchArtworks(query) {
	/**
	 * Get data from `ARTWORKS_SEARCH_RESULT.json`, whuch is served by our
	 * local server.
	 * TODO: replace with path to `/artworks/search/` endpoint,
	 * as described in README.md.
	 */
	const requestUrl = `./ARTWORKS_SEARCH_RESULT.json`;

	const headers = { Accept: 'application/json' };

	return fetch(requestUrl, { headers })
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			throw new Error("Failed to fetch artworks");
		})
		.then((data) => {
			// Filter the artworks based on the query
			return data.data.filter((artwork) => 
				artwork.title.toLowerCase().includes(query.toLowerCase()) ||
				(artwork.artist_title && artwork.artist_title.toLowerCase().includes(query.toLowerCase()))
			);
		});
	
}

