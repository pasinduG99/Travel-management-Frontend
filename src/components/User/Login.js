import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            Userpwd: [],
            pwd:"",
            Email: "",
            Password : ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            email : this.state.Email,
            password : this.state.Password,

        }
        console.log(user);
        axios.get(`http://localhost:8070/user/view/${user.email}`)
        .then((res) => {
            this.setState({
                User : res.data
            })
            console.log(this.state.User);
            this.setState({
                pwd : this.state.User[0].Password
            })
            console.log(this.state.pwd);
            if(this.state.pwd == user.password) {
                alert('Login successfully')
                window.location = "/";
            }else{
                alert('Invalid Login')
            }
        }).catch((err) => console.log(err)); 
        
    }

    onLogin(){
        window.location = "/userLog";
    }

    onReg(){
        window.location = "/userReg";
    }

    render() {
        return (
            <div>
                <div className = "mainLoginDiv framelog"> 
                
                   <button onClick={this.onLogin} className="btnLog"> Sign In </button>
                   <button onClick={this.onReg} className="btnReg"> Sign Up </button>
                    
                    <div className = "LoginDiv2">
                           
                       <div className= "LoginHead">
                            <h1>Welcome Back!</h1>
                            <h4>Please Login to access your account</h4>
                        </div> 
                <section class="vh-50">
                        
                             <div class="col-md- col-lg-5 col-xl-6 offset-xl-1">
                        <form>
                             {/* Employee ID input */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form1Example13">User Email<span class="text-danger">*</span></label>                              
                                <input type="text" id="form1Example13" name = {"Email"} onChange = {this.onChange}  class="form-control form-control-lg" />
                             </div>

                            {/* Password input */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form1Example23">Password<span class="text-danger">*</span></label>
                                <input type="password" id="form1Example23" name = {"Password"} onChange = {this.onChange}  class="form-control form-control-lg" />
                             </div>
                                                     

                            {/* Submit button */}
                            <button type="submit" onClick={this.onSubmit}  class="LoginBtn">Login Account</button>

                        </form> 
                    </div>
                   
                    </section>
                    </div>
                  
                 </div>  

                 
                
             </div>
        )
    }
}