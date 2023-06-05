import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "./navbar";
import "./styles.css";
import Header from "./header";
import BodyComponent from "./body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Assignment() {
  return (
    <BrowserRouter>
      <Box className="main_box">
        <Grid container className="sub_box" spacing={1}>
          <Grid item xs={2} sx={{ backgroundColor: "white" }}>
            <Navbar />
          </Grid>
          <Grid item xs={10} sx={{ backgroundColor: "#F9FAFC" }}>
            <Header />
            <Grid className="main_gridfor_body">
              <Routes>
                <Route path="/" element={<BodyComponent />}></Route>
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default Assignment;
