import React from "react";
import "./PersonCard.css";

const PersonCard = props => (
  <div className="col-sm-4 card" 
          style={{ backgroundImage: `url("${props.image}")` }}
          onClick={() => props.cardClickedOn(props.id)}>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    {/* <span className="guess"  onClick={() => props.cardClickedOn(props.id)} >?</span> */}
  </div>
);

export default PersonCard;
