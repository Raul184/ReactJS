import React from 'react'
// ROUTER
import {Link} from "react-router-dom";
// COMPONENTS
import Formu from "./Formu";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
  
  },
  link: {
    padding: "10px 15px",
    margin: "20px",
    color: "white",
    backgroundColor: "lightBlue",
    border: "1px solid white",
    textDecoration: "none",
    float: "right"
  }
}

function PestaII(props) {
  return (
    <div className="PestaII">
      <h1>Pesta 2</h1>
      <Formu />
      {/* Optional */}
      {/* <Link to="/" className={props.classes.link}>Back</Link> */}
    </div>
  )
}

export default withStyles(styles)(PestaII);