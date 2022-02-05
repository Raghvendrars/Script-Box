import React from "react";
import { Grid, Typography, Paper, TextField,Button } from "@mui/material";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs-Wrap">
      <Grid container>
        <Grid
          item
          xl={4}
          lg={4}
          md={8}
          sm={12}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Paper sx={{boxShadow:"none",marginBottom:"7%"}}>
            <Typography variant="h4" p={0}>Contact US</Typography>
            <h5>Lorem ipsum dolor sit amet incididunt ut labore.</h5>
          </Paper>
        </Grid>
        <Grid container className="ContactUs-Form-Wrap">
          <Grid xl={6} lg={6} md={6} sm={12} xs={12} padding={4}>
            <Typography variant="h6" marginBottom={2}>Name</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
              
            />
          </Grid>
          <Grid xl={6} lg={6} md={6} sm={12} xs={12} padding={4} >
            <Typography variant="h6"  marginBottom={2}>Email</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12} paddingLeft={4} paddingRight={4}>
            <Typography variant="h6"  marginBottom={2}>Subject</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12} paddingLeft={4} paddingRight={4} marginTop={4}>
            <Typography variant="h6"  marginBottom={2}>Mesaage</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12} paddingLeft={4} paddingRight={4} marginTop={4}>
            <Button sx={{width:"20%",bgcolor:"#282938",color:"#fff",borderRadius:"10px"}}>Send Message</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
