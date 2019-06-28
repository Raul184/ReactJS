import React, { Component } from 'react'
import lifecycle from 'react-pure-lifecycle';
// MENU 
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// COLOR PICKER
import { SketchPicker } from 'react-color';
//BUTTONS on Color Picker
import Button from '@material-ui/core/Button';
//TEXT FIEld
// import TextField from '@material-ui/core/TextField';
import DraggableColorBox from './DraggableColorBox'
// VALIDATOR Form
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
//Key
const uuidv4 = require('uuid/v4');

//STYLES
const drawerWidth = 350;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default class NewPaletteForm extends Component {
  classes = useStyles();
  theme = useTheme();
  // Hooks 
  //Menu
  const [open, setOpen] = React.useState(false);
  //Color set on Btn
  const [color, setColor] = React.useState("red");
  //Colors rendered
  const [colors , setColors] = React.useState([{color , name: 'default'}]);
  //Naming new Palettes
  const [nueName, setNueName] = React.useState();
  // HANDLERS
  handleDrawerOpen() {
    setOpen(true);
  }

  handleDrawerClose() {
    setOpen(false);
  }
  handleColorChange = (nueColor) => {
    setColor(nueColor.hex);
  }

  handleColors = () => {
    //Format 
    const nue = {
      color,
      name: nueName
    }
    setColors([...colors , nue])
    console.log(colors);
  }

  const handleNameChange = (e) => {
    setNueName(e.target.value)
  }

  componentDidMount(props) {
      ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
        this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      );
    }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {/* 
        NAV LEFT
        */}
        <Divider />
        <Typography variant="h4">
          Design your palette
        </Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>

        <SketchPicker color={color} 
                      onChangeComplete={handleColorChange}
        />

        {/* IMPORTED FORM */}
        <ValidatorForm onSubmit={handleColors}>
          <TextValidator
            value={nueName}
            onChange={handleNameChange}
            validators={["required", "isColorNameUnique"]}
            errorMessages={["this field is required", "Color name already taken"]}
          />
        </ValidatorForm>
        {/* IMPORTED FORM */}
        <Button variant="contained" color="primary"
          type="submit" style={{ backgroundColor: color }}>
          ADD COLOR
          </Button>
        {/* 
        TextField 
        */}
        {/* <TextField
          id="standard-with-placeholder"
          label="Name your palette! xD"
          // placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        /> */}
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map(color => <DraggableColorBox key={uuidv4()}  background={color.color} name={color.name} />)}
      </main>
    </div>
  );
}

