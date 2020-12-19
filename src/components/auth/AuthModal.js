import React,{useState} from 'react';
import { Container, Form, Modal, Row, Col,Button } from 'react-bootstrap';
import { COLORS } from '../../colors';
import SignUp from './SignUp';
import Login from './Login'

const AuthModal = (props) => {

  const [signUp,setSignUp]=useState(false)
    
    return ( 
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
        {signUp?"Sign Up":"Login"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {signUp?<SignUp/>:<Login/>}
        <p className="text-center mt-3" style={{cursor:'pointer'}} onClick={()=>setSignUp(!signUp)}>{signUp?"Already have an account? Login":"Don't have an account? Create one"}</p>
      </Modal.Body>
    </Modal>
     );
}
 
export default AuthModal;