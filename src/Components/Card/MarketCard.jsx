import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import MarketIcon from "./MarketIcon.png";
import "./AllCard.css";

const MarketCard = () => {
  return (
    <div>
       <Card className="All-Card-Common-Class">
        <CardContent>
            <img src={MarketIcon} width={"50%"} />
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

export default MarketCard;
