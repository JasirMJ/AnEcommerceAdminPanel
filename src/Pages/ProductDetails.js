import React, { Component } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import "../assets/css/mycustom.css"


import Base from './Config'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

const ImageMain = {
  width:"100%",
  height:"100%",
};
const FileInputPlus = {
  height:100,
  width:100,
  backgroundColor:"black",
  opacity:0.5,
  borderRadius:10,
};



export default class ProductDetails extends Component {
    constructor(){
      super()
      this.state={
        id:"",
        data:[],
      }
    }
    
    componentDidMount(){
      this.getid()
    }
    getid=()=>{
        const id = this.props.match.params.id //  working
        console.log('id = ',id);
        this.setState({
            id:id
        },()=>{
          this.fetchItem(id)
        })
        
    }
    fetchItem(id){
      axios.get(
          Base.url + 'items/?id='+id,
          {
              headers: {
                  'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
              }
          }
      ).then(response => {
          console.log('Response :', response);

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

    fileSelectHandler = event =>{
      this.setState({
        [event.target.name]:event.target.files[0]
      },()=>{
        console.log('selected file ',this.state);
        
      })
    }
    fileUploadHandler=()=>{
      console.log('file upload');
      
    }
    render() {
        const pageName = "Product / "+this.state.id
        // console.log('state',this.state);
        
        return (
            <div>
            <div className="page-wrapper">
              <Header/>
              {/* <Navigation/> */}
              
              {/* PAGE CONTAINER */}
              <div className="page-container">
                <HeaderDesktop/>
                {/* MAIN CONTENT */}
                <div className="main-content">
                  <div className="section__content section__content--p30">
                    <div className="container-fluid">
                    <PageHead name={pageName}/>
                    {this.state.data.map((item,index) =>
                       <div className="row" key={index}>
                      <div className="card">
                          <div className="row">
                            <aside className="col-sm-6 border-right">
                              <article className="gallery-wrap"> 
                                <div className="img-big-wrap">
                                  <div> <img src={item.image} /></div>
                                </div> {/* slider-product.// */}
      {/*
                                <div className="img-small-wrap">
                                  <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                                  <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                                  <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                                  <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                                  <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                                </div>  slider-nav.// */}


                              </article> {/* gallery-wrap .end// */}
                            </aside>
                            <aside className="col-sm-6">
                              <article className="card-body p-5">
                                <h3 className="title mb-3">{item.id}{item.name}</h3>
                                <p className="price-detail-wrap"> 
                                  <span className="price h3 text-warning"> 
                                    {/* <span className="currency">US $</span> */}
                                    <span className="num">{item.rate}</span>
                                  </span> 
                                  {/* <span>/per kg</span>  */}
                                </p> {/* price-detail-wrap .// */}
                                <dl className="item-property">
                                  <dt>Description</dt>
                                  <dd><p>{item.description}</p></dd>
                                </dl>
                                <dl className="param param-feature">
                                  <dt>Category</dt>
                                  <dd>
                                    {item.category?
                                    item.category.name
                                    :
                                    "Uncategorised"
                                    }
                                    
                                  </dd>
                                </dl>  {/* item-property-hor .// */}
                                <dl className="param param-feature">
                                  <dt>Color</dt>
                                  <dd>Black and white</dd>
                                </dl>  {/* item-property-hor .// */}
                                <dl className="param param-feature">
                                  <dt>Delivery</dt>
                                  <dd>Russia, USA, and Europe</dd>
                                </dl>  {/* item-property-hor .// */}
                                <hr />
                                

                                {/* <div className="row"> */}
                                  
                                  {/* <div className="col-sm-5"> */}
                                    {/* <dl className="param param-inline">
                                      <dt>Quantity: </dt>
                                      <dd>
                                        <select className="form-control form-control-sm" style={{width: 70}}>
                                          <option> 1 </option>
                                          <option> 2 </option>
                                          <option> 3 </option>
                                        </select>
                                      </dd>
                                    </dl>   */}
                                    {/* item-property .// */}
                                  {/* </div>  */}
                                  {/* col.// */}
                                  {/* <div className="col-sm-7"> */}
                                    {/* <dl className="param param-inline">
                                      <dt>Size: </dt>
                                      <dd>
                                        <label className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                          <span className="form-check-label">SM</span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                          <span className="form-check-label">MD</span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                          <span className="form-check-label">XXL</span>
                                        </label>
                                      </dd>
                                    </dl>  */}
                                    {/* item-property .// */}
                                  {/* </div> */}
                                  {/* col.// */}
                                {/* </div>  */}


                                {/* row.// */}
                                {/* <hr />
                                <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                                <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart" /> Add to cart </a> */}
                              </article> 
                              
                              {/* card-body.// */}
                            </aside> {/* col.// */}
                          </div> {/* row.// */}
                        </div> {/* card.// */}
   
                  </div>

                      )}
                   
                  {/*  
                  <div className="row mt-3">
                    <div className="au-card col-lg-12">

                   

                    <div className="row">
                      <div className="col-lg-8">
                        <div className="table-responsive table--no-card m-b-40">
                        <img style={ImageMain}
                            src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" />
                            <br/>
                            <br/>
                         <input 
                            name="selectedFile1"
                            style={{
                            display:"none",
                            }}
                            
                            onChange={this.fileSelectHandler}
                            type="file"
                            ref={fileInput1=>this.fileInput1=fileInput1}
                        /> 

                        <button
                        className="ml-2"
                        style={FileInputPlus}
                        onClick={()=>this.fileInput1.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>
                        
                        <input 
                            name="selectedFile2"
                            style={{display:"none"}}
                            onChange={this.fileSelectHandler}
                            type="file"
                            ref={fileInput2=>this.fileInput2=fileInput2}
                        /> 
                        <button 
                            className="ml-2"
                            style={FileInputPlus}
                            onClick={()=>this.fileInput2.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>

                        <input 
                            name="selectedFile3"
                            style={{display:"none"}}
                            onChange={this.fileSelectHandler}
                            type="file"
                            ref={fileInput3=>this.fileInput3=fileInput3}
                        /> 
                        <button 
                            className="ml-2"
                            style={FileInputPlus}
                            onClick={()=>this.fileInput3.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>

                
                        <input 
                            name="selectedFile4"
                            style={{display:"none"}}
                            onChange={this.fileSelectHandler}
                            type="file"
                            ref={fileInput4=>this.fileInput4=fileInput4}
                        /> 
                        <button 
                            className="ml-2"
                            style={FileInputPlus}
                            onClick={()=>this.fileInput4.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>
                        
                        <input 
                            name="selectedFile5"
                            style={{display:"none"}}
                            onChange={this.fileSelectHandler}
                            type="file"
                            ref={fileInput5=>this.fileInput5=fileInput5}
                        /> 
                        <button 
                            className="ml-2"
                            style={FileInputPlus}
                            onClick={()=>this.fileInput5.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button> 
                        
                        </div>
                      </div>

              <div className="col-lg-4">
              <div className="table-responsive table--no-card m-b-40">
                  <table className="table table-borderless table-striped table-earning">
                    <thead>
                      <tr>
                        <th>date</th>
                        <th>order ID</th>
                        <th>name</th>
                        <th className="text-right">price</th>
                        <th className="text-right">quantity</th>
                        <th className="text-right">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2018-09-29 05:57</td>
                        <td>100398</td>
                        <td>iPhone X 64Gb Grey</td>
                        <td className="text-right">$999.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$999.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-28 01:22</td>
                        <td>100397</td>
                        <td>Samsung S8 Black</td>
                        <td className="text-right">$756.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$756.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-27 02:12</td>
                        <td>100396</td>
                        <td>Game Console Controller</td>
                        <td className="text-right">$22.00</td>
                        <td className="text-right">2</td>
                        <td className="text-right">$44.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-26 23:06</td>
                        <td>100395</td>
                        <td>iPhone X 256Gb Black</td>
                        <td className="text-right">$1199.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$1199.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-25 19:03</td>
                        <td>100393</td>
                        <td>USB 3.0 Cable</td>
                        <td className="text-right">$10.00</td>
                        <td className="text-right">3</td>
                        <td className="text-right">$30.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-29 05:57</td>
                        <td>100392</td>
                        <td>Smartwatch 4.0 LTE Wifi</td>
                        <td className="text-right">$199.00</td>
                        <td className="text-right">6</td>
                        <td className="text-right">$1494.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-24 19:10</td>
                        <td>100391</td>
                        <td>Camera C430W 4k</td>
                        <td className="text-right">$699.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$699.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-22 00:43</td>
                        <td>100393</td>
                        <td>USB 3.0 Cable</td>
                        <td className="text-right">$10.00</td>
                        <td className="text-right">3</td>
                        <td className="text-right">$30.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              
              </div>
            </div>

            
                    </div>
                  </div>
                  */}
          
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        )
    }
}
