import React, { Component } from 'react';
import './Admin.css';

import Table from './Admin/Table';


class Admin extends Component {
    //use isPageAutorized and comcomponentDidMount() { isPageAutorized();} to check if page has permisions
    // =============================================
    isPageAutorized() {
        const pageUrl = this.props.match.path || '';
        fetch('http://localhost:8000/auth/isAuthorized', {
            method: 'POST', headers: {
                'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            , body: JSON.stringify({
                requestedPage: pageUrl
            }
            ),
        }
        ).then(response => response.json()).then(res => {
            console.dir(res) //if no permision, redirect to login page
            if (res.permision == false) {
                this.props.redirectAfterFetch(res);
            }
        }
        ).catch(err => console.error(err))
    }
    componentDidMount() {
        this.isPageAutorized();
    } // ===================================

    searchByEmail(e) {
        e.preventDefault();
        console.log('search')
    }
    constructor(props) {
        super(props);
        this.state = {
            results: [{ email: 'jdfhdskjdhfskjdhfksd@fff.net', role: 'teacher', expDate:'13/8/2020'}]
        }
        this.searchBy = 'email';
        this.search = this.search.bind(this)
    }

    search(e) {
        e.preventDefault();
        let searchTerm = e.target[0].value.toString();
        searchTerm.replace('\+', '\\+')
        console.log(this.searchBy)
        
        fetch(`http://localhost:8000/search/by/${this.searchBy}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                searchTerm: searchTerm,
                requestedPage: '/admin'
            }),
        })
            .then(response => response.json())
            .then(res => {
                this.setState({results:res})
               console.dir(res)
            }).catch(err => console.error(err))
        // })
    }
    searchNew(e) {
        
    }

    render() {
        return (
            <div className='adminWrapper' dir='ltr'>
                <h1>Admin Panel</h1>
                <h3>Search for users</h3>
                <form onSubmit={this.search} className='searchForm'>                    
                    <input type='text' placeholder='email' />
                    <div className='adminButtons'>
                        <button type='submit' className='button' onClick={()=>{this.searchBy = 'email'}}>by email</button>
                        <button type='submit' className='button' onClick={() => { this.searchBy = 'name' }}>by name</button>
                        <button className='button' onClick={this.searchNew}>Show new</button>
                        <button className='button '>clear</button>
                    </div>
                </form>
                <Table results={this.state.results} />
            </div>
                )
        }
    }
    
export default Admin;