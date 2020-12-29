import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import MovieBanner from '../components/movie/MovieBanner';
import MovieDetail from '../components/movie/MovieDetail';

const getParameterByName = (name, url = window.location.href) => {
	name = name.replace(/[[\]]/g, '\\$&');
	let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieDetails: null
		};
		this.getMovie = this.getMovie.bind(this);
	}

	getMovie() {
		const title = getParameterByName('title');
		fetch(`https://mesmovies.herokuapp.com/get-movie?title=${title}`, {
			mode: 'cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					movieDetails: res[0]
				});
			});
	}

	componentDidMount() {
		this.getMovie();
	}

	render() {
		return (
			<React.Fragment>
				{this.state.movieDetails ? (
					<MovieBanner movieDetails={this.state.movieDetails} getMovie={this.getMovie} />
				) : (
					<Container>
						<h2>Loading...</h2>
					</Container>
				)}
				{this.state.movieDetails ? <MovieDetail movieDetails={this.state.movieDetails} /> : null}
			</React.Fragment>
		);
	}
}
