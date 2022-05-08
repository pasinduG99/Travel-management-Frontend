import React from "react";
import axios from "axios";
import '../../Styles/ViewInquiry.css';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';



export default class viewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:[],
            show: false,
            Id:""
        }        
    };

    componentDidMount() {

        axios.get("http://localhost:8070/user/view")
        .then((res) => {
            this.setState({
                user : res.data
            })
            console.log(this.state.user);
        }).catch((err) => console.log(err));       
    };

    navDelete = (id) => {
        this.handleClose();

        axios.delete(`http://localhost:8070/User/delete/${id}`)
        .then(() => alert("user deleted successfully"))
        .catch((err) => console.log(err))
        .finally(() => window.location = "/viewuser");
    }

    goAddInquiry = () => {
        window.location = "/adduserreg";
    };

    navEdit = (id) => {
        window.location = `/edituserreg/${id}`;
    };

    handleClose = () => {this.setState({show:false})};
    handleShow = (id) => {this.setState({show:true, Id:id})};

    render() {
        return (
            <>
                <div> <br/>
                    {/* <h1>View user</h1> */}

                    

                    <Table bordered hover size="lg" className="table-user-view">
                        <thead  className="table-secondary">
                            <tr>
                            <th>Email</th>
                            <th>Name</th>
                            
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.user.map((item,key) =>(
                            <tr>
                                <td> {item.Email} </td>
                                <td> {item.Name} </td>
                                
                                
                                <td className="tdInqView"> <Button variant="warning" onClick={()=>{this.navEdit(item._id)}} class="btnInqUp" > Update </Button></td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                      <Modal.Header>
                        <Modal.Title>User Deleting</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> Click Delete to confirm delete user</Modal.Body>
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