import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

function Bodybottom() {
  const [arrayList] = useState([
    {
      avatar: "B",
      avatarColor: "#F39B40",
      abbre: "BTC",
      name: "Bitcoin",
      price: "$27,000",
      change: "+20.37%",
      changehours: "+19.37%",
    },
    {
      avatar: "E",
      avatarColor: "#617FF2",
      abbre: "ETH",
      name: "Ethereum",
      price: " $16,000",
      change: "-2.99%",
      changehours: "-19.37%",
    },
    {
      avatar: "A",
      avatarColor: "#7142FE",
      abbre: "ADA",
      name: "Caidona",
      price: "$0,9000",
      change: "+23.37%",
      changehours: "+21.37%",
    },
    {
      avatar: "A",
      avatarColor: "#F1706E",
      abbre: "Avax",
      name: "Avalanche",
      price: " $43,000",
      change: "+41.37%",
      changehours: "+38.37%",
    },
  ]);
  return (
    <Box className="bodybottom_mainbox">
      {arrayList.map((arr) => {
        return (
          <Grid sx={{ display: "flex" }} className="main_grid_container">
            <Grid item xs={1} className="grid_spacing">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: arr.avatarColor,
                  fontSize: "12px",
                }}
              >
                {arr.avatar}
              </Avatar>
            </Grid>
            <Grid item xs={3} className="grid_spacing">
              <Typography sx={{ fontSize: "14px" }}>{arr.abbre}</Typography>
              <Typography
                sx={{ fontSize: "14px", color: "gray", fontWeight: "bold" }}
              >
                {arr.name}
              </Typography>
            </Grid>
            <Grid item xs={2} className="grid_spacing">
              <Typography sx={{ fontSize: "14px" }}>Price</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {arr.price}
              </Typography>
            </Grid>
            <Grid item xs={2} className="grid_spacing">
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {" "}
                Change
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "green" }}>
                {arr.change}
              </Typography>
            </Grid>
            <Grid item xs={2} className="grid_spacing">
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                24hr Change
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "green" }}>
                {arr.changehours}
              </Typography>
            </Grid>
            <Grid item xs={3} className="grid_spacing">
              <Button
                variant="contained"
                sx={{
                  marginRight: "15px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                }}
              >
                Sell
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginRight: "10px",
                  textTransform: "none",
                }}
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default Bodybottom;
