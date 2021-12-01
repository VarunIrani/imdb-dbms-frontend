import React, { Component } from 'react';
import { Container, Form, Modal, Row, Col } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { COLORS } from '../../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ReviewModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userReview: { rating: 0, comment: '', _id: null },
			errors: []
		};
		this.setRating = this.setRating.bind(this);
		this.setReview = this.setReview.bind(this);
		this.submitReview = this.submitReview.bind(this);
		this.handleCommentsChange = this.handleCommentsChange.bind(this);
	}

	setRating() {
		const r = this.state.userReview;
		r.rating = document.querySelectorAll('.MuiRating-iconFilled').length.toString();
		r.userId = this.props.userId;
		r.movieId = this.props.movieId;
		this.setState({ review: r });
	}

	submitReview() {
		let errors = [];
		let review = this.state.userReview;
		if (review.rating > 0) {
			review.date = new Date(Date.now()).toLocaleDateString();

			this.props.setReview(review);
			this.props.onHide();
		} else {
			errors.push({ message: 'Please give a rating of at least 1' });
		}
		this.setState({ errors });
	}

	handleCommentsChange() {
		const r = this.state.userReview;
		r.comment = this.comments.value;
		r.userId = this.props.userId;
		r.movieId = this.props.movieId;
		this.setState({ review: r });
	}

	setReview() {
		this.setState({
			userReview: {
				_id: this.props.review._id,
				rating: this.props.review.rating,
				comment: this.props.review.comment
			}
		});
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
					<Container>
						<Row className="justify-content-between">
							<Modal.Title id="contained-modal-title-vcenter">Write A Review</Modal.Title>
							{this.props.review._id ? (
								<Button
									className="bg-danger"
									size="small"
									onClick={() => {
										this.props.deleteReview(this.props.review._id);
									}}
								>
									<FontAwesomeIcon icon={faTrash} color="white" style={{ fontSize: 22 }} />
								</Button>
							) : null}
						</Row>
					</Container>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<p>You rated this movie: {this.state.userReview.rating}</p>
						</Row>
						<Row className="justify-content-center">
							<Col />
							<Col className="my-auto">
								<Rating
									size="large"
									max={10}
									onChange={function(e){
										console.log(e.target)
										this.setRating()
									}.bind(this)}
									value={this.state.userReview.rating}
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
								id='comment-box'
								as="textarea"
								rows={4}
								ref={(e) => (this.comments = e)}
								value={this.state.userReview.comment}
								onChange={this.handleCommentsChange}
							/>
						</Row>
						<Row className="justify-content-end mt-3">
							<Button
								id='submit-review'
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
