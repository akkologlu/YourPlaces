import React from "react";
import "./Backdrop.css";

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick}>
      Backdrop
    </div>
  );
}

export default Backdrop;
