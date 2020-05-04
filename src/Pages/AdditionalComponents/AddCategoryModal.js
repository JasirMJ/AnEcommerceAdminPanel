import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class AddCategoryModal extends React.PureComponent {
    constructor(){
        super()
        this.state = {
          name:"",
          parent:"",

          categoryData:[],
        }
        
    }


    componentDidMount(){
        this.fetchCategory()
        // this.fetchBrand()
    }


    fetchCategory(){
        axios.get(
            Base.url + 'category/',
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            console.log('Response Normal :', response);

            this.setState({
                categoryData: response.data.results,
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
            Base.url + 'brand/',
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
                }
            }
        ).then(response => {
            console.log('Response Normal :', response);

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
        this.props.save(this.state)
       
        this.props.onHide() 
    }
  
    onChange=(e)=>{
        this.setState ({
            [e.target.name]:e.target.value
        },()=>{
          
        })
    }


    render() {
        const show= this.props.show
        const onHide = this.props.onHide
  
        return (
            <Modal
                show={show}
                onHide={onHide}
    
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Save category
            </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <br/>
                    <br/>
                    <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text ">Name</span>
                        </div>
                        <input name="name" onChange={this.onChange} type="text" className="form-control"  />
                    </div>

                    {/* <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Rate</span>
                        </div>
                        <input name="rate" onChange={this.onChange} type="number" className="form-control" />
                    </div>

                    Choose image 
                    <div className="form-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" 
                            onChange={(event) => {this.setState({image: event.target.files[0]})}  }  
                            />
                            <label className="custom-file-label" htmlFor="customFile">{this.state.image?this.state.image.name:"Choose file"}</label>
                        </div>
                    </div> 
                     */}

                    Choose parent category :
                    <div className="form-group">
                        <select value={this.state.id} name="category" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select category</option>
                            {  this.state.categoryData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    {/* Choose brand :
                    <div className="form-group">
                        <select value={this.state.id} name="brand" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select brand</option>
                            {  this.state.brandData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div>
                        <textarea name="description" value={this.state.description} onChange={this.onChange}  className="form-control form-control-md" placeholder="type description "></textarea>
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.submitForm}>Submit</Button>
                </Modal.Footer>
            </Modal>
            )
        }
    }