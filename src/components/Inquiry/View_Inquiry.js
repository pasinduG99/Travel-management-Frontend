import React from "react";
import axios from "axios";
import '../../Styles/ViewInquiry.css';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';



export default class ViewInquiry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inquiry:[],
            show: false,
            Id:""
        }        
    };

    componentDidMount() {

        axios.get("http://localhost:8070/inquiry/view")
        .then((res) => {
            this.setState({
                inquiry : res.data
            })
            console.log(this.state.inquiry);
        }).catch((err) => console.log(err));       
    };

    navDelete = (id) => {
        this.handleClose();

        axios.delete(`http://localhost:8070/inquiry/delete/${id}`)
        .then(() => alert("Inquiry deleted successfully"))
        .catch((err) => console.log(err))
        .finally(() => window.location = "/viewInquiry");
    }

    goAddInquiry = () => {
        window.location = "/addInquiry";
    };

    navEdit = (id) => {
        window.location = `/editInquiry/${id}`;
    };

    handleClose = () => {this.setState({show:false})};
    handleShow = (id) => {this.setState({show:true, Id:id})};

    render() {
        return (
            <>
                <div> <br/>
                    {/* <h1>View Inquiries</h1> */}

                    <Button className="btnInqAdd"variant="secondary" size="lg" onClick={this.goAddInquiry}>  Create New Inquiry </Button> <br/> <br/>

                    <Table bordered hover size="lg" className="table-inq-view">
                        <thead  className="table-secondary">
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan={2}>Inquiry Details</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.inquiry.map((item,key) =>(
                            <tr>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td colSpan={2}> {item.inquiry}</td>
                                <td className="tdInqView"> <Button variant="danger" onClick={() => this.handleShow(item._id)} class="btnInqDel"> Delete </Button></td>
                                <td className="tdInqView"> <Button variant="warning" onClick={()=>{this.navEdit(item._id)}} class="btnInqUp" > Update </Button></td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                      <Modal.Header>
                        <Modal.Title>Inquiry Deleting</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> Click Delete to confirm delete Inquiry</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>  Cancel </Button>  
                        <Button variant="danger" onClick = {()=>{this.navDelete(this.state.Id)}}> Delete </Button>
                      </Modal.Footer>
                    </Modal>
                    
                </div>
                
            </>
            
        )
    }
}