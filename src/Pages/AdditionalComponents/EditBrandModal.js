import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class EditBrandModal extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            id:"",
            name:"",

        }
    }

    componentWillReceiveProps(prop){
        this.setState({
            id:prop.currentData.id,
            name:prop.currentData.name,
        })
    }
    
    submitForm= ()=>{
        // console.log('submitted ');
        // console.log('state ',this.state);
        
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

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.submitForm}>Submit</Button>
                </Modal.Footer>
            </Modal>
            )
        }
    }