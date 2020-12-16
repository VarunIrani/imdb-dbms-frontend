import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { COLORS } from '../../colors';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import RatingCircle from './RatingCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ReviewModal from '../review/ReviewModal';

class MovieBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '0',
			width: '0',
			showReview: false,
			review: null
		};
		this.setShowReview = this.setShowReview.bind(this);
		this.setReview = this.setReview.bind(this);
	}

	componentDidMount() {
		this.setState({
			height: '240',
			width: '240'
		});
	}

	setShowReview() {
		this.setState({ showReview: !this.state.showReview });
	}

	setReview(review) {
		this.setState({ review });
	}

	render() {
		const movieDetails = this.props.movieDetails;
		// console.log(movieDetails.Title)
		return (
			<Container>
				<ReviewModal
					show={this.state.showReview}
					onHide={this.setShowReview}
					setReview={(review) => this.setReview(review)}
				/>
				{movieDetails ? (
					<Row className="pb-5 pt-3 justify-content-between">
						<Col xl={8}>
							<Row className="mt-3 align-items-center">
								<Col xl={8}>
									<p style={{ fontSize: '4em', fontWeight: 'bolder' }}>{movieDetails.title}</p>
								</Col>
								<Col xl={4}>
									<Row
										style={{
											border: `2px solid ${COLORS.secondary}`,
											borderRadius: 10,
											color: 'white',
											backgroundColor: COLORS.secondary
										}}
										className="justify-content-center mx-5 py-1 font-weight-bolder"
									>
										<span style={{ fontSize: 24 }}>{movieDetails.year}</span>
									</Row>
								</Col>
							</Row>
							<Row className="mt-n3">
								<Col xl={2}>{movieDetails.rated}</Col>
								<Col xl={2}>{movieDetails.runtime}</Col>
								<Col xl={3}>{movieDetails.released}</Col>
							</Row>
							<Row className="mt-4">
								<Col xl={10}>
									<span style={{ fontSize: 20 }}>{movieDetails.plot.substring(0, 100)}...</span>
								</Col>
							</Row>
							<Row className="mt-5 mb-1">
								<Col>
									<h6 className="font-weight-bold">GENRE</h6>
								</Col>
								<Col>
									<h6 className="font-weight-bold">DIRECTOR</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<h6>{movieDetails.genre}</h6>
								</Col>
								<Col>
									<h6>{movieDetails.director}</h6>
								</Col>
							</Row>
							<Row className="mt-5 mb-1">
								<Col>
									<h6 className="font-weight-bold">WRITERS</h6>
								</Col>
								<Col>
									<h6 className="font-weight-bold">STARS</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<h6>{movieDetails.writer}</h6>
								</Col>
								<Col>
									{movieDetails.actors.map((actor, key) => <span key={key}>{actor.name}, </span>)}
								</Col>
							</Row>
						</Col>
						<Col xl={4}>
							<Row className="justify-content-center py-4">
								<Card className="w-75" style={{ backgroundColor: COLORS.white }} elevation={3}>
									<CardContent>
										<Row className="justify-content-center">
											<RatingCircle
												radius="90"
												rating={
													isNaN(parseFloat(movieDetails.rating)) ? (
														0
													) : (
														parseFloat(movieDetails.rating)
													)
												}
												height={this.state.height}
												width={this.state.width}
												strokeColor={COLORS.primary}
												strokeWidth="15"
												showText="true"
												textColor="#222"
												textSize="68"
											/>
										</Row>
										<Row className="justify-content-center">
											<h5>{movieDetails.reviews.length} Ratings</h5>
										</Row>
									</CardContent>
									<CardActions>
										<Container className="mb-3">
											<Row className="justify-content-center">
												<Button
													startIcon={<FontAwesomeIcon icon={faComment} />}
													size="large"
													variant="contained"
													style={{
														backgroundColor: '#1a1a1a',
														color: 'white',
														fontWeight: 'bold'
													}}
													onClick={this.setShowReview}
												>
													{this.state.review ? 'edit your review' : 'write a review'}
												</Button>
											</Row>
										</Container>
									</CardActions>
								</Card>
							</Row>
						</Col>
					</Row>
				) : (
					<Row>
						<h2>Loading...</h2>
					</Row>
				)}
			</Container>
		);
	}
}

export default MovieBanner;
