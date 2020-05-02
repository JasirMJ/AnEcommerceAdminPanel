import axios from 'axios'
import Base from '../Config'
import React, { Component ,PureComponent } from 'react'
import Switch from "react-switch";

export default class componentName extends PureComponent {
    constructor(){
        super()
        this.state={
           
            checked:false
        }
    }

    handleChange=(checked)=> {
        console.log('worked');
        
    }


    render() {
        console.log('Data ',this.props.data);
        const data = this.props.data
        // const date = new Date(data.date)
        
        return (
            <tr>
                {/* <td>2018-09-29 05:57</td>
                <td>100398</td>
                <td>iPhone X 64Gb Grey</td> */}
                <td>{data.user.fisrt_name?
                <label title="first name">{data.user.fisrt_name}</label>
                
                :
                <label title="Username">{data.user.username}</label>
                
                }</td>
                <td>
                <label title="Username">{data.user.username}</label><br/>
                <label title="Email">{data.user.email}</label><br/>
                <label title="Mobile">{data.mobile}</label><br/>
                </td>
                <td><Switch onChange={this.handleChange} checked={data.is_active} offColor={'#FF0000'} /></td>

                {/* <td className="text-right">$999.00</td>
                <td className="text-right">1</td>
                <td className="text-right">$999.00</td> */}
            </tr>
        );
    }
}