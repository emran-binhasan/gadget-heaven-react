import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { getOldCartData } from '../utilities/addingCart';
import { getOldListData } from '../utilities/addingWishlist';
const NavBar = () => {

    const [cart,setCart] = useState([])
    useEffect(()=>{
    const loadedCart = getOldCartData();
    setCart(loadedCart)
    },[]);

    const [wishL,setWishL] = useState([])
    useEffect(()=>{
    const loadedList = getOldListData();
    setWishL(loadedList)
    },[]);

    const location = useLocation();
    const links = <>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                    <li><NavLink to={'dashboard'}>Dashboard</NavLink></li>
                    <li><NavLink to={'coupons'}>Coupons</NavLink></li>
                  </>
    return (
        <div className={`navbar w-11/12 mx-auto ${location.pathname == '/' || location.pathname == '/phones' || location.pathname == '/laptops' || location.pathname == '/audio' || location.pathname == '/tablets' || location.pathname == '/wearables' ?'bg-[#9538E2] text-white':'bg-base-100'} `}>
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                        {links}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className='indicator'>
                {cart.length>0?<span class="indicator-item badge badge-secondary">{cart.length}</span>:''}
                <button><BsCart3 className={`border border-gray-400  w-8  h-8 bg-white text-black   p-1.5  rounded-full`}/></button>
                </div>
                <div className='indicator'>
                {wishL.length>0?<span class="indicator-item badge badge-secondary">{wishL.length}</span>:''}
                <button><IoIosHeartEmpty className='border border-gray-400 bg-white text-black  w-8  h-8  p-1.5  rounded-full' />
                </button>
                </div>
            
            </div>
        </div>
    );
};

export default NavBar;