import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (e) => {

        e.preventDefault();

        logout();

        history.push('/');

    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: "0 2rem" }}>
                <span className="brand-logo">Reduce links</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    
                    <li>
                        <NavLink to='/create'>Create</NavLink>
                    </li>

                    <li>
                        <NavLink to='/links'>Links</NavLink>
                    </li>

                    <li>
                        <NavLink to='/' onClick={logoutHandler}>
                            Logout
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;