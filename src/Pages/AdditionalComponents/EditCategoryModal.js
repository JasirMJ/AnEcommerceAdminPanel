import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class EditCategoryModal extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",
            parent:"",

            categoryData:[],
        }
    }

    componentWillReceiveProps(prop){
        this.setState({
            id:prop.currentData.id
        })
        if(prop.currentData.parent){
            this.state = {
                id:prop.currentData.id,
                name:prop.currentData.name,
                parent:prop.currentData.parent.id,
    
                categoryData:prop.parentData,
            }
        }
        else{
            this.state = {
                id:prop.currentData.id,
                name:prop.currentData.name,
                parent:"",
    
                categoryData:prop.parentData,
            }
        }
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

        
        console.log('curdata' ,this.props.currentData);
        console.log('par data ' ,this.props.parentData);
        console.log('state',this.state);
        
        
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
                        Save category {this.state.id}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <br/>
                    <br/>
                    <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text ">Name</span>
                        </div>
                        <input name="name" value={this.state.name} onChange={this.onChange} type="text" className="form-control"  />
                    </div>

                    {this.state.parent&&
                    <>
                    Choose parent category :
                    <div className="form-group">
                        <select value={this.state.parent} name="parent" onChange={this.onChange}  className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' >Select category</option>
                            {  this.state.categoryData.map((option,index) =>{
                                return <option key={index} value={option.id} name={option.name} >{option.name}</option>
                                }
                            )}
                        </select>
                    </div>
                    </>
                    }
                   
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.submitForm}>Submit</Button>
                </Modal.Footer>
            </Modal>
            )
        }
    }