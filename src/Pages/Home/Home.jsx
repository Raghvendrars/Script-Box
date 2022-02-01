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

  return (
    <>
      <Grid container>
        <Grid item xl={6} lg={5} md={12} sm={12} xs={12}>
          <Box className="Hero-Section-Column-One-Box">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
              className="Hero-Section-Column-One-Box-Container"
            >
              <Stack spacing={2} padding={0} margin={0}>
                <Item
                  sx={{ textAlign: "left", height: "23rem", boxShadow: "none" }}
                  padding={0}
                  margin={0}
                >
                  <p className="Hero-Section-Text">
                    We boost growth for your statup business
                  </p>
                </Item>
                <Item
                  sx={{
                    textAlign: "left",
                    height: "10vh",
                    paddingTop: 0,
                    boxShadow: "none",
                  }}
                  padding={0}
                  margin={0}
                >
                  <p className="Hero-Section-Text-Small">
                    Our goal is top at the heart of creativity services industry
                    as a digital creator. In has a after comment
                  </p>
                </Item>
                <Item sx={{ textAlign: "left", padding: 0, boxShadow: "none" }}>
                  <Button
                    className="Hero-Section-GetStarted-Button"
                    sx={{ bgcolor: "#ff6600", color: "#ffffff" }}
                  >
                    Get Started
                  </Button>
                </Item>
              </Stack>
            </Grid>
          </Box>
        </Grid>
        <Grid item xl={6} lg={7} md={12} sm={12} xs={12}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
            sx={{boxShadow: "none"}}
          >
            <Card sx={{ width: "100%",boxShadow: "none" }}>
              <img src={HeroImg} alt="HeroSecImg" />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
