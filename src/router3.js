import React from "react";
import './navlink.css'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'


export default function Router3(){
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({isActive})=>
                        isActive?"active_menu":"menu"}
                    style={({isActive}) => {
                        return {
                        fontWeight: isActive ? "bold" : ""
                    };
                    }}>Home</NavLink> -&nbsp;
                    <NavLink to='/products' className={({isActive})=>isActive?"active_menu":"menu"}>
                    Products</NavLink> -&nbsp;
                    <NavLink to='/member' className={({isActive})=>isActive?"active_menu":"menu"}>
                    Member</NavLink> -&nbsp;
                    <NavLink to='/contact' className={({isActive})=>isActive?"active_menu":"menu"}>
                    Contact Us</NavLink>
            </nav>
        </BrowserRouter>
    )
}