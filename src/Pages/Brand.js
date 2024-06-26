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
import BrandList from './AdditionalComponents/Brands';
import AddBrandModal from './AdditionalComponents/AddBrandModal';
import EditBrandModal from './AdditionalComponents/EditBrandModal';


class App extends React.Component {
  constructor(){
    super()
    this.state={
        data:[],
        next:null,
        prev:null,
        loading:true,

        addModal:false,
        editModal:false,
        editData:"",
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
        Base.url + 'brand/',
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
        console.log('Error loading : ', error);
        NotificationManager.error('Error : ', error, 3000);
    })

  }

  saveItem=(data)=>{
    console.log('data ',data);
        
    var bodyFormData = new FormData();
    bodyFormData.set('name', data.name);
    bodyFormData.set('parent', data.description);

    axios.post(
        Base.url + 'brand/',
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

  delete=(id)=>{
        
    axios.delete(
        Base.url + 'brand/?id='+id,
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
                this.loading(false)
            }else{
                console.log(response.data.Message);
                alert(response.data.Message+" : "+response.data.Error)
                this.loading(false)
            }
    })
    .catch(error=>{
        console.log(error);
    })
  }


  editsave=(data)=>{
    console.log('edit data ',data);
        
    var bodyFormData = new FormData();
    bodyFormData.set('id', data.id);
    bodyFormData.set('name', data.name);

    axios.put(
        Base.url + 'brand/',
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
          console.log(response.data.Message);
          
      }else{
          alert(response.data.Message+" : "+response.data.Error)
          console.log(response.data.Message," : ",response.data.Error);

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

         <EditBrandModal
          show={this.state.editModal}
          onHide={() => this.setState({ editModal: false })}
          currentData={this.state.editData}
          save={this.editsave}
         />
         <AddBrandModal
            show={this.state.addModal}
            onHide={() => this.setState({ addModal: false })}
            save={this.saveItem}
            name={"Brand"}
         />
         <Header/>
         {/* <Navigation/> */}
         {/* PAGE CONTAINER */}
         <div className="page-container">
           <HeaderDesktop searchplaceholder="Search brand" searchbutton="brand" />
           {/* MAIN CONTENT */}
           <div className="main-content">
             <div className="section__content section__content--p30">
               <div className="container-fluid">
                 <PageHead name="Brand" buttonName="brand" brand={()=>this.setState({addModal:true})}/>

                 <div className="row">
                  <div className="col-md-12">

                    <div className="table-responsive table--no-card m-b-40">
                      <table className="table table-data2">
                      {/* <table className="table table-data2 table-striped"> */}
                        <thead>
                          <tr>
                             <th>Id</th>
                             <th>Name</th>
                             {/* <th>User</th>
                             <th>Phone</th>
                             <th className="text-right">Status</th>
                             <th className="text-right">Amount</th> */}
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
                            <BrandList
                              data={item}
                              key={index}
                              delete={this.delete}
                              edit={(d)=>this.setState({ editModal: true,editData:d },()=>console.log(this.state.editModal))}

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