import React from 'react';
import {Form, Button} from "react-bootstrap";

const Login = () => {
    return(
        <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}> 
            <Form.Group>
                <Form.Label> Enter Your User</Form.Label>
                <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label> Enter Your Password</Form.Label>
                <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default Login;