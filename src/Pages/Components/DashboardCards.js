import React, { Component } from 'react'

export default class DashboardCards extends Component {
    render() {
        return (
            <div className="row m-t-25">
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c1">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-account-o" />
                      </div>
                      <div className="text">
                        <h2>10368</h2>
                        <span>members online</span>
                      </div>
                    </div>
                    <div className="overview-chart">
                      <canvas id="widgetChart1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c2">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-shopping-cart" />
                      </div>
                      <div className="text">
                        <h2>388,688</h2>
                        <span>items solid</span>
                      </div>
                    </div>
                    <div className="overview-chart">
                      <canvas id="widgetChart2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c3">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-calendar-note" />
                      </div>
                      <div className="text">
                        <h2>1,086</h2>
                        <span>this week</span>
                      </div>
                    </div>
                    <div className="overview-chart">
                      <canvas id="widgetChart3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c4">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-money" />
                      </div>
                      <div className="text">
                        <h2>$1,060,386</h2>
                        <span>total earnings</span>
                      </div>
                    </div>
                    <div className="overview-chart">
                      <canvas id="widgetChart4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


        )
    }
}
