import React, { Component } from 'react';
import {Container, Row,Card} from 'react-bootstrap'
import { COLORS } from '../../../colors';

export default class Storyline extends Component {
	render() {
		const movieDetails = this.props.movie;
		return (
			<Container>
				<Row>
					<p style={{ color: COLORS.textOnSecondary }} className="h4 font-weight-bold">
						Storyline
					</p>
					<Card className="shadow p-3 mb-5 bg-white rounded">
					<Card.Body style={{ color: COLORS.textOnSecondary }} className="h5">{movieDetails.plot}</Card.Body>
					</Card>
				</Row>
			</Container>
		);
	}
}
