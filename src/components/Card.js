import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img}className="card-image"/>

      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <h3 className="card-price">{props.price}</h3>
        <button className="card-btn"> Add to card</button>
        
      </div>

      
   
    </div>
  );
}

export default Card;
