import React, { Component, PureComponent } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import {
    Link
} from "react-router-dom";
import "./product.css"

import Base from './Config'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import ProductsComponent from "./AdditionalComponents/Products"

export default class Products extends Component {
  constructor(){
    super()
    this.state={
        data:[],
        next:null,
        prev:null,
        loading:true,
    }
  }

  loading=(args)=>{
      this.setState({
          loading:args
      })
  }

  componentDidMount(){
      this.fetchAllData()
  }

  next=()=>{
      this.loading(true)
      axios.get(
        this.state.next,
        { 
            headers: { 
              'Authorization': 'Token '+localStorage.getItem('ecommerce_token'),
            } 
        }
      ).then(response =>{
        this.setState({
          data:response.data.results,
          next:response.data.next,
          prev:response.data.previous,
          loading:false, 

        })
      })
      .catch(error =>{
          NotificationManager.error('Error : ', error, 3000);
      })
  }

  prev=()=>{
      this.loading(true)
      axios.get(
        this.state.prev,
        { 
            headers: { 
                'Authorization': 'Token '+localStorage.getItem('ecommerce_token'),
            } 
        }
      ).then(response =>{
        this.setState({
          data:response.data.results,
          next:response.data.next,
          prev:response.data.previous,
          loading:false,
        })
      })
      .catch(error =>{
          NotificationManager.error('Error : ', error, 3000);
      })
  }

  fetchAllData=()=>{
    axios.get(
        Base.url + 'items/?attach_stock=0',
        {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
            }
        }
    ).then(response => {
        console.log('Response all :', response);
        // console.log('Response all :', response.data.results);
        this.setState({
          data: response.data.results,
          next: response.data.next,
          prev: response.data.previous,
        })
        

    }).catch(error => {
        console.log('Error loading quotation count: ', error);
        NotificationManager.error('Error : ', error, 3000);
    })

  }
    
    render() {
        return (
            <div>
  <div className="page-wrapper">
    <Header/>
    {/* <Navigation/> */}
    
    {/* PAGE CONTAINER */}
    <div className="page-container">
      <HeaderDesktop searchplaceholder="Search product" searchbutton="product"/>
      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
          <PageHead name="Products"/>
          
        <div class="row mt-3">
         
            {this.state.data.map((item,index)=><ProductsComponent data={item} key={index}/>)}

        </div>
          </div>
        </div>
      </div>
      {/* END MAIN CONTENT */}
      {/* END PAGE CONTAINER */}
    </div>
  </div>
  
</div>

        )
    }
}
