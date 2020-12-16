import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

export default class Page3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page3Data: { director: '', production: '', writer: '', language: '' }
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(input, e) {
		const page3Data = this.state.page3Data;
		page3Data[input] = e.target.value;
		this.setState({ page3Data });
	}

	componentWillUnmount() {
		this.props.setPage3(this.state.page3Data);
	}

	componentDidMount() {
		this.setState({ page3Data: this.props.data });
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Form.Label>Director</Form.Label>
						<Form.Control
							placeholder="Enter directors ex - Sam Raimi"
							onChange={(e) => this.handleChange('director', e)}
							defaultValue={this.state.page3Data.director}
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<Form.Label>Production</Form.Label>
						<Form.Control
							placeholder="Enter a production ex - 21st Century Fox"
							onChange={(e) => this.handleChange('production', e)}
							defaultValue={this.state.page3Data.production}
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<Form.Label>Writer</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('writer', e)}
							placeholder="Enter writers ex - Stan Lee (Marvel comic book), Steve Ditko (Marvel comic book), David Koepp (screenplay)"
							defaultValue={this.state.page3Data.writer}
						/>
					</Col>
				</Row>
				<Row className="mt-4 mb-4">
					<Col>
						<Form.Label>Language</Form.Label>
						<Form.Control
							onChange={(e) => this.handleChange('language', e)}
							placeholder="Enter a language ex - English"
							defaultValue={this.state.page3Data.language}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
