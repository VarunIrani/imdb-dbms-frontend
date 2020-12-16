import React, { Component } from 'react';
import MovieBanner from '../components/movie/MovieBanner';
import MovieDetail from '../components/movie/MovieDetail';

const getParameterByName = (name, url = window.location.href) => {
	name = name.replace(/[[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
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
	}

	componentDidMount() {
		const title = getParameterByName('title');
		console.log(title);
		fetch(`https://mesmovies.herokuapp.com/get-movie?title=${title}`, {
			mode: 'cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({
					movieDetails: res[0]
				});
			});
	}
	render() {
		return (
			<React.Fragment>
				<MovieBanner movieDetails={this.state.movieDetails} />
				{this.state.movieDetails ? <MovieDetail movieDetails={this.state.movieDetails} /> : null}
			</React.Fragment>
		);
	}
}
