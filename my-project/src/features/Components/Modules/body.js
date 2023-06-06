import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Bodybottom from "./bodybottom";
import Data from "../data.json";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["A", 5],
  ["B", 5],
  ["C", 5],
];

export const options = {
  pieHole: 0.7,
  is3D: false,
};

const BodyComponent = () => {
  const [arrayList1] = useState(Data.Carddata);
  const [currencies] = useState(Data.currencies);
  const cardData = Data.CardList;

  const data1 = [
    ["Month", "Binance", "Litecoin"],
    ["Jan", 1, 0],
    ["Feb", 3, 0],
    ["Mar", 7, 0],
    ["Apr", 1, 0],
  ];

  const options1 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
  const [arrayList, setArrayList] = useState(Data.Tabledata);

  const handleClickShare = (e, val, index) => {
    console.log("This is the arrayList data", arrayList);
    console.log("This is the arrayList1 data", arrayList1);
    var arrayListSample = [...arrayList];
    var arrayList1Sample = [...arrayList1];
    var currenciesSample = [...currencies];
    if (index === 0 && val === "buy") {
      arrayListSample[0].price = arrayListSample[0].price + 1;
      arrayListSample[0].change = arrayListSample[0].change + 1;
      arrayListSample[0].changehours = arrayListSample[0].changehours + 1;
      arrayList1Sample[0].price = arrayListSample[0].price;
      currenciesSample[0].percentage = arrayListSample[0].change;
    } else if (index === 1 && val === "buy") {
      arrayListSample[1].price = arrayListSample[1].price + 1;
      arrayListSample[1].change = arrayListSample[1].change + 1;
      arrayListSample[1].changehours = arrayListSample[1].changehours + 1;
      arrayList1Sample[1].price = arrayListSample[1].price;
      currenciesSample[1].percentage = arrayListSample[1].change;
    } else if (index === 2 && val === "buy") {
      arrayListSample[2].price = arrayListSample[2].price + 1;
      arrayListSample[2].change = arrayListSample[2].change + 1;
      arrayListSample[2].changehours = arrayListSample[2].changehours + 1;
    } else if (index === 3 && val === "buy") {
      arrayListSample[3].price = arrayListSample[3].price + 1;
      arrayListSample[3].change = arrayListSample[3].change + 1;
      arrayListSample[3].changehours = arrayListSample[3].changehours + 1;
      arrayList1Sample[2].price = arrayListSample[3].price;
      currenciesSample[2].percentage = arrayListSample[3].change;
    }
    if (index === 0 && val === "sell") {
      arrayListSample[0].price = arrayListSample[0].price - 1;
      arrayListSample[0].change = arrayListSample[0].change - 1;
      arrayListSample[0].changehours = arrayListSample[0].changehours - 1;
      arrayList1Sample[0].price = arrayListSample[0].price;
      currenciesSample[0].percentage = arrayListSample[0].change;
    } else if (index === 1 && val === "sell") {
      arrayListSample[1].price = arrayListSample[1].price - 1;
      arrayListSample[1].change = arrayListSample[1].change - 1;
      arrayListSample[1].changehours = arrayListSample[1].changehours - 1;
      arrayList1Sample[1].price = arrayListSample[1].price;
      currenciesSample[1].percentage = arrayListSample[1].change;
    } else if (index === 2 && val === "sell") {
      arrayListSample[2].price = arrayListSample[2].price - 1;
      arrayListSample[2].change = arrayListSample[2].change - 1;
      arrayListSample[2].changehours = arrayListSample[2].changehours - 1;
    } else if (index === 3 && val === "sell") {
      arrayListSample[3].price = arrayListSample[3].price - 1;
      arrayListSample[3].change = arrayListSample[3].change - 1;
      arrayListSample[3].changehours = arrayListSample[3].changehours - 1;
      arrayList1Sample[2].price = arrayListSample[3].price;
      currenciesSample[2].percentage = arrayListSample[3].change;
    }
    setArrayList(arrayListSample);
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {arrayList1.map((arr) => {
              return (
                <Grid
                  item
                  xs={3.7}
                  className="grid_styles_div"
                  sx={{ marginLeft: "16px" }}
                >
                  <Grid sx={{ display: "flex", margin: "10px" }}>
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: arr.avatarColor,
                        fontSize: "12px",
                      }}
                    >
                      {arr.avatar}
                    </Avatar>
                    <Typography
                      sx={{ margin: "0px 0px 0px 10px", fontWeight: "bold" }}
                    >
                      {arr.name}
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: "flex", margin: "10px" }}>
                    <Grid>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {arr.code}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "gray",
                          marginLeft: "3px",
                        }}
                      >
                        {"$" + arr.price}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        width: "45px",
                        backgroundColor: arr.percentagebg,
                        height: "15px",
                        borderRadius: "10px",
                        margin: "15px 0px 0px 20px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: arr.percentageColor,
                          fontSize: "10px",
                          marginLeft: "5px",
                        }}
                      >
                        {arr.percentage}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            className="grid_styles_div"
            sx={{ margin: "10px 10px 0px 5px", display: "flex" }}
          >
            <Grid item xs={4}>
              <Grid sx={{ display: "flex" }}>
                <Grid sx={{ margin: "2% 0px 0px 4%" }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Balance
                  </Typography>
                </Grid>
                <Grid sx={{ margin: "2% 0px 0px 50%" }}>
                  <Typography sx={{ color: "green", fontSize: "14px" }}>
                    +3.12%
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                sx={{
                  fontSize: "20px",
                  margin: "2% 0px 0px 4%",
                  fontWeight: "bold",
                }}
              >
                USD 14.244,55
              </Typography>
              <Grid container sx={{ margin: "10% 0px 6% 4%" }} spacing={2}>
                {cardData.map((val) => {
                  return (
                    <Grid item xs={6}>
                      <Grid sx={{ display: "flex" }}>
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: val.avatarColor,
                            fontSize: "12px",
                          }}
                        >
                          {val.avatar}
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            margin: "2% 0px 0px 3%",
                            color: "gray",
                          }}
                        >
                          {val.name}
                        </Typography>
                      </Grid>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          margin: "4% 0px 0px 3%",
                          fontWeight: "500",
                        }}
                      >
                        {val.value}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid sx={{ display: "flex" }}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      margin: "10px 10px 0px 20px",
                    }}
                  >
                    Wallet
                  </Typography>
                  <Grid>
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="150px"
                      data={data}
                      options={options}
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ margin: "10px 10px 0px 0px" }} item xs={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      margin: "0px 10px 0px 60px",
                    }}
                  >
                    3 Currencies
                  </Typography>
                  <Grid>
                    {currencies.map((curr) => {
                      return (
                        <Grid sx={{ display: "flex", marginTop: "10px" }}>
                          <Grid sx={{ display: "flex" }}>
                            <Avatar
                              sx={{
                                width: 24,
                                height: 24,
                                backgroundColor: curr.avatarColor,
                                fontSize: "12px",
                              }}
                            >
                              {curr.avatar}
                            </Avatar>
                            <Grid>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  margin: "0px 10px 0px 10px",
                                }}
                              >
                                {curr.abbre}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "gray",
                                  margin: "0px 10px 0px 10px",
                                }}
                              >
                                {curr.name}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Typography
                            sx={{
                              color: "green",
                              margin: "10px 0px 0px 70px",
                              fontSize: "10px",
                            }}
                          >
                            {"+" + curr.percentage + "%"}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3.8}
          className="grid_styles_div"
          sx={{ marginLeft: "10px" }}
        >
          <Grid sx={{ display: "flex", margin: "15px 0px 0px 12px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Statistics
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "gray",
                margin: "0px 0px 0px 50%",
              }}
            >
              Monthly
            </Typography>
          </Grid>
          <Grid sx={{ width: "320px", margin: "0px 0px 0px 10px" }}>
            {/* <PieChart data={pievalue} /> */}
            <Chart
              chartType="LineChart"
              width="100%"
              height="200px"
              data={data1}
              options={options1}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Bodybottom handleClickShare={handleClickShare} />
      </Grid>
    </Box>
  );
};

export default BodyComponent;
