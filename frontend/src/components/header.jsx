import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Fab from "@mui/material/Fab";
function Header() {
  return (
    <div className="homeHeader">
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} sx={{ mt: 20, ml: 4 }}>
          <h1 className="headerText">Grey Wolf Dress Shop</h1>
          <Fab
            href="#Main"
            sx={{
              mt: 4,
              backgroundColor: "whitesmoke",
              boxShadow: 0,
              fontSize: "18px",
              zIndex: "0"
            }}
            variant="extended"
          >
            Shop
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
