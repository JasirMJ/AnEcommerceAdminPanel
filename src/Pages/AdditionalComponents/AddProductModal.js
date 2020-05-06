import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class AddProductModal extends React.PureComponent {
    constructor(){
        super()
        this.state = {
          name:"",
          description:"",
          category:"",
          brand:"",
          image:"",
          rate:"",
          subcategory:"",
          parent_id:"!null",

          categoryData:[],
          subCategoryData:[],
          brandData:[],
        }
        
    }


    componentDidMount(){
        console.log('worked');
        
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
            console.log('subcategory :', response);

            this.setState({
                subCategoryData: response.data,
                // next: response.data.next,
                // prev: response.data.previous,
            },()=>{
                console.log('length ',this.state.subCategoryData.length);
                if(this.state.subCategoryData){
                    console.log('data found');
                }
                else{
                    console.log('data not found');

                }
                
            })
        }).catch(error => {
            console.log('Error loading quotation count: ', error);
            NotificationManager.error('Error : ', error, 3000);
        })
    }


    fetchBrand(){
        axios.get(
            Base.url + 'brand/',
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            // console.log('Response Normal :', response);

            this.setState({
                brandData: response.data.results,
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

        if(!data.name){
            console.log('name');
            return false
        }
        if(!data.rate){
            console.log('rate');
            return false
        }
        if(!data.description){
            console.log('description');
            return false
        }
        if(!data.image){
            console.log('image');
            return false
        }
        
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
            this.clearState()
            this.props.save()
            this.props.onHide() 

        }else{
            console.log(response.data.Message);
            alert(response.data.Message+" : "+response.data.Error)
        }
        this.fetchAllData()
        })
        .catch(error=>{
            console.log(error);
        })
        // this.props.save(this.state)
       
    }

    clearState(){
        this.setState({
            name:"",
            description:"",
            category:"",
            brand:"",
            image:"",
            rate:"",
            subcategory:"",
            parent_id:"!null",
        })
        this.refs.image.value=''
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
     
  
    render() {
        const show= this.props.show
        const onHide = this.props.onHide
  
        return (
            <Modal
                show={show}
                onHide={onHide}
    
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Save item
            </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <br/>
                    <br/>
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name</span>
                        </div>
                        <input name="name" onChange={this.onChange} type="text" className="form-control"  />
                    </div>

                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Rate</span>
                        </div>
                        <input name="rate" onChange={this.onChange} type="number" className="form-control" />
                    </div>

                    Choose image 
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" ref="image"
                            onChange={(event) => {this.setState({image: event.target.files[0]})}  }  
                            />
                            <label className="custom-file-label" htmlFor="customFile">{this.state.image?this.state.image.name:"Choose file"}</label>
                        </div>
                    </div> 
                    


                    {/* <div className="form-group">
                        <div className="input-group input-group-alternative mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <input 
                                    className="form-control" 
                                    type="file"  ref='bgimg'  
                                    onChange={(event) => {this.setState({bgimg: event.target.files[0]})}  }  
                                    /><i  />
                                </span>
                            </div>
                        </div>
                    </div> */}
                    {/* <br/> */}
                    Choose category :
                    <div className="form-group">
                        <select value={this.state.category} name="category" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select category</option>
                            {  this.state.categoryData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>

                    {this.state.category
                    &&
                    this.state.subCategoryData.length?
                    <>
                    Choose SubCategory :
                    <div className="form-group">
                        <select value={this.state.subcategory} name="subcategory" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select subcategory</option>
                            {  this.state.subCategoryData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    </>
                    :
                    ""
                    }
                    

                    Choose brand :
                    <div className="form-group">
                        <select value={this.state.brand} name="brand" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select brand</option>
                            {  this.state.brandData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div>
                        <textarea name="description" value={this.state.description} onChange={this.onChange}  className="form-control form-control-md" placeholder="type description "></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.submitForm}>Submit</Button>
                </Modal.Footer>
            </Modal>
            )
        }
    }