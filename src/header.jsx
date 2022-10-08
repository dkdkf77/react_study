import React from "react";
// import './App.css';
import Logo from "./logo";
import InfoMn from "./infomn";
import Nav from "./nav";


function Headers() {
    return (
        <div className='header'>
            <div className="headerIn">
                <Logo />
                <div className="mn_group">
                    <InfoMn />
                    <Nav />
                </div>
            </div>
        </div>
    );
}

export default Headers;
