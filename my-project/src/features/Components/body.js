import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Bodybottom from "./bodybottom";
import { PieChart } from "react-minimal-pie-chart";

function BodyComponent() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
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
                    backgroundColor: "orange",
                    fontSize: "12px",
                  }}
                >
                  B
                </Avatar>
                <Typography
                  sx={{ margin: "0px 0px 0px 10px", fontWeight: "bold" }}
                >
                  Bitcoin
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", margin: "10px" }}>
                <Grid>
                  <Typography sx={{ fontWeight: "bold" }}>
                    17.6859 BTC
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "3px" }}
                  >
                    $434.456.0
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    width: "45px",
                    backgroundColor: "#E1EFEB",
                    height: "15px",
                    borderRadius: "10px",
                    margin: "15px 0px 0px 20px",
                  }}
                >
                  <Typography
                    sx={{ color: "green", fontSize: "10px", marginLeft: "5px" }}
                  >
                    +1.29%
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
                    backgroundColor: "#5F85F1",
                    fontSize: "12px",
                  }}
                >
                  E
                </Avatar>
                <Typography
                  sx={{ margin: "0px 0px 0px 10px", fontWeight: "bold" }}
                >
                  Ethereum
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", margin: "10px" }}>
                <Grid>
                  <Typography sx={{ fontWeight: "bold" }}>
                    132.789 ETH
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "3px" }}
                  >
                    $324.654.0
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    width: "45px",
                    backgroundColor: "#FFEAED",
                    height: "15px",
                    borderRadius: "10px",
                    margin: "15px 0px 0px 20px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F4B7BA",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    -0.34%
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
                    backgroundColor: "#F34033",
                    fontSize: "12px",
                  }}
                >
                  A
                </Avatar>
                <Typography
                  sx={{ margin: "0px 0px 0px 10px", fontWeight: "bold" }}
                >
                  Avalanche
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", margin: "10px" }}>
                <Grid>
                  <Typography sx={{ fontWeight: "bold" }}>
                    342.64 AVAX
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "3px" }}
                  >
                    $132.76.0
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    width: "45px",
                    backgroundColor: "#FFEAED",
                    height: "15px",
                    borderRadius: "10px",
                    margin: "15px 0px 0px 20px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F4B7BA",
                      fontSize: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    -0.23%
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="grid_styles_div"
            sx={{ margin: "10px 10px 0px 20px", display: "flex" }}
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
                    <Grid sx={{ display: "flex", marginTop: "10px" }}>
                      <Grid sx={{ display: "flex" }}>
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: "orange",
                            fontSize: "12px",
                          }}
                        >
                          B
                        </Avatar>
                        <Grid>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            BTC
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "gray",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            Bitcoin
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
                        +3.12%
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", marginTop: "10px" }}>
                      <Grid sx={{ display: "flex" }}>
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: "#8451F4",
                            fontSize: "12px",
                          }}
                        >
                          E
                        </Avatar>
                        <Grid>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            ETH
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "gray",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            Ethereum
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
                        +2.32%
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", marginTop: "10px" }}>
                      <Grid sx={{ display: "flex" }}>
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: "#C045FF",
                            fontSize: "12px",
                          }}
                        >
                          U
                        </Avatar>
                        <Grid>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            USDT
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "gray",
                              margin: "0px 10px 0px 10px",
                            }}
                          >
                            Tether
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
                        +1.32%
                      </Typography>
                    </Grid>
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
