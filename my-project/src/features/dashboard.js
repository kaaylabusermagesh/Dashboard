import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import GridComponent from './grid'
import Pie from './pie';
import { Box, Grid } from '@mui/material';

function Dashboard() {
  const [list1] = useState([10, 20, 30, 40])
  const [pie1, setPie1] = useState([
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ])
  const [pie2, setPie2] = useState([
    { title: 'Three', value: 20, color: '#6A2135' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'one', value: 10, color: '#E38627' },
  ])
  const [pie3] = useState([
    { title: 'Two', value: 10, color: '#C13C37' },
    { title: 'One', value: 15, color: '#E38627' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ])

  useEffect(() => {
    setTimeout(() => {
      setPie2([
        { title: 'Two', value: 10, color: 'red' },
        { title: 'One', value: 15, color: 'blue' },
        { title: 'Three', value: 20, color: 'green' },
      ])
    }, "9000")
  })

  const handleClickPieChart = () => {
    console.log("This is onClick console")
    setPie1([
      { title: 'Two', value: 10, color: 'black' },
      { title: 'One', value: 15, color: 'violet' },
      { title: 'Three', value: 20, color: 'yellow' },
    ])
  }
  return (
    <Box className='main_divfor_dashboard'>
      <Box className='dashboard_maindiv_header'>
        <h1>Dashboard</h1>
      </Box>
      <GridComponent List={list1} />
      <Grid container sx={{marginTop:"50px"}}>
        <Grid item xs={3.8} className='piechart_subgrid' > <Pie Pie={pie1} Click={handleClickPieChart} /></Grid>
        <Grid item xs={3.8} className='piechart_subgrid' sx={{ marginLeft: "20px" }}> <Pie Pie={pie2} /></Grid>
        <Grid item xs={3.8} className='piechart_subgrid ' sx={{ marginLeft: "20px" }}> <Pie Pie={pie3} /></Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
