import React from "react";

function Burger(props) {
  return (
    <div>
      {/* <Collapse in={props.animation}> */}
      <div className="burgerContent">
        <ul>
          <li>CONTACTS</li>
          <li>PRODUCTS</li>
          <li>ABOUT US</li>
          <li>SALES</li>
        </ul>
      </div>
      {/* </Collapse> */}
    </div>
  );
}

export default Burger;
