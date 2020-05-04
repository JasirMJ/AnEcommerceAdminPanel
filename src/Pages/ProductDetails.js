import React, { Component } from 'react'
import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import HeaderDesktop from "./Components/HeaderDesktop"
import PageHead from "./Components/PageHead"
import "../assets/css/mycustom.css"



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
      alert("fayis : Single product api required")
      this.getid()
    }
    getid=()=>{
        const id = this.props.match.params.id //  working
        console.log('id = ',id);
        this.setState({
            id:id
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
        const pageName = "Product / "+this.state.id
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
                    <PageHead name={pageName}/>
                    
                  <div className="row mt-3">
                    <div className="au-card col-lg-12">

                    <div className="row">
              <div className="col-lg-8">
                <div className="table-responsive table--no-card m-b-40">
                <img style={ImageMain}
                    src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg" />
                    <br/>
                    <br/>

                

                <input 
                    name="selectedFile1"
                    style={{
                    display:"none",
                    }}
                    
                    onChange={this.fileSelectHandler}
                    type="file"
                    ref={fileInput1=>this.fileInput1=fileInput1}
                /> 

                <button
                className="ml-2"
                style={FileInputPlus}
                onClick={()=>this.fileInput1.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>
                
                <input 
                    name="selectedFile2"
                    style={{display:"none"}}
                    onChange={this.fileSelectHandler}
                    type="file"
                    ref={fileInput2=>this.fileInput2=fileInput2}
                /> 
                <button 
                    className="ml-2"
                    style={FileInputPlus}
                    onClick={()=>this.fileInput2.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>

                <input 
                    name="selectedFile3"
                    style={{display:"none"}}
                    onChange={this.fileSelectHandler}
                    type="file"
                    ref={fileInput3=>this.fileInput3=fileInput3}
                /> 
                <button 
                    className="ml-2"
                    style={FileInputPlus}
                    onClick={()=>this.fileInput3.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>

        
                <input 
                    name="selectedFile4"
                    style={{display:"none"}}
                    onChange={this.fileSelectHandler}
                    type="file"
                    ref={fileInput4=>this.fileInput4=fileInput4}
                /> 
                <button 
                    className="ml-2"
                    style={FileInputPlus}
                    onClick={()=>this.fileInput4.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>
                
                <input 
                    name="selectedFile5"
                    style={{display:"none"}}
                    onChange={this.fileSelectHandler}
                    type="file"
                    ref={fileInput5=>this.fileInput5=fileInput5}
                /> 
                <button 
                    className="ml-2"
                    style={FileInputPlus}
                    onClick={()=>this.fileInput5.click()} ><i className="fa fa-plus fa-4x text-white" aria-hidden="true"></i></button>

        
                
                </div>
              </div>

              <div className="col-lg-4">
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
            </div>
                    </div>
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
