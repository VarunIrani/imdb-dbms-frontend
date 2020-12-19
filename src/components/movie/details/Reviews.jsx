import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { COLORS } from '../../../colors';
// import { reviews } from './dummyReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class Reviews extends Component {
	render() {
		const movieDetails = this.props.movie;
		console.log(movieDetails.reviews);
		const reviews = movieDetails.reviews;
		return (
			<Container>
				<Row>
					<p style={{ color: COLORS.textOnSecondary }} className="h4 font-weight-bold">
						Reviews
					</p>
				</Row>
				{reviews==null?
				<Row>
					No one has reviewed this movie ☹
				</Row>
				:
				<Row className="justify-content-around">
					{reviews.map((review, index) => (
						<Col
							xl="5"
							key={index}
							style={{ background: 'white', borderRadius: 8, boxShadow: '-1px 1px 10px 0px #eee' }}
							className="mb-3 mt-3"
						>
							<Row className="p-4 justify-content-between">
								<Col xl="2" className="p-4" style={{ borderRadius: 8, backgroundColor: COLORS.grey }}>
									<Row className="justify-content-around align-items-center">
										<FontAwesomeIcon
											className=""
											icon={faStar}
											color={COLORS.primary}
											style={{ fontSize: 18 }}
										/>
										<span className="" style={{ fontSize: 20, color: 'black' }}>
											{Math.round(review.rating)}
										</span>
									</Row>
								</Col>
								<Col xl="9">
									<Row>
										<span style={{ color: '#333', fontSize: 24 }}>{review.userId}</span>
									</Row>
									<Row>
										<span style={{ color: COLORS.darkGrey }}>{review.date}</span>
									</Row>
								</Col>
								<span style={{ color: COLORS.darkGrey }} className="mt-4">
									{review.comment}
								</span>
							</Row>
						</Col>
					))}
				</Row>
				}
			</Container>
		);
	}
}
