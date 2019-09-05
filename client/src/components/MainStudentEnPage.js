import React, { Component } from 'react';
import './Password.css';

class MainStudentEnPage extends Component {


    //use isPageAutorized and comcomponentDidMount() { isPageAutorized();} to check if page has permisions
    // =============================================

    isPageAutorized() {
        const pageUrl = this.props.match.path || '';
        fetch('http://localhost:8000/auth/isAuthorized', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ requestedPage: pageUrl }),
        })
            .then(response => response.json())
            .then(res => {
                console.dir(res)
                //if no permision, redirect to login page
                if (res.permision == false) {
                    this.props.redirectAfterFetch(res);
                }
            }).catch(err => console.error(err))
    }

    componentDidMount() {
        this.isPageAutorized();
    }

    // ===================================
    render() {
        return (
            <div>
                <h1>here will be main student EN page</h1>

            </div>
        )
    }
}

export default MainStudentEnPage;