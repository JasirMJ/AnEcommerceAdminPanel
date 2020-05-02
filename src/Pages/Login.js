import React, { Component } from 'react';
import axios from 'axios'
import { 
    // BoxLoading,
    // CircleLoading,
    // CommonLoading,
    LoopCircleLoading,
    // SemipolarLoading 
} from 'react-loadingg';

import {
  Redirect
} from "react-router-dom";

import '../assets/css/login.css'

import Base from './Config'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class componentName extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem('ecommerce_token')
    // const token = null
    let loggedIn=true
    if(token == null){
        loggedIn=false
    }
    this.state = {
        password : "",
        username : "",
        errors: {},
        fields: {},
        loader:false,
        loggedIn:false,
    }
    this.onChange = this.onChange.bind(this)
    this.submitform = this.submitform.bind(this)
}
onChange(e){
    this.setState ({
        [e.target.name]:e.target.value
    })
}

handleValidation(errors){
    let formIsValid = true;

    //Name
    if(!this.state.username){
       formIsValid = false;
       errors["username"] = "Username cannot be empty";
    }

    if(!this.state.password){
       formIsValid = false;
       errors["password"] = "Password cannot be empty";
    }

   this.setState({errors: errors});
   return formIsValid;
}

submitform(e){
    let errors = {};

    if (!this.handleValidation(errors)){
        return 0
    }
    // let errors = {};
    this.setState({loader:true});

    const {username,password} = this.state
    e.preventDefault()
    // const url = 'http://54.147.239.246/login/' // snit login
    var bodyFormData = new FormData();
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);
    // bodyFormData.append('image', imageFile);  // for image uploads

    axios.post(
        Base.url + 'login/',
        bodyFormData
    )
    .then(response =>{
        console.log('response ',response.data);
        

        if(response.data.user_type=="super_user"){
            if(response.data.Token){
                this.setState({
                    loggedIn : true,
                },()=>{
                    localStorage.setItem('ecommerce_token',response.data.Token)
                })
            }else{
                alert('Error : logging user')
            }
        }else{
            console.log('No acess : ', "sorry! ..");
            alert("error")
            // NotificationManager.error('No acess ', "Sorry! ..", 3000)
        }
        // alert(response.data.Message)
        this.setState({loader: false});
    })
    .catch(error=>{
        console.log('Error occuerd :',error.response);
        // alert(error.response.data['non_field_errors'][0]);
        // let errors ={}
        
        // errors["login"] = error.response.data['non_field_errors'][0] && "Invalid user"
        // console.log(errors);
        // this.setState({
        //     errors: errors,
        //     loader:false
        
        // });
        
    })
}

// addAdminToken=(token)=>{
//     // console.log("userid ",token)
//     var bodyFormData = new FormData();
//     bodyFormData.set('token', token);
//     axios.post(
//         Base.url + 'AdminNotificationTokens/',
//         bodyFormData,
//         {
//             headers: {
//                 'Authorization': 'Token ' + localStorage.getItem('Token'),
//             }
//         }
//     )
//     .then(response =>{
//         // console.log('response : ',response.data.Message);
//         // console.log('response : ',response.data.Message);
//     })
//     .catch(error=>{
//         console.log(error);
//     })
// }

render(){
    if(this.state.loggedIn){
        return <Redirect to='/' />
    }
    return (
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
          {/* <NotificationContainer/> */}
            
            

            {/* Username : <input type="text" name="username" value={this.state.username} onChange={this.onChange}/><br/>
            Password : <input type="text" name="password" value={this.state.password} onChange={this.onChange}/><br/> */}
            <input className="form-control text-center" placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.onChange} />
            <span style={{color: "red"}}>{this.state.errors["username"]}</span>
            <br/>
            
            <input className="form-control text-center" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
            <span style={{color: "red"}}>{this.state.errors["password"]}</span>
            {/* <button onClick={this.submitform} >login</button> */}
            <br/>
            {/* <CircleLoading />
            <CommonLoading /> */}
            {this.state.loader?<LoopCircleLoading color={'#8c80ff'}  >loading</LoopCircleLoading>:<button type="button" onClick={this.submitform} className="btn btn-primary">Sign in  </button>}
            {/* <button type="button" onClick={this.submitform} className="btn btn-primary opacity-7"><LoopCircleLoading size={'small'} style={{height:30,width:30}} color={'red'} /></button> */}
            
            <br/>
            {/* <i className="text-light"><small>Forgot password?</small></i> */}
            <br></br>
            <span style={{color: "red"}}>{this.state.errors["login"]}</span>
          </div>
            
        </div>
    )
}
}
