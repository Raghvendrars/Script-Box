import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

import { Button, Grid, Typography } from "@mui/material";
import "./Navbar.css";

import NavLogo from "./NavLogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar" style={{ paddingLeft: "3%", paddingRight: "5%" }}>
        <Grid container className="navbar-container container" padding={2}>
          <Grid item xl={4} lg={4} md={3} sm={12} xs={12} textAlign={"left"}>
            <a href="/" onClick={closeMobileMenu}>
              <img src={NavLogo} alt="navlogo" width={200} />
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </Grid>
          <Grid item xl={8} lg={8} md={9} sm={12} xs={12}>
            <Grid container className={click ? "nav-menu active" : "nav-menu"}>
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <a href="/" className="Nav-Page-Text-Link" onClick={closeMobileMenu}>
                  <h3 className="Nav-Page-Text">Home</h3>
                </a>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <a href="/product" className="Nav-Page-Text-Link" onClick={closeMobileMenu}>
                <h3 className="Nav-Page-Text">Features</h3>
                </a>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <a href="/product" className="Nav-Page-Text-Link" onClick={closeMobileMenu}>
                <h3 className="Nav-Page-Text">About us</h3>
                </a>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <a href="/blog" className="Nav-Page-Text-Link" onClick={closeMobileMenu}>
                <h3 className="Nav-Page-Text">Blog</h3>
                </a>
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={2}
                sm={12}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <Button sx={{bgcolor:"none",borderRadius:"30px",border:"2px solid rgba(255, 255, 255, 0.2)",padding:"4% 7%",marginTop:"2%"}}>
                  <Typography sx={{color:"#fff"}}>Contact Us</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Navbar;
