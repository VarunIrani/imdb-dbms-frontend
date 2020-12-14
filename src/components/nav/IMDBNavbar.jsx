import React, { Component } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { COLORS } from '../../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AddMovie from './AddMovie';
class IMDBNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddMovie: false
		};
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
							<Row>
								<Col lg={3} className="align-items-center">
									{/* <IMDBLogo className="p-0 m-0 w-100 h-100" /> */}
									<h3 className="m-0">MESMovies</h3>
								</Col>
								<Col lg={9} className="my-auto">
									<InputGroup>
										<FormControl
											placeholder="Search for Movies, TV Shows and more.."
											aria-label="Search"
											aria-describedby="search-bar"
										/>
										<InputGroup.Append>
											<Button
												style={{
													backgroundColor: COLORS.primary,
													border: `1px solid ${COLORS.primary}`
												}}
											>
												<FontAwesomeIcon icon={faSearch} />
											</Button>
										</InputGroup.Append>
									</InputGroup>
								</Col>
							</Row>
						</Col>
						<Col className="d-flex align-items-center justify-content-end">
							<Row className="align-items-center w-100 justify-content-end">
								<p className="p-0 m-0 mr-5">Home</p>
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
