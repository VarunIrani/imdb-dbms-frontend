import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { COLORS } from '../../colors';
import AddMovie from './AddMovie';
class IMDBNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddMovie: false,
			movies: [],
			search: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		fetch(`https://mesmovies.herokuapp.com/get-movie-minified?title=${e.target.value}`, {
			mode: 'cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					movies: res.filter((e, i) => i < 5).sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
				});
			});
	}

	render() {
		return (
			<React.Fragment>
				<AddMovie
					onHide={() => {
						this.setState({ showAddMovie: !this.state.showAddMovie });
					}}
					show={this.state.showAddMovie}
				/>
				<div className="px-5 py-4">
					<Row>
						<Col>
							<Row className="align-items-center">
								<Col lg={3} className="align-items-center">
									{/* <IMDBLogo className="p-0 m-0 w-100 h-100" /> */}
									<h3 className="m-0">MESMovies</h3>
								</Col>
								<Col lg={9} className="my-auto">
									<Autocomplete
										autoComplete={true}
										id="combo-box-demo"
										options={this.state.movies}
										noOptionsText="Search found no results"
										getOptionLabel={(option) => option.title}
										renderInput={(params) => (
											<TextField
												{...params}
												size="small"
												label="Search MESMovies"
												variant="outlined"
												onChange={(e) => this.handleChange(e)}
												onClick={(e) => this.handleChange(e)}
											/>
										)}
									/>
								</Col>
							</Row>
						</Col>
						<Col className="d-flex align-items-center justify-content-end">
							<Row className="align-items-center w-100 justify-content-end">
								<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
									<p className="p-0 m-0 mr-5">Home</p>
								</Link>
								<p
									style={{ cursor: 'pointer' }}
									className="p-0 m-0 mr-5"
									onClick={() => {
										this.setState({ showAddMovie: true });
									}}
								>
									Add a Movie
								</p>
								<Button
									style={{
										width: '20%',
										backgroundColor: COLORS.primary,
										color: 'black',
										border: `1px solid ${COLORS.primary}`
									}}
								>
									Login
								</Button>
							</Row>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}

export default IMDBNavbar;
