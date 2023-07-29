import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Box from "@mui/material/Box";
function Products() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/products");
      const json = await response.json();
      if (response.ok) {
        setProduct(json);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="allProducts">
       
        
      <h2 style={{paddingTop: "40px"}}>All Products</h2>
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
        {product &&
          product.map((product) => (
            <Card
              key={product._id}
              name={product.name}
              src={product.src}
              alt={product.alt}
            ></Card>
          ))}
      </Box>
      <hr/>
    </div>
  );
}

export default Products;
