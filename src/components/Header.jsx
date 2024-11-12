import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {name} = useContext(AuthContext);
    console.log(name);

    const links = <div className='flex lg:flex-row flex-col lg:gap-6 text-lg font-semibold '>
        <li><NavLink className='rounded-2xl' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded-2xl' to='/login'>Login</NavLink></li>
        <li><NavLink className='rounded-2xl' to='/register'>Register</NavLink></li>
    </div>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-2xl font-bold rounded-xl">React Auth Integration</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal rounded-2xl px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-2xl">{name}</a>
            </div>
        </div>
    );
};

export default Header;