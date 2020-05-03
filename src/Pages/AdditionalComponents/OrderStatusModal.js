import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import { Modal,ButtonToolbar,Button } from 'react-bootstrap';

import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class OrderStatusModal extends React.Component {
    constructor(){
        super()
        this.state = {
          id:"",
          status:"",
          orderid:"",
          data:[],
          description:"",
        }
        
    }
    componentDidMount(){
      this.fetchStatusData()

    }

    fetchStatusData(){
        axios.get(
          Base.url + 'status/',
          {
              headers: {
                  'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
              }
          }
        ).then(response => {
            console.log('Response all :', response.data.results);
            // console.log('Response all :', response.data.results);
            this.setState({
              data: response.data.results,
              // next: response.data.next,
              // prev: response.data.previous,
            })
            
    
        }).catch(error => {
            console.log('Error loading : ', error);
            NotificationManager.error('Error : ', error, 3000);
        })
      }
    
    submitForm= ()=>{
        if(!this.state.id){
            alert("Please choose status")
            return false
        }
        this.props.change(this.props.orderid,this.state.id,this.state.description)
        this.props.onHide() 
    }
  
    onChange=(e)=>{
        this.setState ({
            [e.target.name]:e.target.value
        },()=>{
          if(this.state.newp===this.state.cp){
            this.setState({
              validator:true
            })
          }
          else{
            this.setState({
              validator:false
            })
          }
        })
    }
    handleChange = (event)=> {

        console.log('changed ',event.target.value);
        
        this.setState({
            id: event.target.value,
            status:event.target.name,
        },
            // ()=>console.log('state changed :',this.state.parentId)
            );
    }
     
  
    render() {
        // console.log('props ',this.props);
        const show= this.props.show
        const onHide = this.props.onHide
        
        // if(this.props.orderid){
        //     this.setState({
        //         id:this.props.status,
        //         orderid:this.props.orderid
        //     })
        // }
        
        
        // const {}
  
        return (
            <Modal
                show={show}
                onHide={onHide}
    
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change status of Order : {this.props.orderid}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {this.state.id?
                    `You are about to change ${this.props.status} to ${this.state.data[this.state.id-1].name}`
                    :
                    <>
                    Current Status : {this.props.status}
                    </>
                    }
                    
                    <br/>
                    <br/>
                    <div className="form-group">
                        <select value={this.state.id}  onChange={this.handleChange} className="form-control-sm form-control" style={{borderColor:'#fafafa',boxShadow:'0px 2px 1px #ededed',paddingLeft:18}}  id="fruit" >
                            <option value='' disabled>Select status</option>
                            {  this.state.data.map((option,index) =>{
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