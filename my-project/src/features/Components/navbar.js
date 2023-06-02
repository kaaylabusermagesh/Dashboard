import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


function Navbar() {
    return (
        <Box >
            <Grid sx={{ display: "flex", margin:"20px 10px 20px 10px"}}>
                <Grid> <Avatar>K</Avatar></Grid>
                <Grid sx={{margin:"10px"}}><Typography sx={{fontWeight:"bold"}}>Hylesoin</Typography></Grid>
            </Grid>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GridViewRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <WebAssetRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Assets" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AutoGraphRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trade" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PaymentRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pay" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SendRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="For You" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupAddRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Invite Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default Navbar