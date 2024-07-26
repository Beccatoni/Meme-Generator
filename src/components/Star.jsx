import React from "react";
import filled from "../assets/filled.png";
import notfilled from "../assets/notfilled.png";

const Star = (props) => {
  const startIcon = props.isFilled ? filled : notfilled;
  const arial = props.isFilled? "Marked as favorite" : "Unmarked as favorite"
  return (
    <button onClick={props.handleClick} aria-label={arial} aria-pressed={props.isFilled}>
      <img src={startIcon} alt="" className="h-7" />
    </button>
  );
};

export default Star;
