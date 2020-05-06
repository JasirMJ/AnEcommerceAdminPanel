import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"

import {NotificationContainer, NotificationManager} from 'react-notifications';
import Users from './AdditionalComponents/Users'
import axios from 'axios'
import Base from './Config'


class App extends React.Component {
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
        Base.url + 'user/?keyword=get_client_profile',
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
          next: response.data.next,
          prev: response.data.previous,
        })
        

    }).catch(error => {
        console.log('Error loading : ', error);
        NotificationManager.error('Error : ', error, 3000);
    })

  }

  changeActivation=(id,status)=>{
    console.log('stat ', status);
    let stat =""
    if(status==true){
      // console.log('true');
      stat = "dactv"
      
    }
    else{
      // console.log('false');
      stat = "actv"
    }
    
    // return false
    var bodyFormData = new FormData();
    bodyFormData.set('user_id', id);
    bodyFormData.set('action', stat);
    axios.patch(
        Base.url + 'user/',
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
  render(){
    return (

 <div>
  <div className="page-wrapper">
    <Header/>
    {/* <Navigation/> */}
    
    {/* PAGE CONTAINER */}
    <div className="page-container">
      <HeaderDesktop searchplaceholder="Search user" searchbutton="user"/>
      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <PageHead name="Users"
            // buttonName={"User"} 
            />
           
            <div className="row">
              <div className="col-lg-12">
                {/* <h2 className="title-1 m-b-25">Earnings By Items</h2> */}
                <div className="table-responsive table--no-card m-b-40">
                  <table className="table table-borderless table-striped table-earning">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Active</th>
                        {/* <th >Email</th> */}
                        {/* <th className="text-right">quantity</th> */}
                        {/* <th className="text-right">total</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((item,index)=><Users 
                        data={item} 
                        key={index}
                        change={this.changeActivation}
                        />
                        )
                      }
                    </tbody>
                  </table>
                </div>
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