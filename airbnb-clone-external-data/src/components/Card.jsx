import React from "react";
// import CardImage from "../assets/card-image-1.png";
import StarImage from "../assets/star.png";


function Card({coverImg, openSpot, stats, location, title, price }) {
    let badgeText
    if(openSpot == 0) {
        badgeText = "Sold Out";
    } else if(String(location).toLowerCase() === "online") {
        badgeText = "Online";
    }
    return (
        <>
            <div className="card">
                <div className="card--headshot">
                    <img src={`src/assets/${coverImg}`} alt="" className="card--image" />
                    {badgeText && <div className="card--sold_stat">{badgeText}</div>}
                </div>
                <div className="card--body">
                    <div className="card--meta">
                        <img src={StarImage} alt="" className="card--star_image" />
                        <span className="card--rating_star">{stats.rating}</span>
                        <span className="card--total_reviews">({stats.reviewCount})</span>
                        <span className="card--location">{location}</span>
                    </div>
                    <div className="card--title">{title}</div>
                    <div className="card--price"><span className="card--price_dollar">${price} /</span> person</div>
                </div>
            </div>
        </>
    );
}


export default Card;