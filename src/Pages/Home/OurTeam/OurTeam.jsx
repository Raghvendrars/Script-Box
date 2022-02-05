import {
  Card,
  Grid,
  Paper,
  Typography,
  CardContent,
  CardActions,
  Button,
  Avatar,
  ButtonGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ApeImage from "../Images/Ape.png";
// import InstagramIcon from"./Icons/instagram.png";
// import LinkedInIcon from"./Icons/linkedin.png";
// import EmailIcon from"./Icons/gmail.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="OurTeam-Wrap">
      <Grid container sx={{ paddingBottom: "5%" }}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{ width: "50%", marginLeft: "auto", marginRight: "auto",boxShadow:"none" }}>
            <Typography variant="h6" className="MeetTheTeam-Text-Small">OUR TEAM</Typography>
            <Typography variant="h3" className="MeetTheTeam-Text" marginTop={1}>Meet The Team</Typography>
          </Paper>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} marginTop={12}>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Card
                sx={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "0%",
                  border: "2px solid #EBEAED",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ApeImage}
                  sx={{
                    width: 160,
                    height: 160,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "7%",
                    marginBottom: "0%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Prathvi Bharatwala
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    UI-UX DESIGNER
                  </Typography>
                </CardContent>

                <CardActions sx={{ padding: "0%" }}>
                  <Grid container sx={{ borderTop: "2px solid #EBEAED" }}>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "90%",
                          borderRadius: 0,
                          border: "1px solid #fff",
                        }}
                        className="OurTeam-Card-Button"
                      >
                        <InstagramIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <MailOutlineIcon fontSize="large" />
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Card
                sx={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "0%",
                  border: "2px solid #EBEAED",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ApeImage}
                  sx={{
                    width: 160,
                    height: 160,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "7%",
                    marginBottom: "0%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Raghvendra Singh
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    UI DEVELOPER
                  </Typography>
                </CardContent>

                <CardActions sx={{ padding: "0%" }}>
                  <Grid container sx={{ borderTop: "2px solid #EBEAED" }}>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "90%",
                          borderRadius: 0,
                          border: "1px solid #fff",
                        }}
                        className="OurTeam-Card-Button"
                      >
                        <InstagramIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <MailOutlineIcon fontSize="large" />
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Card
                sx={{
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "0%",
                  border: "2px solid #EBEAED",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ApeImage}
                  sx={{
                    width: 160,
                    height: 160,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "7%",
                    marginBottom: "0%",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Raghvendra Singh
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    UI DEVELPOER
                  </Typography>
                </CardContent>

                <CardActions sx={{ padding: "0%" }}>
                  <Grid container sx={{ borderTop: "2px solid #EBEAED" }}>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "90%",
                          borderRadius: 0,
                          border: "1px solid #fff",
                        }}
                        className="OurTeam-Card-Button"
                      >
                        <InstagramIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      sx={{ borderRight: "2px solid #EBEAED" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </Button>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: 0,
                          border: "none",
                          border: "1px solid #fff",
                        }}
                      >
                        <MailOutlineIcon fontSize="large" />
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurTeam;
