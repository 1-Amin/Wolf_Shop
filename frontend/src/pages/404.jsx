import React from "react";
import Box from "@mui/material/Box";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "250px 0 200px 0",
      }}
    >
      <div style={{textAlign: "center"}}>
        <h1 style={{ fontSize: "200px" }}>404</h1>
        <p style={{fontSize: "30px"}}>Sorry page not found...</p>
      </div>
    </Box>
  );
}

export default NotFound;
