import React from 'react'
import {Link} from "react-router-dom";
import { withStyles } from "@material-ui/styles";



const styles = {
  root:{
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    zIndex: "9999",
    borderBottom: "2px solid red",
    lineHeight: "0.9"
  },
  h:{
    float: "left",
    textDecoration: "none",
    paddingLeft: "20px",
    color: "white"
  },
  items:{
    lineHeight: "76px",
    textDecoration: "none",
    padding: "20px",
    color: "white"
  }
}

function MenuNav(props) {
  const {classes } = props;
  return (
    <div className={classes.root}>
      <nav>
        <Link className={classes.h} to="/"><h1>React Test</h1></Link>
        <Link className={classes.items} to="/pestaI">Pesta 1</Link>
        <Link className={classes.items} to="/pestaII">Pesta 2</Link>        
      </nav>
    </div>
  )
}

export default withStyles(styles)(MenuNav);