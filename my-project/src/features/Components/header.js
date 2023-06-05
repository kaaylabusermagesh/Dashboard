import { Avatar, Box, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Header() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            placeholder="Search"
            sx={{ m: 1, width: "40ch", borderRadius: "90px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid sx={{ margin: "20px 0px 0px 20px" }}>
            <MessageRoundedIcon sx={{ color: "black" }} />
          </Grid>
          <Grid sx={{ margin: "20px 0px 0px 20px" }}>
            <NotificationsRoundedIcon sx={{ color: "black" }} />
          </Grid>
          <Grid sx={{ margin: "15px 40px 0px 20px" }}>
            <Avatar>K</Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
