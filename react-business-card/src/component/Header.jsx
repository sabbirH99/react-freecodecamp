import React from "react"
// import Headshot from "./assets/Headshot.png"


export default function Header() {
    return (
        <div className="header--masthead">
            <img src="src\assets\Headshot.png" alt="" width={174} height={174} />
            <h1 className="heading--title">Johnathan Doe</h1>
            <div className="heading--subtitle">Web Developer</div>
            <div className="heading--subtitle">Reestify</div>
            <div className="heading--social-icon">
                <a href="/"><img src="src/assets/social-icon-1.png" alt="" /></a>
                <a href="/"><img src="src/assets/social-icon-2.png" alt="" /></a>
                <a href="/"><img src="src/assets/social-icon-3.png" alt="" /></a>
            </div>
        </div>
    )
}
