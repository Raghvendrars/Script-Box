import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import "./Component.css";
import ApeImg from "../Images/Ape.png";
import HeaderImg from "../Images/Header.jpg";
import FooterImg from "../Images/Footer.png";
import Sidebar from "../Images/Sidebar.png";
import Slider from "../Images/Slider.jpg";
import CardImg from "../Images/Cards.png";

const Components = () => {
  // const allContents = [
  //   {
  //     id: 1,
  //     name: "Header",
  //     imageofit: "",
  //   },
  //   {
  //     id: 2,
  //     name: "Navbar",
  //     imageofit: "",
  //   },
  //   {
  //     id: 3,
  //     name: "Footer",
  //     imageofit: "",
  //   },
  //   {
  //     id: 4,
  //     name: "Carousel",
  //     imageofit: "",
  //   },
  //   {
  //     id: 5,
  //     name: "Cards",
  //     imageofit: "",
  //   },
  //   {
  //     id: 6,
  //     name: "Tables",
  //     imageofit: "",
  //   },
  //   {
  //     id: 7,
  //     name: "Header",
  //     imageofit: "",
  //   },
  //   {
  //     id: 9,
  //     name: "Header",
  //     imageofit: "",
  //   },
  // ];

  return (
    <div className="Component-Wrap-Parent">
      <div className="Component-Wrap">
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} paddingTop={2}>
            <h1 className="Component-Title-Text">Components</h1>
          </Grid>
          <Grid container gap={0} padding={3} margin={0}>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={HeaderImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Headers</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={FooterImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Footer</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={Sidebar}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Sidebar</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={Slider}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Carousel</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={CardImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Card</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={HeaderImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Name</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={CardImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Name</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} padding={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={FooterImg}
                    alt="green iguana"
                  />
                  <Grid item>
                    <h3 className="Components-Name-Text">Name</h3>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Components;
