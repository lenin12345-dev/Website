import React from 'react';
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import './App.css';
import { Switch,Route, Redirect } from 'react-router-dom'; 
import  Navbar from "./Navbar"

const App =()=> {
  return (
    
    <React.Fragment>
    < Navbar/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/about" component={About}/>
        <Route exact path = "/service" component={Service}/>
        <Route exact path = "/contact" component={Contact}/>
        <Redirect to = "/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
