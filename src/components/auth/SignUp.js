import React,{useState} from 'react';
import { Container, Form, Modal, Row, Col,Button } from 'react-bootstrap';
import { COLORS } from '../../colors';

const SignUp = (props) => {

  const [signUp,setSignUp]=useState(false)
  const [state,setState]=useState({
    name:'',
    email:'',
    password:'',
    loginData:{name:'',email:'',password:''}
  })

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
        if(res.status === 201)
          console.log("success")
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
        
      <Container className="d-flex justify-content-center">
      <Form>

  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={(e)=>handleChange('name',e)} value={state.name}/>
    <Form.Text className="text-muted">
      Your name will appear on your reveiws.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChange('email',e)} value={state.email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>handleChange('password',e)} value={state.password}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me updated on new movies" />
  </Form.Group>
  <Row className="justify-content-center">
  <Button color={COLORS.primary} type="submit" style={{backgroundColor:COLORS.primary, color:'black'}} onClick={()=>handleSubmit()}>
    Sign Up
  </Button>
  </Row>
</Form>
</Container>
      
     );
}
 
export default SignUp;