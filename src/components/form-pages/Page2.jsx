import React, { Component } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { COLORS } from '../../colors';

export default class Page2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page2Data: { names: [], dobs: [], images: [] },
			actorCount: 1
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(input, e, i) {
		const page2Data = this.state.page2Data;
		page2Data[input][i] = e.target.value;
		this.setState({ page2Data });
	}

	componentWillUnmount() {
		this.props.setPage2(this.state.page2Data, this.state.actorCount);
	}

	componentDidMount() {
		this.setState({ ...this.props.data });
	}

	render() {
		return (
			<Container>
				{[ ...new Array(this.state.actorCount) ].map((e, i) => (
					<React.Fragment key={i}>
						<Row className="h5">Actor {i + 1} Info</Row>
						<Row className="mb-3">
							<Col xl={6}>
								<Form.Label>Actor Name</Form.Label>
								<Form.Control
									onChange={(e) => this.handleChange('names', e, i)}
									placeholder="Enter a actor's name ex - Tobey Maguire"
									defaultValue={this.state.page2Data.names[i]}
								/>
							</Col>
							<Col xl={6}>
								<Form.Label>Actor Date of Birth</Form.Label>
								<Form.Control
									onChange={(e) => this.handleChange('dobs', e, i)}
									placeholder="Enter a date of birth ex - 13/06/2000"
									defaultValue={this.state.page2Data.dobs[i]}
								/>
							</Col>
						</Row>
						<Row className="mb-5">
							<Col>
								<Form.Label>Actor Image URL</Form.Label>
								<Form.Control
									onChange={(e) => this.handleChange('images', e, i)}
									placeholder="Enter a image url ex - https://vignette.wikia.nocookie.net/disney/images/e/ee/Tobey_Maguire.jpg/revision/latest?cb=20180626202116"
									defaultValue={this.state.page2Data.images[i]}
								/>
							</Col>
						</Row>
					</React.Fragment>
				))}
				<Row className="mt-3 justify-content-center mb-3">
					<Button
						className="mr-3"
						disableElevation
						variant="outlined"
						style={{ background: COLORS.primaryFaint, color: 'black', fontSize: 24 }}
						onClick={() => this.setState({ actorCount: this.state.actorCount + 1 })}
					>
						+
					</Button>
					<Button
						disableElevation
						variant="outlined"
						style={{ background: COLORS.primaryFaint, color: 'black', fontSize: 24 }}
						onClick={() => {
							if (this.state.actorCount > 1) this.setState({ actorCount: this.state.actorCount - 1 });
						}}
					>
						-
					</Button>
				</Row>
			</Container>
		);
	}
}
