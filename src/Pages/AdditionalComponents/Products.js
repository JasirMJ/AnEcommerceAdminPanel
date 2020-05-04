import axios from 'axios'
import Base from '../Config'
import React, { Component, PureComponent } from 'react'
import {
    Link
} from "react-router-dom";
import '../product.css'

export default class componentName extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: [],
            next: null,
            prev: null,
            loading: true,
        }
    }


    render() {
        const data = this.props.data
        console.log('data ',data);
        
        return (

                <div className="col-md-3">
                    <figure className="card card-product">
                        <div className="img-wrap">
                            {/* <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> */}
                            <img  src={data.image} />
                            {/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus" /> Quick view</a> */}
                        </div>
                        
            <Link 
            style={{cursor:"pointer"}}
                to={{ pathname: '/products/' + data.id }}
            >
                        <figcaption className="info-wrap">
                            <h4 className="title text-dots text-capitalize h5 text-center" >{data.name}</h4>
                            <div className="action-wrap">
                                {/* <a href="#" className="btn btn-primary btn-sm float-right"> Order </a> */}
                                <div className="price-wrap h6 text-center">
                                    <span className="price-new h6 text-success">{data.rate}</span>
                                    <del className="price-old h6 text-grey">$1980</del>
                                </div>
                            </div>
                        </figcaption>
                        </Link>
                    </figure>
                </div>
            

        );
    }
}