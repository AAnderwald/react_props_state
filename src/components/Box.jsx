import * as React from "react";

const Box = (props) => {
  return (
    <div
      id={props.box.id}   //add an id, in span add rgb value from props, find correct value when check for the even target.value
      onClick={props.handleBoxClick}    //add onclick on dive that return from the box component
      rangeColor={props.handleChangeColor}
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: props.box.color,
        border: "1px solid black",
        display: "inline-block",
      }}
    >
      <span>{props.box.color}</span>     
    </div>
  );
};

export default Box;
