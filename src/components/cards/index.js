import React from "react";
import "./cards.css";

function Card(props) {

  return (
      <div className="card" value={props.id}>
        <div className="card-image">
          <img src={props.image} onClick={() => props.handleCardClicked(props.id)} />
        </div>
      </div>
  );
}

export default Card;