
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Youtube API KEY
const API_KEY = 'AIzaSyCXZvag6tNpUohUhRP2Z4kaCa170GbliLQ';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

// Create a new Component.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Render on Dom
ReactDOM.render(<App />, document.querySelector('.container'));