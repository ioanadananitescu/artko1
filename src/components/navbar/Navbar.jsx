import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';


import useStyles from './styles.js';





const Navbar = ({totalItems}) => {

  const classes=useStyles();
const location=useLocation();

  if (!totalItems) 
  return(
    <>
<AppBar position="fixed" className={classes.appBar} color="inherit">
  <Toolbar>
    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
      <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
      ARTKO. Art Agency

    </Typography>
    <div className={classes.grow}/>
    </Toolbar></AppBar>
    </>
  )

  
  return (
<>
<AppBar position="fixed" className={classes.appBar} color="inherit">
  <Toolbar>
    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
      <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
      ARTKO. Art Agency

    </Typography>
    <div className={classes.grow}/>

    {location.pathname =='/' &&(
    <div className={classes.button}>
      <IconButton component={Link} to='/cart' aria-label="Show items in the cart" color="inherit">
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCart/>
        </Badge>
      </IconButton>
    </div>)}


  </Toolbar>
</AppBar>
</>
  )
}

export default Navbar


