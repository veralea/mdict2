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
       
    }
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            toBeDeleted: {}
        }
        this.searchBy = 'email';
        this.search = this.search.bind(this);
        this.handleToBeDeleted = this.handleToBeDeleted.bind(this);
        this.searchNew = this.searchNew.bind();
    }

    handleToBeDeleted(toDeleteUserObj) {
     
        // this.setState({ toBeDeleted: toDeleteUserObj})
        let toDelete = confirm(`Are you sure you want to delete ${toDeleteUserObj.email} ${toDeleteUserObj.name||''}`)
        
        if (toDelete) {
            fetch(`http://localhost:8000/write/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    _id: toDeleteUserObj._id,
                    requestedPage: '/admin'
                }),
            })
                .then(response => response.json())
                .then(res => {
                   
                    //search and delte from DOM
                    
                    let tempResults = this.state.results;
                    let resultIndex = tempResults.findIndex(result => result._id === toDeleteUserObj._id);
                    if (resultIndex > -1) {
                        tempResults.splice(resultIndex, 1);
                    }
                    this.setState({ results: tempResults})
                  
                }).catch(err => console.error(err))
        }
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
              
            }).catch(err => console.error(err))
        // })
    }
    searchNew(e) {
        e.stopPropagation();
        console.log('search new')
        fetch(`http://localhost:8000/search/by/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({               
                requestedPage: '/admin'
            }),
        })
            .then(response => response.json())
            .then(res => {
                console.dir(res);
                this.setState({ results: res })

            }).catch(err => console.error(err))
        
    }

    render() {
        return (
            <div className='adminWrapper' dir='ltr'>
                <h1>Admin Panel</h1>
                <h3>Search for users</h3>
                <form onSubmit={this.search} className='searchForm'>                    
                    <input type='text' placeholder='Email or Name' />
                    <div className='adminButtons'>
                        <button type='submit' className='button' onClick={()=>{this.searchBy = 'email'}}>by email</button>
                        <button type='submit' className='button' onClick={() => { this.searchBy = 'name' }}>by name</button>
                        <button type='submit' className='button' onClick={() => { this.searchBy = 'new' }}>New</button>
                        
                        <button className='button '>clear</button>
                    </div>
                </form>
                <Table results={this.state.results} toBeDeleted={this.handleToBeDeleted} />
            </div>
                )
        }
    }
    
export default Admin;