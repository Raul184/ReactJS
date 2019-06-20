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
    height: "150px" , //temporary adjust
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  miniColor:{
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-5px"
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
  const {classes, paletteName, emoji, colors} = props;
  return(
    <div className={classes.root}>
      <div className={classes.colors}>
        {colors.map( 
           item =>  
             <div className={classes.miniColor} 
                  style={{backgroundColor: item.color}} 
                  key={item.name}  
             />
        )}
      </div>
      <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}


//higher order component
export default withStyles(styles)(MiniPalette);