import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import BusinessIcon from "./BusinessIcon.png";
import "./AllCard.css";

const BusinessCard = () => {
  return (
    <div>
      <Card className="All-Card-Common-Class" sx={{ borderRadius: 7 }}>
        <CardContent>
          <img src={BusinessIcon} width={"45%"} />
        </CardContent>
        <CardContent className="All-Card-Content-Common-Class" >
          <Typography variant="h5">Business Idea Planning</Typography>
          <div className="All-Card-Content-Footer">
            <Typography variant="body2" color="text.secondary">
              Protocols apart from aengage models, pricing billing
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessCard;
