import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'

// import EditCategoryModal from './EditCategoryModal'

export default class CategoryList extends PureComponent {
    constructor(){
        super()
        this.state={
            data:[],
            next:null,
            prev:null,
            loading:true,

            editModal: false,
            
        }
    }

    edit=()=>{
        // this.setState({ editModal: true })
        this.props.edit(this.props.data)

        // console.log('item id',this.props.data.id);
        // console.log('item status',this.props.data.status.id);
        // this.props.changeStatus(this.props.data.id,this.props.data.status.id,this.props.data.status.name)

    }
    delete=()=>{
        this.props.delete(this.props.data.id)
    }

    render() {
        // console.log('Data ',this.props.data);
        // console.log('parentData ',this.props.parentData);
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
                {/* <td></td> */}
                <td>{data.id}</td>
                <td className="text-capitalize h5">
                    {data.name}
                </td>
                <td className="text-capitalize h5 desc">
                    {data.parent?data.parent.name:"Main Category"}
                </td>
{/*                 
                <td className="text-left">{data.user.mobile}</td>
                <td className="text-right">
                    {data.status.name}
                    &nbsp;
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Change status" onClick={this.edit}>
                        <i className="zmdi zmdi-edit" />
                    </button>
                </td>
                <td className="text-right">{data.amount}</td>
*/}
                <td>
                    <div className="table-data-feature">
                    {/* <button className="item" data-toggle="tooltip" data-placement="top" title="Send" onClick={()=>alert("Not decided")}>
                        <i className="zmdi zmdi-mail-send" />
                    </button> */}
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={this.edit}>
                        <i className="zmdi zmdi-edit" />
                    </button>
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={this.delete}>
                        <i className="zmdi zmdi-delete " />
                    </button>
                    {/* <button className="item" data-toggle="tooltip" data-placement="top" title="More" onClick={()=>alert("fayis : detailed view of single order api required")}>
                        <i className="zmdi zmdi-more" />
                    </button> */}
                    </div>
                </td> 
                </tr>
                <tr className="spacer" />
                </>
        );
    }
}