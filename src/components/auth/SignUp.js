import React,{useState} from 'react';
import { Container, Form, Modal, Row, Col,Button,Alert } from 'react-bootstrap';
import { COLORS } from '../../colors';

const SignUp = (props) => {

  const [alert,setAlert]=useState(false)
  const [state,setState]=useState({
    name:'',
    email:'',
    password:'',
    loginData:{name:'',email:'',password:''}
  })

  const setLocalData=()=>{
    localStorage.setItem('user',state.loginData.email)
  }

  const handleSubmit=()=>{

    const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		fetch('https://mesmovies.herokuapp.com/sign-up', {
			method: 'POST',
			mode: 'cors',
			headers,
			body: JSON.stringify(state.loginData)
		})
    .then((res) => {
      res.json()
      // console.log(res)
      if(res.status >= 200 && res.status<205){
        console.log("success")
        setAlert(true)
        setLocalData()
        console.log(localStorage.getItem('user'))
      }
      else{
        console.log("error")
      }
    })
  }

  const handleChange=(input,evt) =>{
    const value = evt.target.value;
    const loginData = state.loginData;
		loginData[input] = value;
  setState({
    ...state,
    [evt.target.name]: value,
    loginData:loginData
  });
  console.log(state.loginData)
	}
    
    return ( 
        
      <>
      {alert?
      <Alert  variant="success">
      You are signed in successfully!
      </Alert>:
					<Container className="justify-content-center">
          <Row>
					<Col>
						<Form.Label>Full name</Form.Label>
						<Form.Control
              type="text"
							onChange={(e) => handleChange('name', e)}
							placeholder="Enter your name"
							defaultValue={state.name}
						/>
					</Col>
				</Row>
						<Row>
					<Col>
						<Form.Label>Email</Form.Label>
						<Form.Control
							onChange={(e) => handleChange('email', e)}
							placeholder="Enter email"
							defaultValue={state.email}
						/>
					</Col>
				</Row>
        <Row>
					<Col>
						<Form.Label>Password</Form.Label>
						<Form.Control
              type="password"
							onChange={(e) => handleChange('password', e)}
							placeholder="Enter password"
							defaultValue={state.password}
						/>
					</Col>
				</Row>
						<Row className="justify-content-end mt-3">
							<Button
								disableElevation
								variant="contained"
								style={{ background: COLORS.primary, color: COLORS.textOnPrimary }}
								onClick={()=>handleSubmit()}
							>
								Submit
							</Button>
						</Row>
					</Container>
      }
</>
      
     );
}
 
export default SignUp;