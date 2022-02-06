import React, { useState, useEffect } from "react";
import ModalImage from "react-modal-image";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  Button,
} from "@mui/material";
import "../Style.css";
import Data from "./HeaderData.json";
import HeaderImg from "./Header.jpg";

const Header = () => {
  const [headerData, setHeaderData] = useState([]);

  const funfor = () => {
    setHeaderData(Data);
  };

  useEffect(() => {
    funfor();
  }, []);
  console.log(headerData);

  return (
    <div className="All-Comp-Wrap-Parent">
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Paper
            sx={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "80%",
              boxShadow: "none",
            }}
          >
            <h5 className="Comp-Title-Text-Small">SOURCES</h5>
            <h1 className="Comp-Title-Text-Large">Headers</h1>
          </Paper>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            {Data ? (
              <>
                {Data.map((d) => {
                  return (
                    <Grid item xl={3} item xl={3} lg={3} padding={4}>
                      <Card>
                        <CardActionArea>
                          {/* <CardMedia
                            component="img"
                            height="100%"
                            image={HeaderImg}
                            alt="green iguana"
                          /> */}
                          <ModalImage
                            small={HeaderImg}
                            large={HeaderImg}
                            alt="Image"
                          />{" "}
                          <a href="/" style={{ textDecoration: "none" }}>
                            <Grid container padding={1} sx={{width:"70%",marginLeft:"auto", marginRight:"auto"}}>
                              <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                                <Typography>View Code</Typography>
                              </Grid>
                              <Grid xl={5} lg={5} md={5} sm={5} xs={5}>
                                <GitHubIcon fontSize="medium" />
                              </Grid>
                            </Grid>
                          </a>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <h1>Nothing to show</h1>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
