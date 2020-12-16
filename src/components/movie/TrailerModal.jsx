import { Modal, Container, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS } from '../../colors';

export default class TrailerModal extends Component {
	render() {
		const movie = this.props.movie;
		return (
			<Modal
				size="lg"
				show={this.props.show}
				onHide={this.props.onHide}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">{movie.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="justify-content-center">
							<ReactPlayer
								style={{ borderRadius: 5, border: `5px solid ${COLORS.secondary}` }}
								url={movie.trailer}
								playIcon={<FontAwesomeIcon icon={faPlay} style={{ color: COLORS.primary }} />}
							/>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		);
	}
}
