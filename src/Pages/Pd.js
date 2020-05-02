import React, { Component } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import "../assets/css/mycustom.css"
import "./product.css"



const ImageMain = {
  width:"100%",
  height:"100%",
};
const FileInputPlus = {
  height:100,
  width:100,
  backgroundColor:"black",
  opacity:0.5,
  borderRadius:10,
};



export default class ProductDetails extends Component {
    state={
      selectedFile1:null,
      selectedFile2:null,
      selectedFile3:null,
    }
    componentDidMount(){
        this.getid()
    }
    getid=()=>{
        // const id = this.props.match.params.id //  working
        // console.log('id = ',id);
        this.setState({
            id:"id"
        })
        
    }

    fileSelectHandler = event =>{
      this.setState({
        [event.target.name]:event.target.files[0]
      },()=>{
        console.log('selected file ',this.state);
        
      })
    }
    fileUploadHandler=()=>{
      console.log('file upload');
      
    }
    render() {
        
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
                    <PageHead name="Products"/>
                    

                    <div className="row">
              	<div className="card">
                    <div className="row">
                      <aside className="col-sm-6 border-right">
                        <article className="gallery-wrap"> 
                          <div className="img-big-wrap">
                            <div> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /></div>
                          </div> {/* slider-product.// */}
                          <div className="img-small-wrap">
                            <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                            <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                            <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                            <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                            <div className="item-gallery"> <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" /> </div>
                          </div> {/* slider-nav.// */}
                        </article> {/* gallery-wrap .end// */}
                      </aside>
                      <aside className="col-sm-6">
                        <article className="card-body p-5">
                          <h3 className="title mb-3">Original Version of Some product name</h3>
                          <p className="price-detail-wrap"> 
                            <span className="price h3 text-warning"> 
                              <span className="currency">US $</span><span className="num">1299</span>
                            </span> 
                            <span>/per kg</span> 
                          </p> {/* price-detail-wrap .// */}
                          <dl className="item-property">
                            <dt>Description</dt>
                            <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco </p></dd>
                          </dl>
                          <dl className="param param-feature">
                            <dt>Model#</dt>
                            <dd>12345611</dd>
                          </dl>  {/* item-property-hor .// */}
                          <dl className="param param-feature">
                            <dt>Color</dt>
                            <dd>Black and white</dd>
                          </dl>  {/* item-property-hor .// */}
                          <dl className="param param-feature">
                            <dt>Delivery</dt>
                            <dd>Russia, USA, and Europe</dd>
                          </dl>  {/* item-property-hor .// */}
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <dl className="param param-inline">
                                <dt>Quantity: </dt>
                                <dd>
                                  <select className="form-control form-control-sm" style={{width: 70}}>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                  </select>
                                </dd>
                              </dl>  {/* item-property .// */}
                            </div> {/* col.// */}
                            <div className="col-sm-7">
                              <dl className="param param-inline">
                                <dt>Size: </dt>
                                <dd>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <span className="form-check-label">SM</span>
                                  </label>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <span className="form-check-label">MD</span>
                                  </label>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <span className="form-check-label">XXL</span>
                                  </label>
                                </dd>
                              </dl>  {/* item-property .// */}
                            </div> {/* col.// */}
                          </div> {/* row.// */}
                          <hr />
                          <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                          <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart" /> Add to cart </a>
                        </article> {/* card-body.// */}
                      </aside> {/* col.// */}
                    </div> {/* row.// */}
                  </div> {/* card.// */}
   
                  </div>

          
          
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        )
    }
}
