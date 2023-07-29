import React from "react";
import Box from "@mui/material/Box";
import SecondHeader from "./SecondHeader";
import Card from "./Card";
import products from "../data";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

console.log(products);
console.log(products);
function Main() {
  return (
    <div className="Main" id="Main">
      <SecondHeader content="Our Products" />

      <Box
      
        sx={{
          backgroundColor: "",
          display: "flex",
          flexGrow: "initial",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        {products.map((prod) => {
          const { src, alt, name } = prod;
          return <Card src={src} alt={alt} name={name} />;
        })}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
        <Link to="/products">
          <span >See All</span>
          <NavigateNextIcon />
        </Link>
      </Box>
    </div>
  );
}

export default Main;
