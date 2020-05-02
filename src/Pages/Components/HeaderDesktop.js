import React, { Component } from 'react'
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
  
    constructor() {
        super();
        const token = localStorage.getItem('ecommerce_token')
        let loggedIn=true
        if(token == null){
          loggedIn=false
        }
        this.state = {
          loggedIn,
          loggedOut:false
        };
        
        this.logout = this.logout.bind(this)
      }
      submit = () => {
        confirmAlert({
          title: 'Logging out',
          message: 'Are you sure ?',
          buttons: [
            {
                label: 'Yes',
                onClick: () => {
                this.setState({
                    loggedIn:false,
                    loggedOut:true
                })
                // var userId = localStorage.getItem('userId')
                // console.log("userId : ",userId)
                // this.removeAdminToken(userId)
                localStorage.removeItem('ecommerce_token')

                }
            },
            {
                label: 'No',
                onClick: () => {
                  //nothing
                }
            }
          ]
        });
      }

      removeAdminToken=(token)=>{
        // console.log('token ',token);
        
        // return false 
        axios.delete(
            Base.url + 'AdminNotificationTokens/?token='+token,
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        )
        .then(response =>{
            // console.log('response : ',response.data.Message);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    logout(){
        this.submit()
    }

    render() {
    if(this.state.loggedOut===true){
        return <Redirect to='/login'/>  
    }
    if(this.state.loggedIn === false){
        NotificationManager.info('Info : ','Please login first', 5000)

        return <Redirect to='/login'/>
    }
    const menu = {
        // color: "white",
        // backgroundColor: "DodgerBlue",
        // padding: "10px",
        // fontFamily: "Arial"
        };

    return (
        <div>
        {/* <i className="fas fa-sign-out-alt fa-2x logout " onClick={this.logout} ></i> */}
        <i className="zmdi zmdi-sign-in zmdi-hc-2x"  onClick={this.logout} ></i>
        </div>
    );
    }
}
export default class HeaderDesktop extends Component {
    constructor(props){
        super(props)
    }

    clickHandler=(e)=>{
        console.log('clicked ',this.props.searchbutton);
        let key=this.props.searchbutton
        // if([e.target.name]==['order']){
        //     key="order"
        // }
        console.log('search of',key);
        
    }
    render() {
        // console.log('search of ',this.props.searchbutton);
        return (
            <>
            {/* HEADER DESKTOP */}
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="header-wrap">
                    <div className="form-header">
                        <input className="au-input au-input--xl" type="text" name="search" placeholder={this.props.searchplaceholder?this.props.searchplaceholder:"search ..."} />
                        <button className="au-btn--submit"  onClick={this.clickHandler}>
                        <i className="zmdi zmdi-search" />
                        </button>
                    </div>
                    <div className="header-button">
                        <div className="noti-wrap">

                        {/* <div className="noti__item js-item-menu">
                            <i className="zmdi zmdi-comment-more" />
                            <span className="quantity">1</span>
                        </div>

                        <div className="noti__item js-item-menu">
                            <i className="zmdi zmdi-email" />
                            <span className="quantity">1</span>
                        </div> */}

                        <div className="noti__item js-item-menu ">
                                <Link href="#" to="/profile" >
                                    <i className="zmdi zmdi-account" />
                                </Link>
                            {/* <span className="quantity">3</span> */}
                        </div>
                        <div className="account-item ">
                            <DropDownMenu/>
                        </div>

                        </div>
                        <div className="account-wrap">
                             {/* <div className="media align-items-center">
                                    <Link href="#" to="/profile" className="avatar avatar-sm rounded-circle">
                                      <i className="fa fa-user" aria-hidden="true"></i>
                                    </Link>
                                    
                                    <a href="#" className="nav-link pr-0 media-body ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm  font-weight-bold">
                                        <DropDownMenu/>
                                        </span>
                                    </a>
                                </div> */}
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* HEADER DESKTOP */}
            </>
        )
    }
}
