import React, { Component } from 'react';
import { Container, Form, Modal, Row, Col } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { COLORS } from '../../colors';

export default class ReviewModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: { rating: 0, comments: '' },
			errors: []
		};
		this.setRating = this.setRating.bind(this);
		this.submitReview = this.submitReview.bind(this);
		this.handleCommentsChange = this.handleCommentsChange.bind(this);
	}

	setRating() {
		const r = this.state.review;
		r.rating = document.querySelectorAll('.MuiRating-iconFilled').length;
		this.setState({ review: r });
	}

	submitReview() {
		let errors = [];
		if (this.state.review.rating > 0) {
			this.props.setReview(this.state.review);
			this.props.onHide();
		} else {
			errors.push({ message: 'Please give a rating of at least 1' });
		}
		this.setState({ errors });
	}

	handleCommentsChange() {
		const r = this.state.review;
		r.comments = this.comments.value;
		this.setState({ review: r });
	}

	render() {
		return (
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				keyboard={false}
				backdrop="static"
				show={this.props.show}
				onHide={this.props.onHide}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Write A Review</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<p>You rated this movie: {this.state.review.rating}</p>
						</Row>
						<Row className="justify-content-center">
							<Col />
							<Col className="my-auto">
								<Rating
									size="large"
									max={10}
									onChange={this.setRating}
									value={this.state.review.rating}
									name="rating"
								/>
							</Col>
							<Col />
						</Row>
						<Row>
							<p>Your Comments</p>
						</Row>
						<Row>
							<Form.Control
								as="textarea"
								rows={4}
								ref={(e) => (this.comments = e)}
								value={this.state.review.comments}
								onChange={this.handleCommentsChange}
							/>
						</Row>
						<Row className="justify-content-end mt-3">
							<Button
								disableElevation
								variant="contained"
								style={{ background: COLORS.primary, color: COLORS.textOnPrimary }}
								onClick={this.submitReview}
							>
								submit
							</Button>
						</Row>
						<Row className="text-danger">{this.state.errors.map((e, i) => <p key={i}>{e.message}</p>)}</Row>
					</Container>
				</Modal.Body>
			</Modal>
		);
	}
}
