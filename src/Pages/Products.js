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
import AddProductModal from './AdditionalComponents/AddProductModal'
import ViewProductModal from './AdditionalComponents/ViewProductModal'

export default class Products extends Component {
  constructor(){
    super()
    this.state={
        data:[],
        next:null,
        prev:null,
        loading:true,

        productModal:false,
        viewProductModal:false,
        viewData:[],
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
        Base.url + 'items/?attach_stock=1',
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

  saveItem=(data)=>{
    console.log('data ',data);
        
    var bodyFormData = new FormData();
    bodyFormData.set('name', data.name);
    bodyFormData.set('description', data.description);
    bodyFormData.set('category', data.category);
    bodyFormData.set('subcategory', data.subcategory);
    bodyFormData.set('brand', data.brand);
    bodyFormData.set('image', data.image);
    bodyFormData.set('rate', data.rate);
    axios.post(
        Base.url + 'items/',
        bodyFormData,
        {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
            }
        }
    )
    .then(response =>{
      console.log('response : ',response);
      if(response.data.Status){
          alert(response.data.Message)
      }else{
          console.log(response.data.Message);
          alert(response.data.Message+" : "+response.data.Error)
      }
      this.fetchAllData()
    })
    .catch(error=>{
        console.log(error);
    })
    
  } 
    edit=(data)=>{
      console.log('edit ',data);
      var bodyFormData = new FormData();

      if(data.image){
        bodyFormData.set('image', data.image);
      }
      bodyFormData.set('id', data.id);
      bodyFormData.set('name', data.name);
      bodyFormData.set('description', data.description);
      bodyFormData.set('category', data.category);
      bodyFormData.set('subcategory', data.subcategory);
      bodyFormData.set('brand', data.brand);
      bodyFormData.set('rate', data.rate);
      axios.put(
          Base.url + 'items/',
          bodyFormData,
          {
              headers: {
                  'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
              }
          }
      )
      .then(response =>{
        console.log('response : ',response);
        if(response.data.Status){
            alert(response.data.Message)
        }else{
            console.log(response.data.Message);
            alert(response.data.Message+" : "+response.data.Error)
        }
        this.fetchAllData()
      })
      .catch(error=>{
          console.log(error);
      })
      
    }
    render() {
        return (
          <div>

            <AddProductModal 
              show={this.state.productModal}
              onHide={() => this.setState({ productModal: false })}
              save={this.fetchAllData}
            />

            <ViewProductModal 
              show={this.state.viewProductModal}
              onHide={() => this.setState({ viewProductModal: false })}
              // save={this.saveItem}
              data={this.state.viewData}
              edit={this.fetchAllData}
              delete={this.fetchAllData}
            />

            <div className="page-wrapper">
              <Header />
              {/* <Navigation/> */}

              {/* PAGE CONTAINER */}
              <div className="page-container">
                <HeaderDesktop searchplaceholder="Search product" searchbutton="product" />
                {/* MAIN CONTENT */}
                <div className="main-content">
                  <div className="section__content section__content--p30">
                    <div className="container-fluid">
                      <PageHead name="Products" button="true" buttonName="product" product={()=>this.setState({productModal:true})} />
                      <div className="row mt-3">
                        {this.state.data.map((item, index) => <ProductsComponent 
                        data={item} 
                        key={index} 
                        select={(data)=>this.setState({viewProductModal:true,viewData:data})}
                        />)}
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
