import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import axios from 'axios'
import Base from './Config'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Orders from './AdditionalComponents/Orders'


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
  
  render(){
    return (

      <div>
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
                 <PageHead name="Orders" button="true" buttonName="Order"/>
                
                 <div className="row">
                   <div className="col-lg-12">
                     {/* <h2 className="title-1 m-b-25">Earnings By Items</h2> */}
                     <div className="table-responsive table--no-card m-b-40">
                       <table className="table table-borderless table-striped table-earning">
                         <thead>
                           <tr>
                             <th>Date</th>
                             <th>order ID</th>
                             <th>User</th>
                             <th>Phone</th>
                             <th>Status</th>
                             <th className="text-right">Amount</th>
                             {/* <th className="text-right">quantity</th> */}
                           </tr>
                         </thead>
                         <tbody>
                            {this.state.data.map((item,index)=><Orders 
                              data={item} 
                              key={index}
                              />
                              )
                            }

                           {/* <tr>
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
                           </tr> */}
                           
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