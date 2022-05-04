import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            FirstName : "",
            LastName : "",            
            Email : "",
            Phone : "",
            Password : "",
            ReEnterPassword : "",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
        const user = {  
            name : this.state.FirstName + " " + this.state.LastName,
            num: this.state.Phone,
            email : this.state.Email,
            password : this.state.Password,
            ReEnterPassword : this.state.ReEnterPassword,}
        
            console.log(user);

            if(this.state.Password == this.state.ReEnterPassword){
                //alert("Password Matched!")
                axios.post('http://localhost:8070/user/add', user)
                .then(()=> { alert("User Register successfully..");})
                .catch((err) => {alert(err)});
                window.location = "/userLog";
           
            }else{
                alert("Password Not Matched!");
            }
    }

    onLogin(){
        window.location = "/userLog";
    }

    onReg(){
        window.location = "/userReg";
    }

    render() {
        return (
            <div className ="container framereg"> 
               <div className="RegjH1">
                   <button onClick={this.onLogin} className="btnLog"> Sign In </button>
                   <button onClick={this.onReg} className="btnReg"> Sign Up </button>

                 <h1>User Registration</h1>
                 <h1>Register Form</h1>
                                        
                        <form className = "RegjForm">
                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m">First name <span class="text-danger">*</span></label>
                                            <input type="text" id={"FirstName"}  name = {"FirstName"} onChange = {this.onChange}  class="form-control form-control-lg" />

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n">Last name <span class="text-danger">*</span></label>
                                            <input type="text" id={"LastName"}  name = {"LastName"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                </div>

                                 <div class="row">
                                
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Email</label>
                                            <input type="email" id={"Email"}  name = {"Email"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                </div>

                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Phone</label>
                                            <input type="text" id={"Phone"}  name = {"Phone"}  onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        
                                 </div>

                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Password</label>
                                            <input type="password" id={"Password"}  name = {"Password"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Re-Enter Password</label>
                                            <input type="password"  id={"ReEnterPassword"}  name = {"ReEnterPassword"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                 </div>

                                <div class="btn" align = "center">
                                        <button  type="button"  class="btn1">Reset all</button>
                                        <button type="button" onClick={this.onSubmit} 
                                         class="btn2">Submit form</button>
                                </div>

                         </form>  
                                     
            </div>
        </div> 
            
        )            
            
    }
}