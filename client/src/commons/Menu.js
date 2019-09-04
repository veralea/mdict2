import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import history from '../functions/history';
import './Menu.css'


function Menu(props) {

    function logout() {
        fetch('http://localhost:8000/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ test: 'test' }),
        })
            .then(response => response.json())
            .then(res => {
                console.dir(res);
                
                history.push(res.access.redirect.link);
            }).catch(err => console.error(err))
    }

    return (

        <div className='menu'>
            <div className='logout menu_button' onClick={logout}>Logout</div>
            <div className='menu_buttons'>
                {props.pages.map((page, index) => {
                    return <div className='menu_button' key={index}><Link to={page.link}>{page.name}</Link></div>
                })}


            </div>

        </div>
    );
}

export default withRouter(Menu);
