import React, { Component } from 'react'

export default class PageHead extends Component {
  submit=(e)=>{
    console.log('clicked ',this.props.buttonName);
    if(this.props.buttonName==="product"){
      this.props.product()
    }
    else if(this.props.buttonName==="category"){
      this.props.category()
    }
    else if(this.props.buttonName==="brand"){
      this.props.brand()
    }
    else if(this.props.buttonName==="notification"){
      this.props.notification()
    }
    else{
      console.log('undefined function call');
    }
  }

  render() {
      const heading = this.props.name
      
      return (
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap pb-2">
                <h2 className="title-1">{heading}</h2>
                {this.props.buttonName?
                  <button onClick={this.submit} className="au-btn au-btn-icon au-btn--blue" >
                  <i className="zmdi zmdi-plus" />{this.props.buttonName}</button>
                  :
                  ""
                }
                
              </div>
            </div>
          </div>
      )
  }
}
