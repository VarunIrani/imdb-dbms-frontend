import React, { Component } from 'react';
import AllMovies from '../components/movie/AllMovies';
import TopRated from '../components/movie/TopRated';

import { Container, Row } from 'react-bootstrap';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			topRated: null
		};
	}

	componentDidMount() {
		fetch(`https://mesmovies.herokuapp.com/top-rated`, {
			mode: 'cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					topRated: res
				});
			});
		fetch(`https://mesmovies.herokuapp.com/get-movie`, {
			mode: 'cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					movies: res
				});
			});
	}

	render() {
		return this.state.movies && this.state.topRated ? (
			<Container fluid>
				<Row>
					<AllMovies movies={this.state.movies} />
				</Row>
				<Row className="mt-3">
					<TopRated movies={this.state.topRated} />
				</Row>
			</Container>
		) : (
			<Container>
				<h2>Loading...</h2>
			</Container>
		);
	}
}
