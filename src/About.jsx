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
import bs2 from '../src/image/bs2.jpg'
import Common from "./Common"


const About =()=> {
  
    return (
      
  <React.Fragment>
 <Common name= " Welcome to About page" btname = " Contact Now" visit ="/contact" imgsrc={bs2} />
 </React.Fragment>

  );
}
  
  export default About;