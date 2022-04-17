import React, { Component } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.min.css";
import './viewInquiry.css';

export default class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {inquiry:[]}        
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

    navDelete = (id) =>{
        axios.delete(`http://localhost:8070/inquiry/delete/${id}`)
        .then((res) => alert("Appointment deleted successfully"))
        .catch((err) => console.log(err));
        window.location = "/viewInquiry";
    }

    navEdit = (id) =>{
        window.location = `/editInquiry/${id}`;
    }

    navInsert(){
        window.location = `/addInquiry`;
    }

    render() {
        return ( 
            <div className="frameView">
            <div className="DocContainer"> 
                <div className="container"> 

                <button className="inqaddbtn" onClick = {()=>{this.navInsert()}}> Add Inquiry </button>
                <h1> View Inquiries </h1>
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Name </th>
                        <th scope="col"> NIC </th>
                        <th scope="col"> Phone </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Inquiry </th>
                        <th scope="col"> Remove </th>
                        <th scope="col"> Edit </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.inquiry.map((item,key) =>(
                 <tr>
                    <td> {item.name} </td>
                    <td> {item.nic} </td>
                    <td> {item.phone} </td> 
                    <td> {item.email} </td>
                    <td> {item.inquiry}</td>
                    <td> <button onClick = {()=>{this.navDelete(item._id)}} class="btndoc1"> Delete </button></td>
                    <td> <button onClick = {()=>{this.navEdit(item._id)}} class="btndoc2" > Update </button></td>
                    </tr>
                            ))}
             </tbody>
                
                </table>
                
                </div>
           </div>
           </div>
           
         )   
    }
}