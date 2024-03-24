import React from "react";

export default function Card(props) {
    console.log(props);
    return (
        <>
            <div className="card">
                <div className="card--image_wrapper">
                    <img src={`../assets/${props.productImage}`} alt="" className="card--image" />
                </div>
                <div className="card--body">
                    <h2 className="card--title">
                        {props.title}
                    </h2>
                </div>
            </div>
        </>
    );
}