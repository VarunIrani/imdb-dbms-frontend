import React,{useState} from 'react';
import { Container, Form, Modal, Row, Col,Button,Alert } from 'react-bootstrap';
import { COLORS } from '../../colors';

const Login = (props) => {

  const [alert,setAlert]=useState(false)
  const [state,setState]=useState({
    name:'',
    email:'',
    password:'',
    loginData:{email:'',password:''}
  })

  const handleSubmit=()=>{

    const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		fetch('https://mesmovies.herokuapp.com/sign-in', {
			method: 'POST',
			mode: 'cors',
			headers,
			body: JSON.stringify(state.loginData)
		})
      .then((res) => {
        if(res.status === 201){
          console.log("success")
          setAlert(true)
        }
        res.json()
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
      This is a success alert—check it out!
      </Alert>:
      <Container className="d-flex justify-content-center">
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChange('email',e)} value={state.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>handleChange('password',e)} value={state.password} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me updated on new movies" />
  </Form.Group>
  <Row className="justify-content-center">
  <Button color={COLORS.primary} type="submit" style={{backgroundColor:COLORS.primary, color:'black'}} onSubmit={handleSubmit()}>
    Login
  </Button>
  </Row>
</Form>
</Container>
      }
</>
      
     );
}
 
export default Login;