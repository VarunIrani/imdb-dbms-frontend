import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { COLORS } from '../../colors';

export default class Page4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page4Data: { plot: '', awards: '', poster: '', trailer: '' }
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(input, e) {
		const page4Data = this.state.page4Data;
		page4Data[input] = e.target.value;
		this.setState({ page4Data });
	}

	componentWillUnmount() {
		this.props.setPage4(this.state.page4Data);
	}

	componentDidMount() {
		this.setState({ page4Data: this.props.data });
	}

	render() {
		return (
			<Container>
				<Row className="mb-4">
					<Col>
						<Form.Label>Plot</Form.Label>
						<Form.Control
							placeholder="Enter plot of movie"
							onChange={(e) => this.handleChange('plot', e)}
							as="textarea"
							rows={3}
							defaultValue={this.state.page4Data.plot}
						/>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<Form.Label>Awards</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('awards', e)}
							placeholder="Enter awards won ex - Grammy, Emmy, Best Picture"
							defaultValue={this.state.page4Data.awards}
						/>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<Form.Label>Trailer</Form.Label>
						<Form.Control
							ref={(trailer) => (this.trailer = trailer)}
							onChange={(e) => this.handleChange('trailer', e)}
							placeholder="Enter a trailer URL - https://www.youtube.com/watch?v=TYMMOjBUPMM"
							defaultValue={this.state.page4Data.trailer}
						/>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<Form.Label>Poster</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('poster', e)}
							placeholder="Enter poster URL of movie ex - https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97e4becb-d3b7-4732-8039-af5e062af33c/d80mdqw-d4faca1f-e866-4f05-90be-878fc8b2d7b7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTdlNGJlY2ItZDNiNy00NzMyLTgwMzktYWY1ZTA2MmFmMzNjXC9kODBtZHF3LWQ0ZmFjYTFmLWU4NjYtNGYwNS05MGJlLTg3OGZjOGIyZDdiNy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iw5tduwgrsparmY6i9VFC_6AHLWfYtLPTGwJw9rpeNM"
							defaultValue={this.state.page4Data.poster}
						/>
					</Col>
				</Row>
				<Row className="mb-4 justify-content-end">
					<Button
						className="mr-3"
						disableElevation
						size="large"
						variant="contained"
						style={{ background: COLORS.primary, color: COLORS.textOnPrimary }}
						onClick={this.props.sendMovie}
					>
						SUMBIT
					</Button>
				</Row>
			</Container>
		);
	}
}
