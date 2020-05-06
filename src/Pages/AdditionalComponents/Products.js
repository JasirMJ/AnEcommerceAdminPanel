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

    onClick=()=>{
        
        console.log('data ',this.props.data);
        this.props.select(this.props.data)
    }


    render() {
        const data = this.props.data
        // console.log('data ',data);
        
        return (

            // <div className="col-12 col-md-6 col-lg-4">
            //     <div className="card">
            //         <img className="card-img-top" src={data.image}  alt="Card image cap" />
            //         <div className="card-body">
            //         <h4 className="card-title"><a href="product.html" title="View Product">Product title</a></h4>
            //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //         <div className="row">
            //             <div className="col">
            //             <p className="btn btn-danger btn-block">99.00 $</p>
            //             </div>
            //             <div className="col">
            //             <a href="#" className="btn btn-success btn-block">Add to cart</a>
            //             </div>
            //         </div>
            //         </div>
            //     </div>
            // </div>



                <div className="col-md-3" onClick={this.onClick}>
                    <figure className="card card-product">
                        <div className="img-wrap">
                            <img className="image-size" src={data.image} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#" title="View Product">{data.name}</a></h4>
                            {/* <p className="card-text">stock : {data.stock}</p> */}
                            <div className="row">
                                <div className="col">
                                {/* <p className="btn btn-danger btn-block">99.00 $</p> */}
                                <p className=" btn-block">99.00 $<del className="price-old h6 text-grey">$1980</del></p>
                                </div>
                                {/* <div className="col">
                                <a href="#" className="btn btn-success btn-block">Add to cart</a>
                                </div> */}
                                <div className="col">
                                    <p  className="btn-block"> stock : {data.stock}</p>
                                </div>
                            </div>
                        </div>

                        {/* <figcaption className="info-wrap" onClick={this.onClick}>
                            <h4 className="title text-dots text-capitalize h5 text-center" >
                                {data.name} -  
                                <label className="label h6 text-black-50">
                                stock : {data.stock}
                                </label>
                            </h4>
                            <div className="action-wrap">
                                <div className="price-wrap h6 text-center">
                                    <span className="price-new h6 text-success">{data.rate}</span>
                                    <del className="price-old h6 text-grey">$1980</del>
                                </div>
                            </div>
                        </figcaption> */}
                    </figure>
                </div> 
            

        );
    }
}