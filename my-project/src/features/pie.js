import React from 'react'
import "./dashboard.css"
import { PieChart } from 'react-minimal-pie-chart';
import { Box, Grid } from '@mui/material';


function Pie(props) {
    
return (
    <Box>
       <Grid className='piechart_maindiv'>
          <PieChart
            data={props.Pie}
            onClick={props.Click}
          />
        </Grid>
    </Box>
  )
}

export default Pie
