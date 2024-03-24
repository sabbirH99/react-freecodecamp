import React from "react";


export default function Card({ image, title, location, mapLink, startDate, endDate, description }) {
    return (
        <>
            <div className="card">
                <div className="card--image_wrapper">
                    <img src={`src/assets/${image}`} alt="" className="card--image" />
                </div>
                <div className="card--content">
                    <div className="card--location_top">
                        <div className="card--location_wrapper">
                            <img src="src/assets/location-icon.svg" alt="" className="card--map_icon" />
                            <div className="card--location">{location}</div>
                        </div>
                        <div className="card--location_map">
                            <a href={mapLink} className="card--location-map_link">View on Google Maps</a>
                        </div>
                    </div>
                    <h1 className="card--title">{title}</h1>
                    <div className="card--date_wrapper">
                        <div className="card--start_date">{startDate}</div>
                        <div className="card--date_divider">-</div>
                        <div className="card--end_date">{endDate}</div>
                    </div>
                    <div className="card--description_wrapper">
                        <p className="card--description">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}