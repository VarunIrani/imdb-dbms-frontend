import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Card, CardDeck, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { COLORS } from '../../colors';

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
const titles = [ 'All Movies', 'Top Rated' ];

class MovieCards extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const movieDetails = this.props.movieDetails;
		return (
			<div>
				{titles.map((value, index) => (
					<Container style={{ marginTop: 50 }}>
						<Row className="mb-4">
							<h2
								style={{
									borderLeftStyle: 'solid',
									borderLeftColor: COLORS.primary,
									borderWidth: 5
								}}
								className="pl-4"
							>
								{value}
							</h2>
						</Row>
						{movieDetails ? (
							<Carousel responsive={responsive}>
								<CardDeck>
									{movieDetails.map((movie, i) => (
										<Card key={i}>
											<Card.Img variant="top" src={movie.poster} />
											<Card.Body>
												<Card.Title>{movie.title}</Card.Title>
												<Row className="ml-1">
													{movie.rating ? (
														<React.Fragment>
															<FontAwesomeIcon
																icon={faStar}
																style={{ color: COLORS.primary }}
															/>
															<Card.Subtitle className="text-black p-0 m-0 pl-2">
																{movie.rating}
															</Card.Subtitle>{' '}
														</React.Fragment>
													) : (
														'No ratings yet'
													)}
												</Row>
											</Card.Body>
											<Card.Footer>
												<Row className="justify-content-center">
													<FontAwesomeIcon icon={faPlay} style={{ color: COLORS.primary }} />
													<h6 className="text-black pl-3">Watch Trailer</h6>
												</Row>
											</Card.Footer>
										</Card>
									))}
								</CardDeck>
							</Carousel>
						) : (
							<h1>Loading</h1>
						)}
					</Container>
				))}
			</div>
		);
	}
}

export default MovieCards;
