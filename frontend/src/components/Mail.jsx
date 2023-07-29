import React from "react";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
import Button from "@mui/material/Button";

function Mail() {
  return (
    <div className="MailBox">
      
      <div>
      
        <h3 style={{fontSize:"1.8rem"}}>SIGN UP AND GET 10% OFF</h3>
        <p>Keep up with our latest news and get 10% off one purchase.</p>
      
        <form>
          <input placeholder="Email" />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "whitesmoke",
              color: "black",
              boxShadow: "none",
              marginLeft: "20px",
              height: "2.4rem",
                
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none"
              },
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Mail;
