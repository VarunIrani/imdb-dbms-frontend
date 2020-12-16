import React, { Component } from 'react';
import MovieCards from '../components/movie/MovieCards';
import { Container, Row } from 'react-bootstrap';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null
		};
	}

	componentDidMount() {
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
		return this.state.movies ? (
			<MovieCards movieDetails={this.state.movies} />
		) : (
			<Container>
				<Row>
					<h2>Loading...</h2>
				</Row>
			</Container>
		);
	}
}
