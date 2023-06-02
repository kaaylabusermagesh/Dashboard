import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "./navbar";
import "./styles.css";
import Header from "./header";
import BodyComponent from "./body";

function Assignment() {
  return (
    <Box className="main_box">
      <Grid container className="sub_box" spacing={1}>
        <Grid item xs={2} sx={{ backgroundColor: "white" }}>
          <Navbar />
        </Grid>
        <Grid item xs={10} sx={{ backgroundColor: "#F9FAFC" }}>
          <Header />
          <Grid className="main_gridfor_body">
            <BodyComponent />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Assignment;
