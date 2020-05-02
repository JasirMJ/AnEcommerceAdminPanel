import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import DashboardCards from "./Components/DashboardCards"


class App extends React.Component {
  render()
  {
    return (

 <div>
  <div className="page-wrapper">
    <Header/>
    {/* <Navigation/> */}
    
    {/* PAGE CONTAINER */}
    <div className="page-container">
      <HeaderDesktop/>
      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <PageHead name="Dashboard"/>
            <DashboardCards/>
            

            <div className="row">
              <div className="col-lg-6">
                <div className="au-card recent-report">
                  <div className="au-card-inner">
                    <h3 className="title-2">recent reports</h3>
                    <div className="chart-info">
                      <div className="chart-info__left">
                        <div className="chart-note">
                          <span className="dot dot--blue" />
                          <span>products</span>
                        </div>
                        <div className="chart-note mr-0">
                          <span className="dot dot--green" />
                          <span>services</span>
                        </div>
                      </div>
                      <div className="chart-info__right">
                        <div className="chart-statis">
                          <span className="index incre">
                            <i className="zmdi zmdi-long-arrow-up" />25%</span>
                          <span className="label">products</span>
                        </div>
                        <div className="chart-statis mr-0">
                          <span className="index decre">
                            <i className="zmdi zmdi-long-arrow-down" />10%</span>
                          <span className="label">services</span>
                        </div>
                      </div>
                    </div>
                    <div className="recent-report__chart">
                      <canvas id="recent-rep-chart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="au-card chart-percent-card">
                  <div className="au-card-inner">
                    <h3 className="title-2 tm-b-5">char by %</h3>
                    <div className="row no-gutters">
                      <div className="col-xl-6">
                        <div className="chart-note-wrap">
                          <div className="chart-note mr-0 d-block">
                            <span className="dot dot--blue" />
                            <span>products</span>
                          </div>
                          <div className="chart-note mr-0 d-block">
                            <span className="dot dot--red" />
                            <span>services</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="percent-chart">
                          <canvas id="percent-chart" />
                        </div>
                      </div>
                    </div>
                  </div>
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