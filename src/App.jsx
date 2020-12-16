import React from 'react';
import IMDBNavbar from './components/nav/IMDBNavbar';
import MovieBanner from './components/movie/MovieBanner';
import MovieDetail from './components/movie/MovieDetail';
import { config } from 'dotenv';
import MovieCards from './components/movie/MovieCards';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieDetails: null
		};
	}

	componentDidMount() {
		config();
		//  GET the IMDB movie data
		const url = new URL('http://www.omdbapi.com/');
		const params = { t: 'Game of thrones', apiKey: process.env.REACT_APP_OMDB_API_KEY };
		Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
		fetch(url.toString(), {
			method: 'GET',
			mode: 'cors' // Cross-Origin-Resource-Sharing
		})
			.then((response) => response.json())
			.then((response) => this.setState({ movieDetails: response }));
	}

	render() {
		return (
			<React.Fragment>
				<IMDBNavbar />
				<MovieBanner movieDetails={this.state.movieDetails} />
				<MovieDetail movieDetails={this.state.movieDetails} />
				<MovieCards movieDetails={this.state.movieDetails}/>
			</React.Fragment>
		);
	}
}

export default App;
