import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <>
            {/* MENU SIDEBAR */}
            <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <a href="#">
                <img src="images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                <ul className="list-unstyled navbar__list">
                    <li>
                    <Link to="/"> <i className="fas fa-tachometer-alt" />Dashboard</Link>
                    </li>

                    <li>
                    <Link to="/orders">   <i className="fas fa-chart-bar" />Orders</Link>
                    </li>
                    <li>
                    <Link to="/users">   <i className="fas fa-chart-bar" />Users</Link>
                    </li>
                    
                    <li>
                    <Link to="/products">   <i className="fas fa-chart-bar" />Products</Link>
                    </li>
                    <li>
                    <Link to="/payements">   <i className="fas fa-chart-bar" />Payements</Link>
                    </li>
                    <li>
                    <Link to="/notifications">   <i className="fas fa-chart-bar" />Notification</Link>
                    </li>
                    <li>
                    <Link to="/categorys">   <i className="fas fa-chart-bar" />Category</Link>
                    </li>
                    <li>
                    <Link to="/brands">   <i className="fas fa-chart-bar" />Brand</Link>
                    </li>
                    <li>
                    <Link to="/pd">   <i className="fas fa-chart-bar" />Pd</Link>
                    </li>
                </ul>
                </nav>
            </div>
            </aside>
            {/* END MENU SIDEBAR */}
            </>
        )
    }
}
