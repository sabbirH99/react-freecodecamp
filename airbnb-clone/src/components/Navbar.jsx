import React from "react";
import Logo from "../assets/logo.svg";

const Nav = () => (
    <>
        <nav className="nav">
            <a href="/" className="brand">
                <img src={Logo} alt="" />
            </a>
        </nav>
    </>
)

export default Nav