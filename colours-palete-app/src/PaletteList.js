import React, { Component } from 'react'
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from '@material-ui/core';

//SASS-CSS 
const styles = {
  root: {
    background: "blue",
    height: "100vh",
    display: "flex",
    justifyContent: "center"

  },
  container:{
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav:{
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },
  palettes:{
    boxSizing:"border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3 , 30%)",
    gridGap: "5%"
  },
  lnk:{
    color: "white",
    textDecoration: "none"
  }
}
class PaletteList extends Component {
  render() {
    const {palette , classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>         {/* GRID */}
          <nav className={classes.nav}>             {/* Section 1 */} 
            <h1>React Colors</h1>
            <Link to="/" className={classes.lnk}>Create Palete</Link>
          </nav>
          <div className={classes.palettes}>        {/* Section 2 */}
            {palette.map(p =>
              <MiniPalette key={p.id} {...p}></MiniPalette>
            )
            }
          </div> 
        </div>
      </div>
    )
  }
}

//High Order component
export default withStyles(styles)(PaletteList);