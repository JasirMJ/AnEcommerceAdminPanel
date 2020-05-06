import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"

import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios'
import Base from './Config'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      next: null,
      prev: null,
      loading: true,
    }
  }

  loading = (args) => {
    this.setState({
      loading: args
    })
  }

  componentDidMount() {
    this.fetchAllData()
  }

  next = () => {
    this.loading(true)
    axios.get(
      this.state.next,
      {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
        }
      }
    ).then(response => {
      this.setState({
        data: response.data.results,
        next: response.data.next,
        prev: response.data.previous,
        loading: false,

      })
    })
      .catch(error => {
        NotificationManager.error('Error : ', error, 3000);
      })
  }

  prev = () => {
    this.loading(true)
    axios.get(
      this.state.prev,
      {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('ecommerce_token'),
        }
      }
    ).then(response => {
      this.setState({
        data: response.data.results,
        next: response.data.next,
        prev: response.data.previous,
        loading: false,
      })
    })
      .catch(error => {
        NotificationManager.error('Error : ', error, 3000);
      })
  }

  fetchAllData = () => {
    axios.get(
      Base.url + 'payments/',
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

  render() {
    return (

      <div>
        <div className="page-wrapper">
          <Header />
          {/* <Navigation/> */}

          {/* PAGE CONTAINER */}
          <div className="page-container">
            <HeaderDesktop />
            {/* MAIN CONTENT */}
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <PageHead name="Payements" button="false" />

                  <div className="row">
                    <div className="col-lg-12">
                      {/* <h2 className="title-1 m-b-25">Earnings By Items</h2> */}
                      <div className="table-responsive table--no-card m-b-40">
                        <table className="table table-borderless table-striped table-earning">
                          <thead>
                            <tr>
                              <th>Transaction ID</th>
                              <th>Transaction Date</th>
                              <th>Status</th>
                              <th className="">User</th>
                              <th className="">Mobile</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map((item,index)=>
                              <tr key={index}>
                                <td>{item.transaction_id}</td>
                                <td>{item.transaction_date.slice(0, 10)}</td>
                                <td>{item.status}</td>
                                <td className="">{item.user.user.first_name}</td>
                                <td className="">{item.user.mobile}</td>
                                <td className="text-right">{item.amount}</td>
                              </tr>
                            )}
                            
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