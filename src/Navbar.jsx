import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom'
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const theme = {
    spacing: 8,
  }
  

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title} >
           Lenin website
          </Typography>
             <Typography variant="h6"  >
            <NavLink   style ={{color:"white", textDecoration: 'none'}}  to ="/">Home</NavLink>  
            <NavLink   style ={{color:"white",textDecoration: 'none'}} to ="/about"> About</NavLink>  
            <NavLink   style ={{color:"white",textDecoration: 'none'}} to ="/service"> Service</NavLink> 
            <NavLink  style ={{color:"white",textDecoration: 'none'}} to ="/contact"> Contact</NavLink> 
          </Typography>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
