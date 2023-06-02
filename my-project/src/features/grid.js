import "./dashboard.css"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

function GridComponent(props) {
    // const List1 = props.List
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <Grid item xs={2.8} className="grid_for_dashboard" style={{margin:"10px 10px 10px 10px"}}>
                        Count1 : 10
                    </Grid>
                    <Grid item xs={2.8} className="grid_for_dashboard" style={{margin:"10px 10px 10px 10px"}}>
                        Count2 : 20
                    </Grid>
                    <Grid item xs={2.8} className="grid_for_dashboard" style={{margin:"10px 10px 10px 10px"}}>
                        Count3 : 30
                    </Grid>
                    <Grid item xs={2.8} className="grid_for_dashboard" style={{margin:"10px 10px 10px 10px"}}>
                        Count4 : 40
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid style={{ display: "flex" }}>
                {List1.map((data) => {
                    return (
                        <Grid container spacing={2} >
                            <Grid item xs={2.8} className="grid_for_dashboard">
                                Count: {data}
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid> */}

        </Box>
    )
}

export default GridComponent
