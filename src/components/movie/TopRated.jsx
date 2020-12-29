import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Card, CardDeck, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { COLORS } from '../../colors';
import { Button } from '@material-ui/core';
import TrailerModal from './TrailerModal';
import { Link } from 'react-router-dom';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

class TopRated extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null,
			trailerShow: false
		};
		this.onTrailerHide = this.onTrailerHide.bind(this);
	}

	onTrailerHide(movie) {
		console.log({ movies: this.props.movies });
		this.setState({ trailerShow: !this.state.trailerShow, movie });
	}

	render() {
		const movies = this.props.movies;
		const n = 4;
		const result = new Array(Math.ceil(movies.length / n)).fill().map((_) => movies.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
		}

		return (
			<React.Fragment>
				{this.state.movie ? (
					<TrailerModal movie={this.state.movie} show={this.state.trailerShow} onHide={this.onTrailerHide} />
				) : null}
				<Container className="mt-4">
					<Row className="mb-4">
						<h2
							style={{
								borderLeftStyle: 'solid',
								borderLeftColor: COLORS.primary,
								borderWidth: 5
							}}
							className="pl-4"
						>
							Top Rated
						</h2>
					</Row>
					{result ? (
						<Carousel responsive={responsive}>
							{result.map((moviePart, i) => (
								<CardDeck key={i}>
									{moviePart.map(
										(movie, j) =>
											movie === 'N' ? (
												<Card key={j} style={{ opacity: 0 }} />
											) : (
												<Card key={j}>
													<Link to={`/movie?title=${movie.title}`}>
														<Card.Img variant="top" src={movie.poster} />
													</Link>
													<Card.Body>
														<Container>
															<Row>{movie.title}</Row>
															<Row className="mt-2">
																{movie.rating ? (
																	<React.Fragment>
																		<FontAwesomeIcon icon={faStar} style={{ color: COLORS.primary }} />
																		<Card.Subtitle className="text-black p-0 m-0 pl-2">
																			{movie.rating}
																		</Card.Subtitle>{' '}
																	</React.Fragment>
																) : (
																	'No ratings yet'
																)}
															</Row>
														</Container>
													</Card.Body>
													<Card.Footer>
														<Container fluid>
															<Row className="justify-content-center">
																<Button
																	startIcon={
																		<FontAwesomeIcon
																			icon={faPlay}
																			style={{ color: COLORS.primary }}
																		/>
																	}
																	onClick={() => {
																		this.onTrailerHide(movie);
																	}}
																>
																	Watch Trailer
																</Button>
															</Row>
														</Container>
													</Card.Footer>
												</Card>
											)
									)}
								</CardDeck>
							))}
						</Carousel>
					) : (
						<h1>Loading</h1>
					)}
				</Container>
			</React.Fragment>
		);
	}
}

export default TopRated;
