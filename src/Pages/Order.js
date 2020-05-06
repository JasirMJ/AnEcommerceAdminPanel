import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import Base from './Config'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Orders from './AdditionalComponents/Orders'

import OrderStatusModal from "./AdditionalComponents/OrderStatusModal"


class App extends React.Component {
  constructor(){
    super()
    this.state={
        data:[],
        status_data:[],
        next:null,
        prev:null,
        loading:true,

        statusModal:false,
        orderid:"",
        itemStatus:"",
        status_name:""
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
        Base.url + 'order/',
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
  changeStatus=(id,status,name)=>{
    console.log('change stgatus of ',id);
    this.setState({
      orderid:id,
      statusModal:true,
      itemStatus:status,
      status_name:name  
    })
    
  }


  statusChange=(orderid,statusid,desc)=>{
        
    var bodyFormData = new FormData();
    bodyFormData.set('keyword', "change_status");
    bodyFormData.set('order_id', orderid);
    bodyFormData.set('status_id', statusid);
    bodyFormData.set('description', desc);
    axios.patch(
        Base.url + 'order/',
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
            this.fetchAllData()
        }else{
            console.log(response.data.Message);
            alert(response.data.Message+" : "+response.data.Error)
        }
    })
    .catch(error=>{
        console.log(error);
    })
  }

  render(){
    return (

      <div>
        <OrderStatusModal
          show={this.state.statusModal}
          onHide={() => this.setState({ statusModal: false })}
          orderid={this.state.orderid}
          statusid={this.state.itemStatus}
          status={this.state.status_name}

          change={this.statusChange}
        />
  
       <div className="page-wrapper">
         <Header/>
         {/* <Navigation/> */}
         {/* PAGE CONTAINER */}
         <div className="page-container">
           <HeaderDesktop searchplaceholder="Search order" searchbutton="order" />
           {/* MAIN CONTENT */}
           <div className="main-content">
             <div className="section__content section__content--p30">
               <div className="container-fluid">
                 <PageHead name="Orders" 
                  // buttonName="Order"
                  />

                 <div className="row">
                  <div className="col-md-12">
                    {/* DATA TABLE */}
                    {/* <h3 className="title-5 m-b-35">data table</h3> */}
                    {/* <div className="table-data__tool">
                      <div className="table-data__tool-left">
                        <div className="rs-select2--light rs-select2--md">
                          <select className="js-select2" name="property">
                            <option selected="selected">All Properties</option>
                            <option value>Option 1</option>
                            <option value>Option 2</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                        <div className="rs-select2--light rs-select2--sm">
                          <select className="js-select2" name="time">
                            <option selected="selected">Today</option>
                            <option value>3 Days</option>
                            <option value>1 Week</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                        <button className="au-btn-filter">
                          <i className="zmdi zmdi-filter-list" />filters</button>
                      </div>
                      <div className="table-data__tool-right">
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                          <select className="js-select2" name="type">
                            <option selected="selected">Export</option>
                            <option value>Option 1</option>
                            <option value>Option 2</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div> */}
{/* 
                    <div className="au-card au-card--no-pad pt-1 pb-1 pl-2">
                      <div className="rs-select2--light rs-select2--md">
                        <select className="js-select2" name="property">
                          <option selected="selected">All Properties</option>
                          <option value>Option 1</option>
                          <option value>Option 2</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                      <div className="rs-select2--light rs-select2--sm">
                        <select className="js-select2" name="time">
                          <option selected="selected">Today</option>
                          <option value>3 Days</option>
                          <option value>1 Week</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                        <button className="au-btn-filter">
                          <i className="zmdi zmdi-filter-list" />filters</button>
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 mr-0">
                          <select className="js-select2" name="type">
                            <option selected="selected">Export</option>
                            <option value>Option 1</option>
                            <option value>Option 2</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                    </div>
                       */}

                    <div className="table-responsive table--no-card m-b-40">
                      <table className="table table-data2">
                      {/* <table className="table table-data2 table-striped"> */}
                        <thead>
                          <tr>
                             <th>Date</th>
                             <th>order ID</th>
                             <th>User</th>
                             <th>Phone</th>
                             <th className="text-right">Status</th>
                             <th className="text-right">Amount</th>
                             <th className="text-right">
                              <button className="au-btn au-btn-icon au-btn--green au-btn--small mr-2" title="previous">
                              <i className="fa fa-arrow-left text-black-50" aria-hidden="true"/></button>
                              <button className="au-btn au-btn-icon au-btn--green au-btn--small" title="next">
                              <i className="fa fa-arrow-right text-black-50" aria-hidden="true"/></button>
                            </th>
                             {/* <th className="text-right">quantity</th> */}
                           </tr>
                        </thead>
                        <tbody>
                          {this.state.data.map((item,index)=>
                          <Orders 
                            data={item} 
                            key={index}
                            changeStatus={this.changeStatus}
                            />
                            )
                          }
                        </tbody>
                      </table>
                    </div>
                    {/* END DATA TABLE */}


                  </div>
                </div>


               </div>
             </div>
           </div>
           {/* END MAIN CONTENT
           END PAGE CONTAINER */}
         </div>
       </div>
     
     </div>
     
      );
  }
}
export default App