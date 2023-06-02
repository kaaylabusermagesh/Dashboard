import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Bodybottom from "./bodybottom";
import { PieChart } from "react-minimal-pie-chart";

function BodyComponent() {
  const [arrayList1] = useState([
    {
      avatar: "B",
      avatarColor: "#F39B40",
      name: "Bitcoin",
      code: "17.6859 BTC",
      price: "$434.456.0",
      percentage: " +1.29%",
      percentageColor: "green",
      percentagebg: "#E1EFEB",
    },
    {
      avatar: "E",
      avatarColor: "#5F85F1",
      name: "Ethereum",
      code: "132.789 ETH",
      price: "$324.654.0",
      percentage: "-0.34%",
      percentageColor: "#F4B7BA",
      percentagebg: "#FFEAED",
    },
    {
      avatar: "A",
      avatarColor: "#F34033",
      name: "Avalanche",
      code: "342.64 AVAX",
      price: "$132.76.0",
      percentage: "-0.23%",
      percentageColor: "#F4B7BA",
      percentagebg: "#FFEAED",
    },
  ]);

  const [currencies] = useState([
    {
      avatar: "B",
      abbre: "BTC",
      avatarColor: "#F39B40",
      name: "Bitcoin",
      percentage: "+3.12%",
    },
    {
      avatar: "E",
      abbre: "ETH",
      avatarColor: "#8451F4",
      name: "Ethereum",
      percentage: "+2.32%",
    },
    {
      avatar: "U",
      abbre: "USDT",
      avatarColor: "#C045FF",
      name: "Tether",
      percentage: "+1.32%",
    },
  ]);
  return (
    <Box>
      <Grid container spacing={2}>
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
                        {arr.price}
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
            <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Grid sx={{ display: "flex" }}>
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: "#FFE1E2",
                        fontSize: "12px",
                      }}
                    >
                      I
                    </Avatar>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        margin: "2% 0px 0px 3%",
                        color: "gray",
                      }}
                    >
                      Income
                    </Typography>
                  </Grid>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      margin: "4% 0px 0px 3%",
                      fontWeight: "500",
                    }}
                  >
                    USD 13.132,22
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Grid sx={{ display: "flex" }}>
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: "#EAEEED",
                        fontSize: "12px",
                      }}
                    >
                      E
                    </Avatar>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        margin: "2% 0px 0px 3%",
                        color: "gray",
                      }}
                    >
                      Expense
                    </Typography>
                  </Grid>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      margin: "4% 0px 0px 3%",
                      fontWeight: "500",
                    }}
                  >
                    USD 2.212,43
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid sx={{ display: "flex" }}>
                <Grid>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      margin: "10px 10px 0px 20px",
                    }}
                  >
                    Wallet
                  </Typography>
                </Grid>
                <Grid sx={{ margin: "10px 10px 0px 80px" }}>
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
                            {curr.percentage}
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
          <Grid sx={{ width: "200px", margin: "20px 0px 0px 80px" }}>
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Bodybottom />
      </Grid>
    </Box>
  );
}

export default BodyComponent;
