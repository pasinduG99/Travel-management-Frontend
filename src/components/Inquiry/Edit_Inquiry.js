import React, { Component } from "react";
import axios from "axios";
import './addInquiry.css';
//import "bootstrap/dist/css/bootstrap.min.css";

export default class EditInquiry extends Component {
    constructor(props) {
        super(props);
        
        this.state = { inquiry:[],
            id:"",
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:"" 
        }
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {

        const ID = "625ab1c57c5b530cf1cefd3e";

        console.log(ID);

        axios.get(`http://localhost:8070/inquiry/view`)
        .then((res) => {
            this.setState({
                inquiry : res.data
            })
            console.log(this.state.inquiry);
        }).catch((err) => console.log(err));       
    };

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    onEdit(){
        const inquiry = {  
            name : this.state.name, 
            nic : this.state.nic,
            phone : this.state.phone,
            email : this.state.email,
            inq : this.state.inq    
        }

        axios
        .put(`http://localhost:3001/inquiry/edit/${this.props.match.params.id}`, inquiry)
        .then(() => alert("Inquiry Updated"))
        .catch((err) =>console.log(err));

        window.location = "/viewInquiry";
    }

    render() {
        return (
            <div className ="container"> 
            <div className="RegjH1">
              <h1>Inquiry</h1>
              <h1>Edit Inquiry Form</h1>
                                     
                    <form className = "RegjForm">
                        <div class="form-group-doc">
                            <label for="doctorid">Name : </label> <br/>
                            <input type="text" class="form-control-doc" id="name" onChange={this.onChange} placeholder=""/>
                        </div>

                        <div class="form-group-doc">
                            <label for="doctorid">NIC : </label> <br/>
                            <input type="text" class="form-control-doc" id="nic" onChange={this.onChange} placeholder=""/>
                        </div>

                        <div class="form-group-doc">
                            <label for="doctorid">Phone No : </label> <br/>
                            <input type="text" class="form-control-doc" id="phone" onChange={this.onChange} placeholder=""/>
                        </div>

                        <div class="form-group-doc">
                            <label for="doctorid">Email : </label> <br/>
                            <input type="text" class="form-control-doc" id="email" onChange={this.onChange} placeholder=""/>
                        </div>

                        <div class="form-group-doc">
                            <label for="doctorid">Inquiry : </label> <br/>
                            <input type="text" class="form-control-doc" id="inq" onChange={this.onChange} placeholder=""/>
                        </div>

                        <button type="submit" class="btn-primary-doc" onClick={this.onEdit}>Update</button>

                    </form>  
                                  
      </div>
     </div> 
            
        )            
            
    }
}