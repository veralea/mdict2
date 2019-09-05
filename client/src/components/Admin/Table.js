import React, { Component } from 'react';
import './Table.css';


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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.results.map((result, index) => {
                                    return (
                                        < tr key={index} >
                                            <td>{result.name}</td>
                                            <td className='tableEmail'>{result.email}</td>
                                            <td>{result.expDate}</td>
                                            <td>{result.role}</td>
                                            <td><div className='adminDeleteBtn'>DELETE</div></td>
                                        </tr>
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