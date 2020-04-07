import React from 'react';
// import './App.css';
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"


function App() {
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
            <PageHead name="Payements" button="false" />
           
            <div className="row">
              <div className="col-lg-12">
                {/* <h2 className="title-1 m-b-25">Earnings By Items</h2> */}
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


              {/* <div className="col-lg-3">
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
              </div> */}

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
export default App