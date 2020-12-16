import React, { Component } from 'react';
import { Container, Modal, Pagination, Row } from 'react-bootstrap';
import Page1 from '../form-pages/Page1';
import Page2 from '../form-pages/Page2';
import Page3 from '../form-pages/Page3';
import Page4 from '../form-pages/Page4';

export default class AddMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 1,
			page1Data: { title: '', year: '', rated: '', released: '', runtime: '', genre: '', country: '' },
			page2Data: { names: [], dobs: [], images: [] },
			page3Data: { director: '', production: '', writer: '', language: '' },
			page4Data: { plot: '', awards: '', poster: '', trailer: '' },
			actorCount: 1
		};
		this.sendMovie = this.sendMovie.bind(this);
	}

	sendMovie() {
		// TODO: Accumulate all pages data and send POST to /add-movie
		const movieData = {};
		const actors = [];
		const actorData = this.state.page2Data;
		Object.keys(this.state.page1Data).forEach((k) => {
			movieData[k] = this.state.page1Data[k];
		});

		actorData.names.forEach((v, i) => {
			actors.push({ name: actorData.names[i], image: actorData.images[i], dob: actorData.dobs[i] });
		});

		Object.keys(this.state.page3Data).forEach((k) => {
			movieData[k] = this.state.page3Data[k];
		});

		Object.keys(this.state.page4Data).forEach((k) => {
			movieData[k] = this.state.page4Data[k];
		});

		movieData['actors'] = actors;

		console.log(JSON.stringify(movieData));

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		fetch('https://mesmovies.herokuapp.com/add-movie', {
			method: 'POST',
			mode: 'cors',
			headers,
			body: JSON.stringify(movieData)
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					page1Data: { title: '', year: '', rated: '', released: '', runtime: '', genre: '', country: '' },
					page2Data: { names: [], dobs: [], images: [] },
					page3Data: { director: '', production: '', writer: '', language: '' },
					page4Data: { plot: '', awards: '', poster: '', trailer: '' },
					actorCount: 1
				});
			});
	}

	render() {
		const PAGES = [
			<Page1 setPage1={(page1Data) => this.setState({ page1Data })} data={this.state.page1Data} />,
			<Page2
				setPage2={(page2Data, actorCount) => this.setState({ page2Data, actorCount })}
				data={{ page2Data: this.state.page2Data, actorCount: this.state.actorCount }}
			/>,
			<Page3 setPage3={(page3Data) => this.setState({ page3Data })} data={this.state.page3Data} />,
			<Page4
				setPage4={(page4Data) => this.setState({ page4Data })}
				data={this.state.page4Data}
				sendMovie={this.sendMovie}
			/>
		];

		return (
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				keyboard={false}
				backdrop="static"
				show={this.props.show}
				onHide={this.props.onHide}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Add A Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>{PAGES[this.state.active - 1]}</Row>
						<Row className="justify-content-center">
							<Pagination>
								{[ ...new Array(4) ].map((e, i) => (
									<Pagination.Item
										key={i}
										active={i === this.state.active - 1}
										onClick={() => this.setState({ active: i + 1 })}
									>
										{i + 1}
									</Pagination.Item>
								))}
							</Pagination>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		);
	}
}
