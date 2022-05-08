import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user:[],
            email: "",
            password: "",
            show: false,
        }
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = () => {

        const user = {
            email:this.state.email,
            password:this.state.password
        }
        console.log(user);

        axios.post("http://localhost:8070/user/log", user)
        .then((res)=> { alert(res.data.message);})
        .catch((err) => {alert(err)})
        .finally((res)=> console.log(res.data.data));
    }

    render() {
        return (
            <>
                <div className=""> <br/>

                    <Card className="card">                        
                        <Card.Header className="text-center addHeader">User Login</Card.Header>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control type="email" id="email" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control type="password" id="password" onChange={(e) => this.onChange(e)} placeholder="" />
                                </Form.Group>

                            </Form>

                            <div className="d-grid gap-2">
                                <Button variant="danger" size="lg" className="btnAddCancel" onClick={this.clickCancel} >Cancel</Button>
                                <Button type="submit" variant="success" size="lg" onClick={this.onSubmit}>Login</Button>
                            </div>

                        </Card.Body>
                    </Card> <br/>

                </div>
            </>
        )
    }
}