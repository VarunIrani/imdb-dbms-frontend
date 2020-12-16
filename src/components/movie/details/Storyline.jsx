import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import { COLORS } from '../../../colors';

export default class Storyline extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p style={{ color: COLORS.textOnSecondary }} className="h4 font-weight-bold">
						Storyline
					</p>
				</Row>
			</Container>
		);
	}
}
