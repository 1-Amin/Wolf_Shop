import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
function Card(props) {
  return (
    <div className="prodCard">
    <div>
      {/* <Stack spacing={3} direction="column"> */}
        <img className="cardImg" src={props.src} alt={props.alt} />
        <p>{props.name}</p>
        <Button
          variant="contained"
          className="prodButton"
          sx={{backgroundColor: "black", "&:hover": {backgroundColor: "rgba(0, 0, 0, 0.779)"}}}
        >
          BUY
        </Button>
      {/* </Stack> */}
      </div>
    </div>
  );
}

export default Card;
