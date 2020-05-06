import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class ViewProductModal extends React.PureComponent {
    constructor(){
        super()
        this.state = {
            id:"",
            name:"",
            description:"",
            category:"",
            subcategory:"",
            brand:"",
            image:"",
            rate:"",
            stock:"",

            parent_id:"!null",    

            categoryData:[],
            subcategoryData:[],

            brandData:[],

            edit:false,
        }
        
    }


    componentDidMount(){
        this.fetchCategory()
        this.fetchSubCategory()
        this.fetchBrand()

    }


    fetchCategory(){
        axios.get(
            Base.url + 'category/?page_wise=0&parent_id=null',
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            // console.log('Response Normal :', response);

            this.setState({
                categoryData: response.data,
                // next: response.data.next,
                // prev: response.data.previous,
            })
        }).catch(error => {
            console.log('Error loading quotation count: ', error);
            NotificationManager.error('Error : ', error, 3000);
        })
    }

    fetchSubCategory(){
        axios.get(
            Base.url + 'category/?page_wise=0&parent_id='+this.state.parent_id,
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            // console.log('Response Normal :', response);

            this.setState({
                subcategoryData: response.data,
                // next: response.data.next,
                // prev: response.data.previous,
            })
        }).catch(error => {
            console.log('Error loading quotation count: ', error);
            NotificationManager.error('Error : ', error, 3000);
        })
    }


    fetchBrand(){
        axios.get(
            Base.url + 'brand/?page_wise=0',
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            // console.log('Response Normal :', response);

            this.setState({
                brandData: response.data,
                // next: response.data.next,
                // prev: response.data.previous,
            })
        }).catch(error => {
            console.log('Error loading quotation count: ', error);
            NotificationManager.error('Error : ', error, 3000);
        })
    }

    
    submitForm= ()=>{
        console.log('submitted ');
        console.log('state ',this.state);
        let data = this.state
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
            this.props.edit()
            this.onHide()   
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
  
    onChange=(e)=>{
        
        let name = e.target.name
        console.log('name',name);
        
        if(name=="category"){
            this.setState({
                [e.target.name]:e.target.value,
                parent_id:e.target.value,
                subcategory:""
            },()=>{
                this.fetchSubCategory()
            })
        }
        else{
            this.setState ({
                [e.target.name]:e.target.value
            },()=>{
            
            })
        }
    }

    // handleChange = (event)=> {
    //     console.log('changed ',event.target.value);
    //     this.setState({
    //         category: event.target.value,
    //     });
    // }
    edit=()=>{
        const item = this.props.data
        if(item.category){
            this.setState({
                category:item.category.id,
                parent_id:item.category.id,
            },()=>{
                this.fetchSubCategory()
            })
        }
        if(item.brand){
            this.setState({
                brand:item.brand.id,
            })
        }

        this.setState({
            id:item.id,

            edit:true,
            name:item.name,
            description:item.description,
            image:"",
            rate:item.rate,
            stock:item.stock,
        })
    }

    delete=()=>{
                
        axios.delete(
            Base.url + 'items/?id='+this.props.data.id,
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
                    this.props.delete()
                    this.props.onHide()
                }else{
                    console.log(response.data.Message);
                    alert(response.data.Message+" : "+response.data.Error)

                }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    cancellEdit=()=>{
        if(this.state.category){
            this.setState({
                category:"",
            })
        }
        if(this.state.subcategory){
            this.setState({
                subcategory:"",
            })
        }
        if(this.state.brand){
            this.setState({
                brand:"",
            })
        }
        this.setState({
            id:"",

            name:"",
            description:"",
            image:"",
            rate:"",
            stock:"",
            edit:false,
        })
        
    }

    onHide=()=>{
        this.cancellEdit()
        this.props.onHide()
    }
  
    render() {
        const show= this.props.show
        const onHide = this.props.onHide
        console.log('View data ',this.props.data);
        const item = this.props.data
        return (
            <Modal
                show={show}
                onHide={this.onHide}
    
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Product : {item.id}{item.name}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <div className="d-flex flex-row-reverse">
                    
                    {this.state.edit?
                    <>
                    <div className="p-2"><Button className='btn btn-sucess' onClick={this.submitForm}>Save</Button></div>                    
                    <div className="p-2"><Button className='btn btn-danger' onClick={this.cancellEdit}>Cancell</Button></div>
                    </>
                    :
                    <>
                        <div className="p-2"><button className="btn btn-primary " onClick={this.edit}>edit</button></div>
                        <div className="p-2"><button className="btn btn-danger" onClick={this.delete}>delete</button></div>
                    </>
                    }

                </div>
                
                
                <div className="row" >
                      <div className="card">
                          <div className="row">
                            <aside className="col-lg-6 border-right">
                              <article className="gallery-wrap"> 
                                <div className="img-big-wrap">
                                  <div> 
                                      <img src={item.image} />
                                      
                                      </div>
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
                            <aside className="col-lg-6">
                              <article className="card-body p-5">
                                <h3 className="title mb-3">
                                    {this.state.edit?
                                        <>
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Name</span>
                                            </div>
                                            <input name="name" onChange={this.onChange} value={this.state.name} type="text" className="form-control"  />
                                        </div>
                                        
                                        </>
                                        :
                                        <>
                                        Name : {item.name} 
                                        </>
                                    }
                                </h3>
                                {this.state.edit&&
                                        <>
                                         Choose image 
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile" 
                                                onChange={(event) => {this.setState({image: event.target.files[0]})}  }  
                                                />
                                                <label className="custom-file-label" htmlFor="customFile">{this.state.image?this.state.image.name:"Choose file"}</label>
                                            </div>
                                        </div> 
                                        </>
                                       
                                    }
                               

                                <p className="price-detail-wrap"> 
                                  <span className="price h3 text-warning"> 
                                    {/* <span className="currency">US $</span> */}
                                    
                                    {this.state.edit?
                                        <>
                                         <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Rate</span>
                                            </div>
                                            <input name="rate" onChange={this.onChange} value={this.state.rate} type="number" className="form-control" />
                                        </div>
                                       
                                        </>
                                        :
                                        <>
                                        <span className="num">Rate : {item.rate}</span>
                                        </>
                                    }
                                        
                                  </span> 
                                  {/* <span>/per kg</span>  */}
                                </p> {/* price-detail-wrap .// */}
                                <dl className="item-property">
                                  <dt>Description</dt>
                                  <dd>
                                  {this.state.edit?
                                        <>
                                        <div>
                                            <textarea name="description" value={this.state.description} onChange={this.onChange}  className="form-control form-control-md" placeholder="type description "></textarea>
                                        </div> 
                                        </>
                                        :
                                        <>
                                        <p>{item.description}</p>
                                        </>
                                    }
                                      </dd>
                                </dl>
                                <dl className="param param-feature">
                                  <dt>Category</dt>
                                  <dd>
                                  {this.state.edit?
                                        <>
                                        <div className="form-group">
                                            <select value={this.state.category} name="category" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                                                <option value='' >Select category</option>
                                                {  this.state.categoryData.map((option,index) =>{
                                                    return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                                    }
                                                )}
                                            </select>
                                        </div>
                                        </>
                                        :
                                        <>
                                        {item.category?
                                            item.category.name
                                            :
                                            "Uncategorised"
                                        }
                                        </>
                                    }
                                  
                                   
                                    
                                  </dd>
                                  <dt>Subcategory</dt>
                                  <dd>
                                  {this.state.edit?
                                        <>
                                        {this.state.subcategoryData.length?
                                        <>
                                         <div className="form-group">
                                            <select value={this.state.subcategory} name="subcategory" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                                                <option value='' >Select subcategory</option>
                                                {  this.state.subcategoryData.map((option,index) =>{
                                                    return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                                    }
                                                )}
                                            </select>
                                        </div>
                                        </>
                                        :
                                        "No subcategory found for selected one"
                                        }
                                       
                                        </>
                                        :
                                        <>
                                        {item.subcategory?

                                        item.subcategory.name
                                        :
                                        "Uncategorised"
                                        }   
                                       
                                        </>
                                    }
                                   
                                    
                                  </dd>
                                  <dt>Brand</dt>
                                  <dd>
                                  {this.state.edit?
                                        <>
                                        <div className="form-group">
                                            <select value={this.state.brand} name="brand" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                                                <option value='' >Select brand</option>
                                                {  this.state.brandData.map((option,index) =>{
                                                    return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                                    }
                                                )}
                                            </select>
                                        </div>
                                        </>
                                        :
                                        <>
                                        {item.brand?
                                            item.brand.name
                                            :
                                            "No brand"
                                        }   
                                        </>
                                    }
                                   
                                    
                                  </dd>
                                  <dt>Stock</dt>
                                  <dd>
                                  {this.state.edit?
                                        <>
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Stock</span>
                                            </div>
                                            <input name="stock" value={this.state.stock} onChange={this.onChange} type="number" className="form-control"  />
                                        </div>
                                        </>
                                        :
                                        <>
                                        {item.stock}
                                        </>
                                    }
                                    
                                    
                                  </dd>
                                </dl>  {/* item-property-hor .// */}
                                {/* <dl className="param param-feature">
                                  <dt>Color</dt>
                                  <dd>Black and white</dd>
                                </dl>   */}
                                {/* item-property-hor .// */}
                                {/* <dl className="param param-feature">
                                  <dt>Delivery</dt>
                                  <dd>Russia, USA, and Europe</dd>
                                </dl>   */}
                                {/* item-property-hor .// */}
                                {/* <hr /> */}
                                

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









                    {/* <br/>
                    <br/>
                    

                   
                    
                   
                    Choose brand :
                    
                    
                    */}
                </Modal.Body>
                <Modal.Footer>
                    {this.state.edit&&
                    <>
                        <Button className='btn btn-danger' onClick={this.cancellEdit}>Cancell</Button>
                        <Button className='btn btn-sucess' onClick={this.submitForm}>Save</Button>
                    </>
                    }
                    
                </Modal.Footer>
            </Modal>
            )
        }
    }