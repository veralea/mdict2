import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import './Menu.css'


function Menu(props) { 
    

    return (

        <div className='menu'>
            <div className='logout menu_button'>Logout</div>
            <div className='menu_buttons'>
                <div className='menu_button'>Logout</div>
                <div className='menu_button'>Logout</div>
                <div className='menu_button'>Logout</div>
               
            </div>

        </div>
    );
}

export default withRouter(Menu);
