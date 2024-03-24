import React from "react";
import PropTypes from 'prop-types';
var PropTypes = require('prop-types');
// import CardImage from "../assets/card-image-1.png";
import StarImage from "../assets/star.png";


function Card(props) {

    const CardImage = props.image;
    const CardStat = props.cardStat;
    const Rating = props.rating;
    const Reviews = props.reviews;
    const Location = props.location;
    const Title = props.title;
    const Price = props.price;
    return (
        <>
            <div className="card">
                <div className="card--headshot">
                    <img src={CardImage} alt="" className="card--image" />
                    <div className="card--sold_stat">{CardStat}</div>
                </div>
                <div className="card--body">
                    <div className="card--meta">
                        <img src={StarImage} alt="" className="card--star_image" />
                        <span className="card--rating_star">{Rating}</span>
                        <span className="card--total_reviews">{Reviews}</span>
                        <span className="card--location">{Location}</span>
                    </div>
                    <div className="card--title">{Title}</div>
                    <div className="card--price"><span className="card--price_dollar">{Price} /</span> person</div>
                </div>
            </div>
        </>
    );
}


export default Card;