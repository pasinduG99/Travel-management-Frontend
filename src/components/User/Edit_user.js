import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'



export default class EditUser extends React.Component {

    constructor(props) {
        super(props);




        this.state = {
            user: [],
            id: "",
            Name: "",
            Email: "",
            Password: "",
            Num: ""
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);

        axios.get(`http://localhost:8070/user/view/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    user: res.data,
                    id: res.data._id,
                    Name: res.data.Name,
                    Email: res.data.Email,
                    Password: res.data.Password,
                    Num: res.data.Num
                })
            })
            .catch((err) => console.log(err.message))

        //  console.log(this.state.user);
    }

    clickCancel = () => {
        window.location = "/viewuser"
    };

    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.handleClose();

        const user = {

            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Num: this.state.Num
        }
        console.log(user);

        axios.put(`http://localhost:8070/user/edit/${this.props.match.params.id}`, user)
            .then((res) => { alert(res.data) })
            .catch((err) => console.log(err))
            .finally(() => window.location = "/viewuser");
    }

    render() {
        return (

            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <h1>Edit user</h1>


                <Card className="card">
                    <Card.Header className="text-center addHeader">Edit user</Card.Header>
                    <Card.Body>
                        <Form>
                        {/*} <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-badge"></i></InputGroup.Text>
                                <Form.Control type="text" id="id" placeholder={this.state.id} readOnly />
        </InputGroup>*/}

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-user"></i></InputGroup.Text>
                                <Form.Control type="text" id="name" onChange={(e) => this.onChange(e)} placeholder={this.state.Name} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-envelope "></i></InputGroup.Text>
                                <Form.Control type="text" id="email" onChange={(e) => this.onChange(e)} placeholder={this.state.Email} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-id-card"></i></InputGroup.Text>
                                <Form.Control type="text" id="nic" onChange={(e) => this.onChange(e)} placeholder={this.state.Password} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa fa-phone"></i></InputGroup.Text>
                                <Form.Control type="text" id="phone" onChange={(e) => this.onChange(e)} placeholder={this.state.Num} />
                            </InputGroup>


                        </Form>


                        <Button variant="danger" className="btnAddDelete" onClick={this.clickDelete} >Delete</Button>
                        <Button type="submit" variant="success" className="btnAddSubmit" onClick={this.handleShow}>Update</Button>

                    </Card.Body>
                </Card> <br />

                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Inquiry Sending</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Click confirm to update your user</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>  Cancel</Button>
                        <Button variant="success" onClick={this.onSubmit}>  Confirm  </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        );
    };
}