
import React from "react"
import { Link , useNavigate} from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";

function BasicExample() {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {login,googleSignIn} = useUserAuth();
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        try{
            await login(email,password);
            navigate("/home")
        }
        catch(err){
            setError(err.message);
        }
    }
    const handleGoogleSignIn = async(e)=>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home")
        }
        catch(err){
            setError(err.message);
        }
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Login in</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group>
        <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Link to="/signup">register an account ?</Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;