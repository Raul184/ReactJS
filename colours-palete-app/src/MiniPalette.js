//Styles CSS in React with Material UI Library
// npm install @material-ui/styles
// withStyles
import React from 'react';
import {withStyles} from '@material-ui/core';

//SASS-CSS styles
const styles = {
  root:{
    backgroundColor: "white",
    borderRadius: "5px",
    border: "2px solid black",
    padding: ".5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors:{
    backgroundColor: "grey",
  },
  title:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji:{
    paddingLeft: ".4rem",
    fontSize:"1.5rem"
  }
};

function MiniPalette(props){
  //grab style classes 
  const {classes, paletteName, emoji} = props;
  return(
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}


//higher order component
export default withStyles(styles)(MiniPalette);