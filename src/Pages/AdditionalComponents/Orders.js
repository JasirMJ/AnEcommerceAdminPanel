import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'

export default class componentName extends PureComponent {
    constructor(){
        super()
        this.state={
            data:[],
            next:null,
            prev:null,
            loading:true,
        }
    }

    edit=()=>{
        console.log('item id',this.props.data.id);
        console.log('item status',this.props.data.status.id);
        this.props.changeStatus(this.props.data.id,this.props.data.status.id,this.props.data.status.name)
    }


    render() {
        console.log('Data ',this.props.data);
        const data = this.props.data
        // const date = new Date(data.date)
        
        return (
            <>
            <tr className="tr-shadow">
                {/* <td>
                    <label className="au-checkbox">
                    <input type="checkbox" />
                    <span className="au-checkmark" />
                    </label>
                </td> */}
                <td>{data.date.slice(0,10)} {data.date.slice(11,19)}</td>
                <td>{data.id}</td>
                <td className="desc">{data.user.user.first_name}</td>
                
                <td className="text-left">{data.user.mobile}</td>
                <td className="text-right">
                    {data.status.name}
                    &nbsp;
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Change status" onClick={this.edit}>
                        <i className="zmdi zmdi-edit" />
                    </button>
                </td>
                <td className="text-right">{data.amount}</td>

                <td>
                    <div className="table-data-feature">
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                        <i className="zmdi zmdi-mail-send" />
                        
                    </button>
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <i className="zmdi zmdi-edit" />
                    </button>
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <i className="zmdi zmdi-delete" />
                    </button>
                    <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                        <i className="zmdi zmdi-more" />
                    </button>
                    </div>
                </td>
                </tr>
                <tr className="spacer" />
                </>
            // <tr>
            //     <td>{data.date.slice(0,10)} {data.date.slice(11,19)}</td>
            //     <td>100398 {data.id}</td>
            //     <td>{data.user.user.first_name}</td>
            //     <td className="text-right">{data.user.mobile}</td>
            //     <td className="text-left">{data.status.name}</td>
            //     <td className="text-right">{data.amount}</td>
            // </tr>
        );
    }
}