import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import FooterLogo from "./NavLogo.png";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="Footer-Wrap-Parent">
        <div className="Footer-Wrap-Container">
          <Grid container padding={0} paddingTop={8} paddingBottom={0}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container className="Footer-Wrap-Container-Child">
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  textAlign="left"
                >
                  <img src={FooterLogo} width={200} />
                </Grid>
                <Grid
                  item
                  xl={9}
                  lg={9}
                  md={12}
                  sm={12}
                  xs={12}
                  textAlign="left"
                >
                  <h4 className="LetsTalk-Text-Small">
                    We are always open to discuss your project and improve your
                    online presence.
                  </h4>
                </Grid>
                <div className="Footer-Contact-Section">
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    textAlign="left"
                  >
                    <Grid container paddingX={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <p className="Footer-Contact-Section-Title">
                          Email me at
                        </p>
                        <p className="Footer-Contact-Section-Title-Text">
                          contact@website.com
                        </p>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        paddingLeft={3}
                      >
                        <p className="Footer-Contact-Section-Title">Call us</p>
                        <p className="Footer-Contact-Section-Title-Text">
                          0927 6277 28525
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container className="Footer-Wrap-Container-Child-Two">
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  textAlign="left"
                >
                  <h1 className="LetsTalk-Text">Let's Talk!</h1>
                </Grid>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  textAlign="left"
                >
                  <h4 className="LetsTalk-Text-Small">
                    We are always open to discuss your project, improve your
                    online presence and help with your UX/UI design challenges.
                  </h4>
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  textAlign="left"
                  marginTop={2}
                >
                  <Grid container>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <BsFacebook fill="white" size={20} />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <AiFillTwitterCircle fill="white" size={23} />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <FiInstagram size={20} />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <FaLinkedin fill="white" size={20} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="Footer-Wrap-Container-Two-Wrap">
        <div className="Footer-Wrap-Container-Two">
          <Grid container padding={0} marginTop={1}>
            <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
              <Typography className="Footer-Copyright-Text">
                Copyright 2021, LOGO.com
              </Typography>
            </Grid>
            <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
              <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                  <Typography>Home</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                  <Typography>Features</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                  <Typography>AboutUs</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                  <Typography>Blog</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Footer;
