import React from 'react'
import {Link} from "react-router-dom";
import TablaJokes from "./TablaJokes";
import { withStyles } from "@material-ui/styles";

const styles = {
  root:{
    border: "1px solid black",
    boxShadow: "3px 3px 5px 10px aliceblue",
    padding: "10px",
    width: "100%",
    marginBottom: "20px"
  },
  link:{
    padding: "10px 15px",
    margin: "20px",
    color: "white",
    backgroundColor: "lightBlue",
    border: "1px solid white",
    textDecoration: "none",
    float: "right"
  }
}

function PestaI(props) {
  return (
    <div className="PestaI">
      <h1>Pesta 1</h1>
      <TablaJokes />
      {/* Optional */}
      {/* <Link to="/" className={props.classes.link}>Back</Link> */}
    </div>
  )
}

export default withStyles(styles)(PestaI);