import { Grid } from "@mui/material";
import React from "react";
import Components from "./AllComponent/Components";
import ContactUs from "./ContactUs/ContactUs";
import HeroSection from "./HeroSection/Index";
import HowCanWeHelp from "./HowCanWeHelp/Index";
import OurTeam from "./OurTeam/OurTeam";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HowCanWeHelp />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Components />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <OurTeam />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ContactUs />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
