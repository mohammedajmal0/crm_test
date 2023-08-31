
import React , { useState} from "react"
import { Link , useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {SignUp} = useUserAuth();
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        try{
            await SignUp(email,password);
            navigate("/Auth")
        }
        catch(err){
            setError(err.message);
        }
    }
  return (
    
    <Form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group>
        <GoogleButton></GoogleButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Link to="/Auth">Already have an account ?</Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;