import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import PlanningIcon from "./PlanningIcon.png";

const PlanningCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 280,paddingTop:"4%",paddingBottom:"4%",borderRadius:"20px",boxShadow:"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
        <CardContent>
            <img src={PlanningIcon} width={"50%"} />
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Planning System
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Protocols apart from aengage models, pricing billing
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanningCard;
