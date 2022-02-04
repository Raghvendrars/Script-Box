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
       <Card className="All-Card-Common-Class">
        <CardContent>
            <img src={BusinessIcon} width={"50%"} />
        </CardContent>
        <CardContent className="All-Card-Content-Common-Class">
          <h4>Business Idea Planning</h4>
          <div className="All-Card-Content-Footer">
            <h6 color="text.secondary">
              Protocols apart from aengage models, pricing billing
            </h6>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessCard;
