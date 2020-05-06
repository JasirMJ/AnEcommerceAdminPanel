import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"


import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios'
import Base from './Config'
import AddNotificationModal from './AdditionalComponents/AddNotificationModal';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      next: null,
      prev: null,
      loading: true,
      notificationModal:false,
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
      Base.url + 'notification/',
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
          <AddNotificationModal
            show={this.state.notificationModal}
            onHide={() => this.setState({ notificationModal: false })}
            name={'Notification'}
            save={this.fetchAllData}
          />

          <Header />
          {/* <Navigation/> */}

          {/* PAGE CONTAINER */}
          <div className="page-container">
            <HeaderDesktop />
            {/* MAIN CONTENT */}
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <PageHead name="Notification" buttonName="notification" notification={()=>this.setState({notificationModal:true})} />

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
                              <th>Image</th>
                              <th className="">ID</th>

                              <th>Date</th>
                              <th>Subtitle</th>
                              <th>Message</th>
                              <th className="text-right">Auto Generated</th>
                              <th className="text-right">
                                <button className="au-btn au-btn-icon au-btn--green au-btn--small mr-2" title="previous">
                                  <i className="fa fa-arrow-left text-black-50" aria-hidden="true" /></button>
                                <button className="au-btn au-btn-icon au-btn--green au-btn--small" title="next">
                                  <i className="fa fa-arrow-right text-black-50" aria-hidden="true" /></button>
                              </th>
                              {/* <th className="text-right">quantity</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map((data, index) =>
                              <>
                                <tr className="tr-shadow">
                                  {/* <td>
                              <label className="au-checkbox">
                              <input type="checkbox" />
                              <span className="au-checkmark" />
                              </label>
                          </td> */}
                                  <td className="">
                                    {data.image?
                                    <img style={{height:50,width:50}} src={data.image.image} />
                                    :
                                    "No Image"
                                    }
                                    
                                  </td>
                                  <td>{data.id}</td>
                                  <td>{data.date.slice(0,10)}<br/>{data.date.slice(11,19)}</td>
                                  <td className="desc">{data.sub_title}</td>
                                  <td className="text-left">{data.notification}</td>
                                  
                                  <td className="text-center">{data.is_auto_generated?"Yes":"No"}</td>

                                  <td>
                                    <div className="table-data-feature">
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="Send" onClick={() => alert("Not decided")}>
                                        <i className="zmdi zmdi-mail-send" />

                                      </button>
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={() => alert("Not decided")}>
                                        <i className="zmdi zmdi-edit" />
                                      </button>
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => alert("Not decided")}>
                                        <i className="zmdi zmdi-delete" />
                                      </button>
                                      <button className="item" data-toggle="tooltip" data-placement="top" title="More" onClick={() => alert("Noting to show")}>
                                        <i className="zmdi zmdi-more" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="spacer" />
                              </>

                            )
                            }
                          </tbody>
                        </table>
                      </div>
                      {/* END DATA TABLE */}


                    </div>
                  </div>
                </div>
                {/* END MAIN CONTENT
      END PAGE CONTAINER */}
              </div>
            </div>

          </div>
        </div>

      </div>

    );
  }
}
export default App