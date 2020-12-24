import React, { Component } from 'react';
import {Container, Row,Card,Col} from 'react-bootstrap'
import { COLORS } from '../../../colors';

export default class OtherInfo extends Component {
	render() {
		const movieDetails = this.props.movie;
		return (
			<Container>
				<Row>
					<p style={{ color: COLORS.textOnSecondary }} className="h4 font-weight-bold">
						Other Info
					</p>
				</Row>	
				<Row>
					<Card className="shadow p-3 mb-5 bg-white rounded">
					<Card.Body style={{ color: COLORS.textOnSecondary }} className="h5">
					<Row>
					<Col>
						<p><b>Language:</b> {movieDetails.language}</p>
						<p><b>Production:</b> {movieDetails.production}</p>
					</Col>	
					<Col>
						<p><b>Awards:</b> {movieDetails.awards}</p>
						<p><b>Country:</b> {movieDetails.country}</p>
					</Col>	
					</Row>
					</Card.Body>
					</Card>
				</Row>	
			</Container>
		);
	}
}
