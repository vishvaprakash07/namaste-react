import { useState, useEffect, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
    }, [btnNameReact]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg md:bg-yellow-100">
            <div className="m-2">
                <img className="w-30" alt="logo" src={LOGO_URL}/>
            </div>
            <h5 className="content-center">Online Status: {onlineStatus ? "✅" : "❌"}</h5>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'><Link to='/about'>About</Link></li>
                    <li className='px-4'><Link to='/contact'>Contact</Link></li>
                    <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <button className='login' onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") :
                        setbtnNameReact("Login") }}>{ btnNameReact }</button>
                    <li className='px-4'>User: { loggedInUser }</li>
                </ul>
            </div>

        </div>
    );
};

export default Header;
