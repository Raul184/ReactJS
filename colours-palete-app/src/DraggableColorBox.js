import React from 'react'
import {withStyles} from "@material-ui/styles"


const styles = {
  root:{
    width: "20%",
    /* height of the palette (Parent) */
    height: "25%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
  }
};

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root} style={{backgroundColor: props.background}}>
      {props.background}
    </div>
  )
}
export default withStyles(styles)(DraggableColorBox);