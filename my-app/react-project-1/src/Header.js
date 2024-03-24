// import React from "react"
import logo from "./logo.svg"

export default function Header() {
    return (
        <header className="header">
        <nav className="nav">
            <a href="/" className="brand">
                <img src={logo} width={40} alt="" /> React Fun Facts
            </a>
        </nav>
    </header>
    )
}