import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Reduce links</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to='/create'>Create</NavLink>
                    </li>
                    <li>
                        <NavLink to='/links'>Create</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={logoutHandler}
                        >
                            Create
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;