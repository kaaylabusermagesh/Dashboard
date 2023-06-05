import { Grid } from "@mui/material";
import React from "react";
import "./styles.css";
import BodyComponent from "./body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assets from "./AssetComponent";

function Assignment() {
  return (
    <BrowserRouter>
      <Grid className="main_gridfor_body">
        <Routes>
          <Route path="/" element={<BodyComponent />}></Route>
          <Route path="/assets" element={<Assets />}></Route>
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default Assignment;
