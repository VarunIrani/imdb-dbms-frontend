import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { COLORS } from '../../colors';
import AddMovie from './AddMovie';
import AuthModal from '../auth/AuthModal';
import SearchPage from '../movie/SearchPage';
import { withRouter } from 'react-router-dom';
import { Avatar, Tooltip } from '@material-ui/core';

class IMDBNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddMovie: false,
			showLogin: false,
			showSearch: false,
			movies: [],
			search: '',
			initials: null,
			email: '',
			showLogout: false,
			location: '',
			searchURL: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		let initials = JSON.parse(localStorage.getItem('user'));
		if (initials != null) {
			this.setState({
				email: initials.email,
				initials: initials.email[0].toUpperCase()
			});
		}
	}

	updateNavbar() {
		let initials = JSON.parse(localStorage.getItem('user'));
		if (initials != null) {
			this.setState({
				email: initials.email,
				initials: initials.email[0].toUpperCase()
			});
			this.render();
		}
	}

	goToSearch() {
		const loc = this.props.location.pathname;
		const searchURL = this.props.location.search;
		if (loc !== '/search') {
			this.setState({
				location: loc,
				searchURL: searchURL
			});
		}
		this.props.history.push('/search');
	}

	leaveSearch() {
		if (this.state.location !== '') this.props.history.push(this.state.location + this.state.searchURL);
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
				if (e.target.value) {
					if (e.target.value.length === 0) {
						this.setState({
							showSearch: false
						});
						this.leaveSearch();
					} else {
						this.setState({
							movies: res
								.filter((e, i) => i < 5)
								.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)),
							showSearch: true,
							search: e.target.value
						});
						this.goToSearch();
					}
				}
			});
	}
	render() {
		const user = JSON.parse(localStorage.getItem('user'));
		const loc = this.props.location.pathname;
		return (
			<React.Fragment>
				<AddMovie
					onHide={() => {
						this.setState({ showAddMovie: !this.state.showAddMovie });
					}}
					show={this.state.showAddMovie}
				/>
				<AuthModal
					onHide={() => {
						this.setState({ showLogin: !this.state.showLogin });
						this.updateNavbar();
					}}
					show={this.state.showLogin}
				/>
				<div className="px-5 py-4">
					<Row>
						<Col>
							<Row className="align-items-center">
								<Col lg={3} className="align-items-center">
									{/* <IMDBLogo className="p-0 m-0 w-100 h-100" /> */}
									<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
										<h3 className="m-0">MESMovies</h3>
									</Link>
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
								{user ? user.admin ? (
									<p
										style={{ cursor: 'pointer' }}
										className="p-0 m-0 mr-5"
										onClick={() => {
											this.setState({ showAddMovie: true });
										}}
									>
										Add a Movie
									</p>
								) : null : null}

								{this.state.initials === null ? (
									<React.Fragment />
								) : (
									<Tooltip title={this.state.email} aria-label="add">
										<Avatar className="mr-5" style={{ backgroundColor: COLORS.secondary }}>
											{this.state.initials}
										</Avatar>
									</Tooltip>
								)}

								{this.state.initials === null ? (
									<Button
										style={{
											width: '20%',
											backgroundColor: COLORS.primary,
											color: 'black',
											border: `1px solid ${COLORS.primary}`,
											cursor: 'pointer'
										}}
										onClick={() => {
											this.setState({ showLogin: true });
										}}
									>
										Login
									</Button>
								) : (
									<Button
										style={{
											width: '20%',
											backgroundColor: COLORS.primary,
											color: 'black',
											border: `1px solid ${COLORS.primary}`,
											cursor: 'pointer'
										}}
										onClick={() => {
											localStorage.removeItem('user');
											this.setState({
												initials: null,
												showLogout: true
											});
											window.location.reload();
										}}
									>
										Logout
									</Button>
								)}
							</Row>
						</Col>
					</Row>
				</div>
				{this.state.showSearch &&
				loc === '/search' && <SearchPage searchText={this.state.search} movies={this.state.movies} />}
			</React.Fragment>
		);
	}
}

export default withRouter(IMDBNavbar);
