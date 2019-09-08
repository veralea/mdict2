import React, { Component } from 'react';


class Tr extends Component {

    constructor(props) {
        super(props);

        let userRole = 'public'
        if (props.result.hasOwnProperty('role')) {
            userRole = props.result.role.toLowerCase()
        }

        let expDate = new Date(props.result.expDate) || undefined;
        
        if (isNaN(expDate.getTime())) {
            expDate ='--'
        }
        this.state = {
            isEdit: false,
            role: userRole,
            expDate: expDate 
        }

        console.dir(this.state)

        this.roleChange = this.roleChange.bind(this);
        this.addSubsractYear = this.addSubsractYear.bind(this);
        this.setToRoleExpToDB = this.setToRoleExpToDB.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    roleChange(e) {
        let previousRole = this.state.role;
        let newRole = e.currentTarget.value.toLowerCase()
        this.setState({ role: e.currentTarget.value.toLowerCase() });

        if (previousRole == 'public' && newRole !== 'public') {

            //add one year from now automaticly
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let plusYear = new Date(year + 1, month, day)

            this.setState({ expDate: plusYear })
        } else if (newRole === 'public') {
            this.setState({ expDate: undefined })
        }
    }
    convertDate(oldDate1, outputType) {
        let oldDate = new Date(oldDate1);
       
        if (outputType == 'input') {
            if (!isNaN(oldDate.getTime())) {
                let year = oldDate.getFullYear();
                let month = (oldDate.getMonth() + 1).toString();
                if (month.length == 1) { month = `0${month}` };
                let day = (oldDate.getDate()).toString();
                if (day.length == 1) { day = `0${day}` };
                // console.log(`${year+1}-${month}-${day}`)
                return `${year}-${month}-${day}`
            }

            return undefined;
        } else {
            if (!isNaN(oldDate.getTime()))  {
                let year = oldDate.getFullYear();
                let month = (oldDate.getMonth() + 1).toString();
                if (month.length == 1) { month = `0${month}` };
                let day = (oldDate.getDate()).toString();
                if (day.length == 1) { day = `0${day}` };
                // console.log(`${year+1}-${month}-${day}`)
                return `${day}/${month}/${year}`
            }

            return '--';

        }
    }
    addSubsractYear(plusMinus) {
        let currentExpDate = this.state.expDate;
        if (Object.prototype.toString.call(currentExpDate) == "[object Date]") {
            // let d = new Date();
            let year = currentExpDate.getFullYear();
            let month = currentExpDate.getMonth();
            let day = currentExpDate.getDate();
            this.setState({ expDate: new Date(year + plusMinus, month, day) });
        } else {
            console.assert(false, 'this.state.expDate is not a date object', this.state.expDate);
        }
    }

    setToRoleExpToDB() {
        console.dir(this.props.result)

        fetch(`http://localhost:8000/write/roleNExpDate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                _id: this.props.result._id,
                expDate: this.state.expDate,
                role: this.state.role,
                requestedPage: '/admin'
            }),
        })
            .then(response => response.json())
            .then(res => {               
                console.dir(res)
            }).catch(err => console.error(err))

    }

    changePassword() {
        let newPassword = prompt("please insert new password");
        if (newPassword !== null) {
            fetch(`http://localhost:8000/write/updatePassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    _id: this.props.result._id,
                    newPassword: newPassword,
                    requestedPage: '/admin'
                }),
            })
                .then(response => response.json())
                .then(res => {
                    console.dir(res)
                }).catch(err => console.error(err))
        }
    }

    render() {
        return (
            <tr>
                < td > {this.props.result.name}</td>
                <td className='tableEmail'>{this.props.result.email}</td>
                {!this.state.isEdit ?
                    <td>{this.convertDate(this.state.expDate, 'dom')}</td>
                    :
                    <td className='inputDateTD'>
                        <div className='plusMinusDate' onClick={() => this.addSubsractYear(-1)}>-</div>
                        <input type='date'
                            value={this.convertDate(this.state.expDate, 'input')}
                            onInput={(e) => {
                                console.log(e.currentTarget.value)
                                this.setState({ expDate: e.currentTarget.value })
                            }}
                        />
                        <div className='plusMinusDate' onClick={() => this.addSubsractYear(1)}>+</div>
                    </td>
                }
                {!this.state.isEdit ?
                    <td>{this.state.role}</td>
                    :

                    <td>
                        <select onChange={this.roleChange}>
                            <option>Public</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                        </select>
                    </td>
                }

                <td className='adminTdBtn'>
                    <div className='button adminBtn' onClick={this.changePassword}>
                        change password
                        </div>
                </td>
                <td className='adminTdBtn'>
                    <div
                        className='button adminBtn'
                        onClick={() => {
                            this.setState({ isEdit: !this.state.isEdit });
                            if (this.state.isEdit) {
                                this.setToRoleExpToDB()
                            }
                        }}
                    >{!this.state.isEdit ? 'edit' : 'set'}</div>
                </td>
                <td className='adminTdBtn'>
                    <div className='button adminBtn'
                        onClick={() => { this.props.toBeDeleted(this.props.result) }}
                    >
                        delete
                        </div>
                </td>
            </tr>
        )
    }
}

export default Tr;


