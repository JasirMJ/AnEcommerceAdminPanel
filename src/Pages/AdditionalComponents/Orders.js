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


    render() {
        console.log('Data ',this.props.data);
        const data = this.props.data
        // const date = new Date(data.date)
        
        return (
            <tr>
                {/* <td>2018-09-29 05:57</td> */}
                <td>{data.date.slice(0,10)} {data.date.slice(11,19)}</td>
                <td>100398 {data.id}</td>
                <td>{data.user.user.first_name}</td>
                <td className="text-right">{data.user.mobile}</td>
                <td className="text-left">{data.status.name}</td>
                <td className="text-right">{data.amount}</td>
            </tr>
        );
    }
}