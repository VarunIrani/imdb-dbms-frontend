import React, { Component } from 'react';
import { COLORS } from '../../../colors';
import { Card, CardColumns, CardDeck, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cast.css'

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

export default class Cast extends Component {
	
	render() {
		const movieDetails = this.props.movie;
		const actors = movieDetails.actors;
		return (
			<Container>
				<Row>
					<p style={{ color: COLORS.textOnSecondary }} className="h4 font-weight-bold">
						Cast
					</p>
					
				</Row>
				<Row>
				<CardColumns>
					{actors.map((actor, i) => (
						<Card className="cardd shadow rounded">
								<Card.Img variant="top" src={actor.image} />
							<Card.Body>
									<Card.Title className="text-black p-0 m-0 pl-2 h3" style={{color:'black'}}>{actor.name}</Card.Title>
							</Card.Body>
						
						</Card>
					))}
				</CardColumns>
				</Row>
				</Container>
		);
	}
}
