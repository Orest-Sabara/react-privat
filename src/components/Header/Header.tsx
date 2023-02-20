import './Header.css'
// import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header>
            <img src='https://thepage.fra1.digitaloceanspaces.com/live/media/86774/conversions/privatbank-r0-square_medium.jpg' alt='privat'/>

            <div className='Header'>
                {/*<Link to={'/login'}>Login</Link>*/}
                {/*<Link to={'/register'}>Register</Link>*/}
                <div className='bank'>Currency</div>
            </div>
        </header>
    );
};

export {Header}