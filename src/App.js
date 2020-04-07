import Dashboard from "./Pages/Dashboard"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"
import Order from "./Pages/Order"
import Users from "./Pages/Users"
import Category from "./Pages/Category"
import Brand from "./Pages/Brand"
import Payements from "./Pages/Payements"
import Notification from "./Pages/Notification"

import Pd from "./Pages/Pd"

import React from "react";
import { Offline, Online } from "react-detect-offline";

// import logo from './Pages/assets/img/brand/blue.png'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import animationData from './Pages/817-no-internet-connection.json'
import Lottie from 'react-lottie';

const he="100vh"
const wi="108%"
export default class App extends React.Component {
    constructor(props) {
        super(props);
        
      }
    
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                <Online>
                <HashRouter>
                        <Router>
                            <div>
                                <Switch>
                                    <Route exact path="/products"><Products /></Route>
                                    <Route exact path="/products/:id" component={ProductDetails}></Route>
                                    <Route exact path="/orders" component={Order}></Route>
                                    <Route exact path="/users" component={Users}></Route>
                                    <Route exact path="/payements" component={Payements}></Route>
                                    <Route exact path="/notifications" component={Notification}></Route>
                                    <Route exact path="/brands" component={Brand}></Route>
                                    <Route exact path="/categorys" component={Category}></Route>
                                    <Route exact path="/pd" component={Pd}></Route>
                                    <Route exact  path="/"><Dashboard /></Route>  
                                </Switch>
                            </div>
                        </Router>
                    </HashRouter>
                </Online>

                <Offline>
                    <div style={{height:"100vh",display:'flex',backgroundColor:"#FCFDFF"}}>
                        <div style={{flex:1,display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <div>
                            <Lottie options={defaultOptions}
                                    height={200}
                                    width={400}
                            />
                                {/* <img src={wifi}/> */}
                            </div>
                            <div>No Internet , Please check your connection</div>
                            <br/>
                            <div>
                                {/* <img style={{height:50,width:50}} src={logo}/> */}

                            </div>
                        </div>
                    </div>
                </Offline>
            </div>
        );
    }
}
