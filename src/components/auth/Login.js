import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { COLORS } from '../../colors';

const Login = () => {
	const [ alert, setAlert ] = useState(null);
	const [ state, setState ] = useState({
		name: '',
		email: '',
		password: '',
		loginData: { email: '', password: '' }
	});

	const setLocalData = (data) => {
		localStorage.setItem(
			'user',
			JSON.stringify({ id: data.message.userId, email: state.loginData.email, admin: data.message.admin })
		);
	};

	const handleSubmit = () => {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		fetch('https://mesmovies.herokuapp.com/sign-in', {
			method: 'POST',
			mode: 'cors',
			headers,
			body: JSON.stringify(state.loginData)
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status >= 200 && res.status < 205) {
					setAlert({success: true});
					setLocalData(res);
					window.location.reload();
				} else {
					setAlert({success: false});
				}
			});
	};

	const handleChange = (input, evt) => {
		const value = evt.target.value;
		const loginData = state.loginData;
		loginData[input] = value;
		setState({
			...state,
			[evt.target.name]: value,
			loginData: loginData
		});
	};

	return (
		<React.Fragment>
			{alert !== null ? (
				<Alert id="auth-alert" variant={alert.success ? "success" : "danger"}>{
					alert.success ? "You are logged in successfully!" : "Invalid Credentials"
				}</Alert>
			) : (
				<Container className="justify-content-center">
					<Row>
						<Col>
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={(e) => handleChange('email', e)}
								placeholder="Enter email"
								defaultValue={state.email}
								id="email-input"
							/>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col>
							<Form.Label>Password</Form.Label>
							<Form.Control
								id="password-input"
								type="password"
								onChange={(e) => handleChange('password', e)}
								placeholder="Enter password"
								defaultValue={state.password}
							/>
						</Col>
					</Row>
					<Row className="justify-content-end mt-3">
						<Button
							id="submit-login"
							disableElevation
							variant="contained"
							style={{ background: COLORS.primary, color: COLORS.textOnPrimary }}
							onClick={() => handleSubmit()}
						>
							Submit
						</Button>
					</Row>
				</Container>
			)}
		</React.Fragment>
	);
};

export default Login;
