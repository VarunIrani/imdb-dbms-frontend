import React, { Component } from 'react';
import MovieBanner from '../components/movie/MovieBanner';
import MovieDetail from '../components/movie/MovieDetail';

export default class Movie extends Component {
	render() {
		return (
			<React.Fragment>
				<MovieBanner movieDetails={this.props.movieDetails} />
				<MovieDetail movieDetails={this.props.movieDetails} />
			</React.Fragment>
		);
	}
}
