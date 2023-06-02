import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WebAssetRoundedIcon from "@mui/icons-material/WebAssetRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

function Navbar() {
  const [navList] = useState([
    {
      component: <GridViewRoundedIcon />,
      title: "Dashboard",
    },
    {
      component: <WebAssetRoundedIcon />,
      title: "Asset",
    },
    {
      component: <AutoGraphRoundedIcon />,
      title: "Trade",
    },
    {
      component: <PaymentRoundedIcon />,
      title: "Pay",
    },
    {
      component: <SendRoundedIcon />,
      title: "For You",
    },
    {
      component: <GroupAddRoundedIcon />,
      title: "Invite Friends",
    },
    {
      component: <SettingsRoundedIcon />,
      title: "Settings",
    },
  ]);
  return (
    <Box>
      <Grid sx={{ display: "flex", margin: "20px 10px 20px 10px" }}>
        <Grid>
          {" "}
          <Avatar>K</Avatar>
        </Grid>
        <Grid sx={{ margin: "10px" }}>
          <Typography sx={{ fontWeight: "bold" }}>Hylesoin</Typography>
        </Grid>
      </Grid>
      <nav aria-label="main mailbox folders">
        <List>
          {navList.map((nav) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{nav.component}</ListItemIcon>
                  <ListItemText primary={nav.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

export default Navbar;
