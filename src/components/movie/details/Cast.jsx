import React, { Component } from 'react';
import { Card, CardColumns, Container, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import { COLORS } from '../../../colors';
import './Cast.css';

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
							<Card className="shadow rounded" key={i}>
								<Card.Img variant="top" src={actor.image} />
								<Card.Body>
									<Card.Title className="text-black p-0 m-0 pl-2 h3" style={{ color: 'black' }}>
										{actor.name}
									</Card.Title>
								</Card.Body>
							</Card>
						))}
					</CardColumns>
				</Row>
			</Container>
		);
	}
}
