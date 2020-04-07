import React, { Component, PureComponent } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import {
    Link
} from "react-router-dom";

class ProductsComponent extends PureComponent{
    render(){
        const data = this.props.data
        return(
            <div class="col-lg-3">
                <div class="au-card m-b-30">
                    <div class="au-card-inner">
                        <Link 
                        to={{ pathname: '/products/'+data.id}}
                        ><h3 className="title-2 m-b-40">{data.name}</h3></Link>
                        <canvas id="sales-chart"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Products extends Component {
    constructor(){
        super()
        this.state={
            data:[
                {id:1,name:"apple"},
                {id:2,name:"mango"},
                {id:3,name:"grape"},
                {id:4,name:"apple"},
                {id:5,name:"apple"},
                {id:6,name:"apple"},
            ]
        }
    }
    
    render() {
        return (
            <div>
  <div className="page-wrapper">
    <Header/>
    <Navigation/>
    
    {/* PAGE CONTAINER */}
    <div className="page-container">
      <HeaderDesktop/>
      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
          <PageHead name="Products"/>
          
        <div class="row mt-3">
            {this.state.data.map((item,index)=><ProductsComponent data={item} key={index}/>)}

        </div>


            <div className="row">
              <div className="col-lg-9">
                <h2 className="title-1 m-b-25">Earnings By Items</h2>
                <div className="table-responsive table--no-card m-b-40">
                  <table className="table table-borderless table-striped table-earning">
                    <thead>
                      <tr>
                        <th>date</th>
                        <th>order ID</th>
                        <th>name</th>
                        <th className="text-right">price</th>
                        <th className="text-right">quantity</th>
                        <th className="text-right">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-3">
                <h2 className="title-1 m-b-25">Top countries</h2>
                <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
                  <div className="au-card-inner">
                    <div className="table-responsive">
                      <table className="table table-top-countries">
                        <tbody>
                          <tr>
                            <td>United States</td>
                            <td className="text-right">$119,366.96</td>
                          </tr>
                          <tr>
                            <td>Australia</td>
                            <td className="text-right">$70,261.65</td>
                          </tr>
                          <tr>
                            <td>United Kingdom</td>
                            <td className="text-right">$46,399.22</td>
                          </tr>
                          <tr>
                            <td>Turkey</td>
                            <td className="text-right">$35,364.90</td>
                          </tr>
                          <tr>
                            <td>Germany</td>
                            <td className="text-right">$20,366.96</td>
                          </tr>
                          <tr>
                            <td>France</td>
                            <td className="text-right">$10,366.96</td>
                          </tr>
                          <tr>
                            <td>Australia</td>
                            <td className="text-right">$5,366.96</td>
                          </tr>
                          <tr>
                            <td>Italy</td>
                            <td className="text-right">$1639.32</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                  <div className="au-card-title" style={{backgroundImage: 'url("images/bg-title-01.jpg")'}}>
                    <div className="bg-overlay bg-overlay--blue" />
                    <h3>
                      <i className="zmdi zmdi-account-calendar" />26 April, 2018</h3>
                    <button className="au-btn-plus">
                      <i className="zmdi zmdi-plus" />
                    </button>
                  </div>
                  <div className="au-task js-list-load">
                    <div className="au-task__title">
                      <p>Tasks for John Doe</p>
                    </div>
                    <div className="au-task-list js-scrollbar3">
                      <div className="au-task__item au-task__item--danger">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Meeting about plan for Admin Template 2018</a>
                          </h5>
                          <span className="time">10:00 AM</span>
                        </div>
                      </div>
                      <div className="au-task__item au-task__item--warning">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Create new task for Dashboard</a>
                          </h5>
                          <span className="time">11:00 AM</span>
                        </div>
                      </div>
                      <div className="au-task__item au-task__item--primary">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Meeting about plan for Admin Template 2018</a>
                          </h5>
                          <span className="time">02:00 PM</span>
                        </div>
                      </div>
                      <div className="au-task__item au-task__item--success">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Create new task for Dashboard</a>
                          </h5>
                          <span className="time">03:30 PM</span>
                        </div>
                      </div>
                      <div className="au-task__item au-task__item--danger js-load-item">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Meeting about plan for Admin Template 2018</a>
                          </h5>
                          <span className="time">10:00 AM</span>
                        </div>
                      </div>
                      <div className="au-task__item au-task__item--warning js-load-item">
                        <div className="au-task__item-inner">
                          <h5 className="task">
                            <a href="#">Create new task for Dashboard</a>
                          </h5>
                          <span className="time">11:00 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="au-task__footer">
                      <button className="au-btn au-btn-load js-load-btn">load more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                  <div className="au-card-title" style={{backgroundImage: 'url("images/bg-title-02.jpg")'}}>
                    <div className="bg-overlay bg-overlay--blue" />
                    <h3>
                      <i className="zmdi zmdi-comment-text" />New Messages</h3>
                    <button className="au-btn-plus">
                      <i className="zmdi zmdi-plus" />
                    </button>
                  </div>
                  <div className="au-inbox-wrap js-inbox-wrap">
                    <div className="au-message js-list-load">
                      <div className="au-message__noti">
                        <p>You Have
                          <span>2</span>
                          new messages
                        </p>
                      </div>
                      <div className="au-message-list">
                        <div className="au-message__item unread">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap">
                                <div className="avatar">
                                  <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">John Smith</h5>
                                <p>Have sent a photo</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>12 Min ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="au-message__item unread">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap online">
                                <div className="avatar">
                                  <img src="images/icon/avatar-03.jpg" alt="Nicholas Martinez" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">Nicholas Martinez</h5>
                                <p>You are now connected on message</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>11:00 PM</span>
                            </div>
                          </div>
                        </div>
                        <div className="au-message__item">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap online">
                                <div className="avatar">
                                  <img src="images/icon/avatar-04.jpg" alt="Michelle Sims" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">Michelle Sims</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>Yesterday</span>
                            </div>
                          </div>
                        </div>
                        <div className="au-message__item">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap">
                                <div className="avatar">
                                  <img src="images/icon/avatar-05.jpg" alt="Michelle Sims" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">Michelle Sims</h5>
                                <p>Purus feugiat finibus</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>Sunday</span>
                            </div>
                          </div>
                        </div>
                        <div className="au-message__item js-load-item">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap online">
                                <div className="avatar">
                                  <img src="images/icon/avatar-04.jpg" alt="Michelle Sims" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">Michelle Sims</h5>
                                <p>Lorem ipsum dolor sit amet</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>Yesterday</span>
                            </div>
                          </div>
                        </div>
                        <div className="au-message__item js-load-item">
                          <div className="au-message__item-inner">
                            <div className="au-message__item-text">
                              <div className="avatar-wrap">
                                <div className="avatar">
                                  <img src="images/icon/avatar-05.jpg" alt="Michelle Sims" />
                                </div>
                              </div>
                              <div className="text">
                                <h5 className="name">Michelle Sims</h5>
                                <p>Purus feugiat finibus</p>
                              </div>
                            </div>
                            <div className="au-message__item-time">
                              <span>Sunday</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="au-message__footer">
                        <button className="au-btn au-btn-load js-load-btn">load more</button>
                      </div>
                    </div>
                    <div className="au-chat">
                      <div className="au-chat__title">
                        <div className="au-chat-info">
                          <div className="avatar-wrap online">
                            <div className="avatar avatar--small">
                              <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                            </div>
                          </div>
                          <span className="nick">
                            <a href="#">John Smith</a>
                          </span>
                        </div>
                      </div>
                      <div className="au-chat__content">
                        <div className="recei-mess-wrap">
                          <span className="mess-time">12 Min ago</span>
                          <div className="recei-mess__inner">
                            <div className="avatar avatar--tiny">
                              <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                            </div>
                            <div className="recei-mess-list">
                              <div className="recei-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                              <div className="recei-mess">Donec tempor, sapien ac viverra</div>
                            </div>
                          </div>
                        </div>
                        <div className="send-mess-wrap">
                          <span className="mess-time">30 Sec ago</span>
                          <div className="send-mess__inner">
                            <div className="send-mess-list">
                              <div className="send-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="au-chat-textfield">
                        <form className="au-form-icon">
                          <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                          <button className="au-input-icon">
                            <i className="zmdi zmdi-camera" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">
                  <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      END MAIN CONTENT
      END PAGE CONTAINER
    </div>
  </div>
  Jquery JS
  Bootstrap JS
  Vendor JS 
  Main JS
</div>

        )
    }
}
