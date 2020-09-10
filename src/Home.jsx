import React, { Component } from 'react'
import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import bs from '../src/image/bs.jpg'
import Common from "./Common"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
      
    },
  },
  rootc: {
    maxWidth: 600,
  },
}));

const Home =()=> {
  const classes = useStyles();
    return (
      
  <React.Fragment>
<div style={{ width: '100%' }}>
<Box display="flex" justifyContent="center" mt={20} p={0.5} bgcolor="background.paper">
<Typography justifyContent = "center" comonent="div" variant="h4" style={{ height: '100vh' }} >
           Grow your business with <span style={{ color: 'aqua' }} >Lenin</span>
           <br/>
           We are team of talented developers making Website
 </Typography>
 <div className={classes.root}>
 <Button  variant="contained" color="secondary"href="/about">
        Get Started
      </Button>
 </div>
 <div>
 <Card className={classes.rootc}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="600"
          image={bs}
          title="Business"
        />
         </CardActionArea>
         </Card>
         </div>

</Box>
 </div>

 </React.Fragment>

  );
}
  
  export default Home;
  