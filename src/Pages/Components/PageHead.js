import React, { Component } from 'react'

export default class PageHead extends Component {
    render() {
        const heading = this.props.name
        
        return (
            <div className="row">
              <div className="col-md-12">
                <div className="overview-wrap">
                  <h2 className="title-1">{heading}</h2>
                  {this.props.button==="true"?
                  <button className="au-btn au-btn-icon au-btn--blue">
                  <i className="zmdi zmdi-plus" />{this.props.buttonName?this.props.buttonName:"buttonName unknown"}</button>
                  :
                  ""
                  }
                  
                </div>
              </div>
            </div>
        )
    }
}
