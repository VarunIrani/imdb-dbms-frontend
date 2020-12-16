import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default class Page1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page1Data: { title: '', year: '', rated: '', released: '', runtime: '', genre: '', country: '' }
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(input, e) {
		const page1Data = this.state.page1Data;
		page1Data[input] = e.target.value;
		this.setState({ page1Data });
	}

	componentWillUnmount() {
		this.props.setPage1(this.state.page1Data);
	}

	componentDidMount() {
		this.setState({ page1Data: this.props.data });
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Form.Label>Title</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('title', e)}
							placeholder="Enter a title ex - Spider-Man"
							defaultValue={this.state.page1Data.title}
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col xl={6}>
						<Form.Label>Year</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('year', e)}
							placeholder="Enter a year ex - 2002"
							defaultValue={this.state.page1Data.year}
						/>
					</Col>
					<Col xl={6}>
						<Form.Label>Rated</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('rated', e)}
							placeholder="Enter a rated ex - PG-13"
							defaultValue={this.state.page1Data.rated}
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col xl={6}>
						<Form.Label>Released</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('released', e)}
							placeholder="Enter a released ex - 03/06/2002"
							defaultValue={this.state.page1Data.released}
						/>
					</Col>

					<Col xl={6}>
						<Form.Label>Runtime</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('runtime', e)}
							placeholder="Enter a runtime ex - 121 Min"
							defaultValue={this.state.page1Data.runtime}
						/>
					</Col>
				</Row>
				<Row className="mt-4 mb-4">
					<Col xl={6}>
						<Form.Label>Genre</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('genre', e)}
							placeholder="Enter a genre ex - Action, Adventure, Sci-Fi"
							defaultValue={this.state.page1Data.genre}
						/>
					</Col>

					<Col xl={6}>
						<Form.Label>Country</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('country', e)}
							placeholder="Enter a country ex - USA"
							defaultValue={this.state.page1Data.country}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
