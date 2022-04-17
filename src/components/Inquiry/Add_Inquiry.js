import React, { Component } from "react";
import axios from "axios";
import './addInquiry.css';
//import "bootstrap/dist/css/bootstrap.min.css";

export default class AddInquiry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:"",
            nic:"",
            phone:"",
            email:"",
            inq:"" 
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

          const inquiry = {  
            name : this.state.name, 
            nic : this.state.nic,
            phone : this.state.phone,
            email : this.state.email,
            inquiry : this.state.inq      
          }
          console.log(inquiry);

          axios.post('http://localhost:8070/inquiry/add', inquiry)
          .then(()=> { alert("Iquiry sent successfully..");})
          .catch((err) => {alert(err)});

          window.location = "/viewInquiry";
    }

    render() {
        return (
            <div className ="container, frameAdd"> 
            <div className="RegjH1">
              <h1>Inquiry</h1>
              <h1>Inquiry Form</h1>
                                     
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

                        <button type="submit" class="btn-primary-doc" onClick={this.onSubmit}>Submit</button>

                    </form>  
                                  
      </div>
     </div> 
            
        )            
            
    }
}