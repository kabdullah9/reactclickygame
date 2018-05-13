import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const CountBody = props => (
  <div >
    <p className="card-text">Click Count: {props.count}</p>
    <button className="btn btn-primary" onClick={props.handleIncrement}>
      Dude you Guessing!
    </button>{" "}
    <button className="btn btn-danger" onClick={props.handleDecrement}>
      Decrement
    </button>
  </div>
);

export default CountBody;
