import React from "react";
import { Grid } from "@mui/material";
import "./HowCanWeHelp.css";
import DevCard from "../../../Components/Card/DevCard";
import BusinessCard from "../../../Components/Card/BusinessCard";
import PlanningCard from "../../../Components/Card/PlanningCard";
import MarketCard from "../../../Components/Card/MarketCard";

const Index = () => {
  return (
    // <div className="HowCanWeHelp-Bg-Wrap-Div">
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xl={4}>
        <div>
          <h1>How can we help you ?</h1>
          <h6>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </h6>
        </div>
      </Grid>
      <Grid item xl={4} sx={{marginTop:"2%"}}>
        <Grid container sx={{width:"55%",marginLeft:"auto",marginRight:"auto"}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <BusinessCard />
          </Grid>
          <Grid item item xl={12} lg={12} md={12} sm={12} xs={12} sx={{marginTop:"10%"}}>
            <DevCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={4} sx={{marginTop:"1%"}}>
        <Grid container sx={{width:"55%"}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <PlanningCard />
          </Grid>
          <Grid item item xl={12} lg={12} md={12} sm={12} xs={12} sx={{marginTop:"10%"}}>
          <MarketCard />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xl={4}>
        <PlanningCard />
        <MarketCard />
      </Grid> */}
    </Grid>
  );
};

export default Index;
