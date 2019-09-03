import React, {useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Menu.css'


function Menu(props) { 
    

    return (

        <div className='menu'>
            <div className='logout menu_button'>Logout</div>
            <div className='menu_buttons'>
                {props.pages.map((page, index) => {
                    return <div className='menu_button' key={index}><Link to={page.link}>{page.name}</Link></div>
                })}                
                
               
            </div>

        </div>
    );
}

export default withRouter(Menu);
