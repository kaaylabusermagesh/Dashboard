import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../styles.css";
import Data from "../data.json";

function Bodybottom() {
  const arrayList = Data.Tabledata;
  return (
    <Box className="bodybottom_mainbox">
      {arrayList.map((arr) => {
        return (
          <Grid className="main_grid_container" container spacing={1}>
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
            <Grid item xs={1} className="grid_spacing">
              <Typography sx={{ fontSize: "14px" }}>{arr.abbre}</Typography>
              <Typography
                sx={{ fontSize: "14px", color: "gray", fontWeight: "bold" }}
              >
                {arr.name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              className="grid_spacing"
              sx={{ textAlign: "center" }}
            >
              <Typography sx={{ fontSize: "14px" }}>Price</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                {arr.price}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              className="grid_spacing"
              sx={{ textAlign: "center" }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Change
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "green" }}>
                {arr.change}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              className="grid_spacing"
              sx={{ textAlign: "center" }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                24hr Change
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "green" }}>
                {arr.changehours}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              className="grid_spacing"
              sx={{ textAlign: "end", whiteSpace: "nowrap" }}
            >
              <Button
                variant="contained"
                sx={{
                  marginRight: "15px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "white !important",
                    color: "black !important",
                  },
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
