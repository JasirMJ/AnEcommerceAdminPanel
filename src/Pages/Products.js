import React, { Component, PureComponent } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import {
    Link
} from "react-router-dom";
import "./product.css"

class ProductsComponent extends PureComponent{
    render(){
        const data = this.props.data
        return(
          <div className="col-md-3">
            <figure className="card card-product">
              <div className="img-wrap"> 
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" />
                {/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus" /> Quick view</a> */}
              </div>
              <figcaption className="info-wrap">
              <Link 
                to={{ pathname: '/products/'+data.id}}
                >

                <h4 className="title text-dots text-capitalize">{data.name}</h4>
              </Link>
                <div className="action-wrap">
                  {/* <a href="#" className="btn btn-primary btn-sm float-right"> Order </a> */}
                  <div className="price-wrap h5">
                    <span className="price-new">$1280</span>
                    <del className="price-old">$1980</del>
                  </div> 
                </div> 
              </figcaption>
            </figure> 
          </div> 

            // <div class="col-lg-3">
            //     <div class="au-card m-b-30">
            //         <div class="au-card-inner">
            //             <Link 
            //             to={{ pathname: '/products/'+data.id}}
            //             ><h3 className="title-2 m-b-40">{data.name}</h3></Link>
            //         <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" />
            //         </div>
            //     </div>
            // </div>
            
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
    {/* <Navigation/> */}
    
    {/* PAGE CONTAINER */}
    <div className="page-container">
      <HeaderDesktop searchplaceholder="Search product" searchbutton="product"/>
      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
          <PageHead name="Products"/>
          
        <div class="row mt-3">
         
            {this.state.data.map((item,index)=><ProductsComponent data={item} key={index}/>)}

        </div>
          </div>
        </div>
      </div>
      {/* END MAIN CONTENT */}
      {/* END PAGE CONTAINER */}
    </div>
  </div>
  
</div>

        )
    }
}
