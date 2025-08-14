import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header Rendered");

    useEffect(() => {
        console.log("UseEffect called");
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") :
                        setbtnNameReact("Login") }}>{ btnNameReact }</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;
