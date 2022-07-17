import React from "react";

// ColorItem component
function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}

// ColorList component
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "vanillaCod",
    "newsauce",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color}/>;
  });
  return (
    <div>
      <h1>Top 6 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
