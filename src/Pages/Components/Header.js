import React, { Component } from 'react'
// import axios from 'axios'
// import Base from './Config'
import logo from '../../assets/images/icon/logo.png'
import Navigation from "./Navigation"
import axios from 'axios'
import Base from '../Config'
import {
    Link, 
    Redirect
} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {NotificationContainer, NotificationManager} from 'react-notifications';

class DropDownMenu extends Component {
  
    // constructor() {
    //     super();
    //     const token = localStorage.getItem('ecommerce_token')
    //     // const token = null
    //     let loggedIn=true
    //     if(token == null){
    //       loggedIn=false
    //     }
    //     this.state = {
    //       loggedIn,
    //       loggedOut:false
    //     };
        
    //     this.logout = this.logout.bind(this)
    //   }
    //   submit = () => {
    //     confirmAlert({
    //       title: 'Logging out',
    //       message: 'Are you sure ?',
    //       buttons: [
    //         {
    //             label: 'Yes',
    //             onClick: () => {
    //             this.setState({
    //                 loggedIn:false,
    //                 loggedOut:true
    //             })
    //             // var userId = localStorage.getItem('userId')
    //             // console.log("userId : ",userId)
    //             // this.removeAdminToken(userId)
    //             localStorage.removeItem('ecommerce_token')

    //             }
    //         },
    //         {
    //             label: 'No',
    //             onClick: () => {
    //               //nothing
    //             }
    //         }
    //       ]
    //     });
    //   }

    //   removeAdminToken=(token)=>{
    //     // console.log('token ',token);
        
    //     // return false 
    //     axios.delete(
    //         Base.url + 'AdminNotificationTokens/?token='+token,
    //         {
    //             headers: {
    //                 'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
    //             }
    //         }
    //     )
    //     .then(response =>{
    //         // console.log('response : ',response.data.Message);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }

    // logout(){
    //     this.submit()
    // }

    render() {
    // if(this.state.loggedOut===true){
    //     return <Redirect to='/login'/>  
    // }
    // if(this.state.loggedIn === false){
    //     NotificationManager.info('Info : ','Please login first', 5000)

    //     return <Redirect to='/login'/>
    // }


    return (
        <div>
        <i className="fas fa-sign-out-alt fa-2x logout "  onClick={this.logout} ></i>
        </div>
    );
    }
}

export default class componentName extends Component {
    
    render() {
        return (
            <>
            {/* HEADER MOBILE */}
            <header className="header-mobile ">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                <div className="header-mobile-inner">
                    <a className="logo" href="index.html">
                    <img src={logo} alt="CoolAdmin" />
                    </a>
                    <button className="hamburger hamburger--slider" type="button" onClick={()=>console.log("clicked menu")}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner" />
                    </span>
                    </button>
                </div>
                </div>
            </div>
            </header>
            {/* END HEADER MOBILE */}
            <Navigation/>

            </>
        );
    }
}