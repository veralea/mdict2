import React, { Component } from 'react';
import './Table.css';
import Tr from './Tr';

class Table extends Component {


    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    render() {
        console.log(this.props)
        console.log(this.props.results.length)
        return (
            <div>
                {this.props.results.length > 0 ?
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Expire date</th>
                                <th>Role</th>
                                <th colSpan='3'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.results.map((result, index) => {
                                    return (
                                        <Tr result={result} key={index} toBeDeleted={this.props.toBeDeleted}/>
                                    )
                                })
                            }
                        </tbody>
                    </table >
                    :
                    <div />
                }
            </div>
        )
    }
}



export default Table;