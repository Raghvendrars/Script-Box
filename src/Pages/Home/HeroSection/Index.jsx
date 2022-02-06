import React from "react";
import {
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HeroImg from "./Character.png";
import "./Home.css";
import { styled } from "@mui/material/styles";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const style = {
    width: "100%",
    maxWidth: "100vw",
    bgcolor: "background.paper",
  };

  return (
    <>
      <Grid container>
        <Grid item xl={6} lg={6} md={5} sm={12} xs={12}>
          <Box className="Hero-Section-Column-One-Box">
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "90vh",width:"85%" }}
              className="Hero-Section-Column-One-Box-Container"
            >
              <List sx={style} >
                <ListItem>
                  <div>
                    <h1 className="Hero-Section-Text">
                      We boost growth for your statup business
                    </h1>
                    <p className="Hero-Section-Text-Small">
                      Our goal is top at the heart of creativity services
                      industry as a digital creator. In has a after comment
                    </p>
                  </div>
                </ListItem>
                <ListItem>
                  <Button
                    className="Hero-Section-GetStarted-Button"
                    sx={{ bgcolor: "#ff6600", color: "#ffffff" }}
                  >
                    Get Started
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={7} sm={12} xs={12}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "90vh" }}
            sx={{ boxShadow: "none" }}
          >
            <Card sx={{ maxWidth: "100%", boxShadow: "none" }}>
              <img src={HeroImg} alt="HeroSecImg" width="90%" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
