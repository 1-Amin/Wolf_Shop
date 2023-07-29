import React, { useState } from "react";
import Burger from "./burger";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
// import logo from "../public/images/logo.png"
function Navbar() {
  const [open, setOpen] = useState(false);

  function openSide() {
    setOpen(!open);
  }
  return (
    <div>
      <nav >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <AppBar color={""} sx={{ width: "cover" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <div className="burger">
                <IconButton
                  onClick={openSide}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {open ? (
                    <Zoom in={true}>
                      <CloseIcon />
                    </Zoom>
                  ) : (
                    <Fade in={true}>
                      <MenuIcon />
                    </Fade>
                  )}
                </IconButton>
              </div>

              <Link to="/notfound" ><p className="navContent">CONTACTS</p></Link>
              <a href="#Main"><p className="navContent">PRODUCTS</p></a>

              <Link to="/"><img className="logo" src="./images/logo.png" alt="ssad" /></Link>

              <a href="#AboutUS"><p className="navContent">ABOUT US</p></a>
              <Link to="/notfound"><p className="navContent">SALES</p></Link>
              <div className="burger">
              <SearchIcon sx={{ fontSize: 30 }} />
              </div>
            </Toolbar>
          </AppBar> 
        </Box>
      </nav>
      <Collapse
        sx={{ zIndex: "4", position: "absolute" }}
        in={open}
        orientation="horizontal"
      >
        <Burger />
      </Collapse>
    </div>
  );
}

export default Navbar;
